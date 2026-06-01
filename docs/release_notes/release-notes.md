# Release Notes

## 2.1.0

Updated: 2026-06-01

### Added

- **Manage content files from downloads** — The Download Content dialog now adds **New** and **Edit** actions beside existing Objects, Extensions, and Areas file selections. You can create new user-managed content lists, optionally copy from an existing file, and edit user files directly in Notepad++ or Notepad while shipped default files remain read-only.
- **Centralized uninstall dialog** — Removed the per-version uninstall action from the home screen and added a top-level **Uninstall** toolbar button that opens a tabbed dialog for batch uninstalling installed versions.
- **Seaview uninstall support** — The uninstall dialog now includes a **Seaview** tab that finds installed `SeaviewR7` versions from the Windows uninstall registry and queues their silent uninstall commands alongside Spirit uninstall jobs.
- **Seaview R7 version override tab** — Version Settings now includes a **Seaview R7** tab that shows the default version resolved from `SpiritApplicationVersions.json`, lists installed Seaview R7 versions, and lets you switch the executable override for both x64 and x86 simulator configuration files without opening the raw XML editor.
- **Tabbed content downloads** — The Download Content dialog now uses separate **Objects**, **Extensions**, and **Areas** tabs with the version selector above the tabs, fixed-size modal layout, and both **Download** and **Download and Close** actions that queue only the active tab.
- **Area chart type option** — Area downloads now include a **Chart type** choice with **Default**, **Standard**, and **Native**. Standard and Native add the matching `-ct` argument to the kc area download command.
- **Installer tabs for Seaview and prerequisites** — The main install dialog now includes separate tabs for **Spirit**, **Seaview R7**, and **K-Sim Prerequisites**. Seaview downloads now run silently with no installer UI, prerequisites downloads start the downloaded executable with `/z /v /noreboot`, and both clean up their temporary download files afterward.
- **Documentation web page** — Added user documentation and release notes available though github pages. 
- **In-app documentation links** — The main window now includes a toolbar help button and a **What's new** action in the update banner that open documentation URLs.
- **Seaview R7 object download queue entries** — Object downloads can now queue Seaview R7 model downloads as separate entries, including an option to download only Seaview R7 models for the selected product codes. Seaview R7 model downloads now target `ContentServer\models`, and Spirit Launcher creates that folder automatically when setting up the content root.
- **Onboarding and quick-start docs** — Added published DocFX pages for onboarding and quick start, and the onboarding wizard now includes a **Help** button on every step that opens the onboarding guide directly.

### Fixed

- **Streamlined onboarding content migration** — The onboarding flow no longer lets you skip migrating existing system content folders after choosing a content root, and starting the migration now runs immediately without an extra confirmation popup. You must complete the migration step before continuing so symlink setup can succeed.

## 2.0.0

Released: 2026-05-24

### Added

- **Startup self-update banner** — Spirit Launcher now checks for a newer `spiritlauncher` pipeline after the main window opens, compares it to the running app version, and shows an inline update banner when a newer version is available.
- **Queue-aware self-update actions** — The new **Update now** and **Update on close** flows wait for queued operations to finish before downloading the MSI, keep the status inline in the main window, and launch the installer in visible passive mode immediately or on application close.

### Changed

- **Configurable startup update checks** — Settings now includes an **Update Settings** section with a **Check for updates on startup** toggle. It defaults to enabled for new and existing installs, and the choice is saved in `settings.json`.

## 1.12.1

Released: 2026-05-21

### Changed

- **More compact Simulator Configuration tab** — Reduced spacing and control density in the Simulator Configuration editor so more settings are visible at once.
- **Simulator Configuration search** — Added a live search box that filters settings by name, XML name, and description while typing.
- **Footer action layout** — Moved Simulator Configuration Save, Discard, and Reload actions into the shared footer next to Close, and only show them while the Simulator Configuration tab is active.
- **Cleaner top section** — Removed the x64/x86 file status text from the top of the Simulator Configuration tab and kept only the split-edit toggle plus search field.

## 1.12.0

Released: 2026-05-21

### Added

- **Simulator Configuration editor tab** — Version Settings now includes a metadata-driven **Simulator Configuration** tab that loads x64 and x86 `SimulatorConfiguration.xml` files, shows known settings with descriptions, and lets users edit them without opening an external text editor.
- **Combined and separate architecture editing** — The editor starts in combined mode when x64 and x86 configuration content matches, automatically switches to separate mode when the files differ, and asks whether to use x64, use x86, or stay separated when merging back to combined mode.
- **Editable definition catalog** — Simulator Configuration option metadata now lives in `Assets/simulatorconfiguration_editor/SimulatorConfigurationDefinitions.json`, so new settings, labels, descriptions, value types, and nested list entries can be added without changing the parser.
- **Unknown XML fallback** — XML settings found in real `SimulatorConfiguration.xml` files but missing from the metadata catalog are still shown in the editor using their raw XML name and can be toggled on or off while preserving their existing XML payload.

## 1.11.0

Released: 2026-05-15

### Added

- **Model download warnings** — Object downloads now compare requested product codes with the models reported by `kc` and keep a warning item in the operation queue when requested codes were not found, or when `kc` reports partially successful or failed deployment downloads. The main queue summary and details popup show the warning details.

## 1.10.1

Released: 2026-05-14

### Fixed

- **Content downloads reuse mapped folders** — Downloading Objects, Areas, or Extensions for a selected Spirit version now targets that version's selected mapped content folder when the optional destination field is empty, only falling back to generated folder names when no mapped folder is selected.
- **Content download destination logging** — Download requests now re-read the latest saved folder mapping for the selected version and log whether the destination came from manual input, the selected version mapping, or a generated folder name.
- **Fresh mapped folder changes** — Changing a version's Object, Extensions, or Area folder in Content Management now immediately updates the shared version state and queued downloads re-check the saved mapping before running.

## 1.10.0

Released: 2026-04-30

### Fixed

- **Active Spirit version detection for both product names** — `SpiritService` now recognizes installed Spirit versions registered as either `Kongsberg K-Sim Simulator` or `Kongsberg Maritime K-Sim Simulator` when resolving the active Resource Manager startup target.

## 1.9.2

Released: 2026-04-29

### Fixed

- **Higher-contrast running and compatibility states** — Improved the visibility of the running-version highlight and strengthened the compatible/incompatible color cues in content management and extension compatibility views.

## 1.9.1

Released: 2026-04-27

### Added

- **Areas download from exercise file** — The Download Content dialog now includes a **From Exercise** option for Areas that reads `ExerciseAreas.Areas[]` from a `.kgexc.recovery` file and reuses the existing manual area download flow.

## 1.9.0

Released: 2026-04-26

### Added

- **Objects download from exercise file** — The Download Content dialog now includes a **From Exercise** option for Objects that lets users browse to a `.kgexc.recovery` file, extract unique `DynamicObjects[].TypeId` model codes, and reuse the existing manual object download flow.
- **Version-aware exercise picker default** — The exercise-file picker now defaults to `C:\ProgramData\Kongsberg\KSim\Exercise` for KSim versions and `C:\ProgramData\Kongsberg\Nemo\Exercise` for Nemo versions when those folders exist.

## 1.8.0

Released: 2026-04-14

### Changed

- **Modern dark UI overhaul** — Switched to a polished dark theme (`#1E1E2E` background) with consistent styling across all windows and dialogs.
- **Rounded corners** — All buttons (CornerRadius 6), cards (CornerRadius 8–10), text inputs, combo boxes, and content folder items now use rounded corners for a modern feel.
- **Card-style version list** — Version items in the main window now render as rounded cards with improved padding and spacing.
- **Refined toolbar and status bar** — Top toolbar and bottom log bar use a unified dark surface color (`#252536`) with subtle border separators.
- **Better typography** — Section headers use a lighter foreground (`#E0E0F0`), subtle text uses muted tones (`#8888AA`), and monospace areas use Cascadia Code font.
- **Global style classes** — Added reusable `.card`, `.toolbar`, `.statusbar`, `.sectionHeader`, `.subtle`, `.accent`, and `.danger` style classes in App.axaml for consistency.
- **Consistent dialog styling** — All dialogs (Settings, Download, Content Management, Confirmation, Extension Versions, Operation Queue, Download Queue, etc.) updated with matching dark theme, spacing, and rounded elements.

## 1.7.5

Released: 2026-03-18

### Fixed

- **Installer location** — Changed installation location to avoid Kongsberg IT issues.

## 1.7.4

Released: 2026-03-18

### Fixed

- **Settings file save errors under concurrent load** — `SettingsService` is now a singleton (`SettingsService.Instance`) shared across all ViewModels, eliminating lost-write races from independent instances each holding their own stale in-memory copy.
- **Concurrent `File.WriteAllText` during startup** — All writes in `Save()` are now protected by a `lock`, preventing `IOException` (file in use) when multiple threads attempted to write simultaneously.
- **Excessive settings file writes during version loading** — The parallel MIV calculation tasks (up to 5 concurrent) no longer each write to `settings.json` individually. All metadata caches are now accumulated in memory and flushed to disk in a single write after all tasks finish.

## 1.7.3

Released: 2026-03-17

### Added

- **Fix button in symlink conflict dialog** — When launching a Spirit version and a real (non-symlink) Object, Extensions, or Area folder is found blocking symlink creation, the warning dialog now shows a **Fix** button in addition to the existing "Start Anyway" and "Cancel" options.
	- **Empty folders**: Deleted in-place.
	- **Non-empty folders**: Migrated to the appropriate subfolder under the configured content root (same logic as onboarding migration: Objects get MIV suffix, Extensions get KSim/Nemo suffix, Areas keep original name).
	- After a successful fix the Resource Manager starts automatically.
	- On partial failure an error is shown and "Start Anyway" is offered.

### Changed

- **Smarter conflict detection before launching** — `SymlinkService.ValidateSymlinkPreconditions()` now checks only the folders that would actually receive a symlink. If Object, Extensions, or Area content is set to "None" (or not configured), the corresponding system folder is no longer reported as a conflict, eliminating false-positive warnings.

## 1.7.2

Released: 2026-03-17

### Fixed

- **No warning when content is not configured** — Launching Resource Manager for a Spirit version that has no content settings saved (not even "None") no longer shows a dialog warning about unselected Object / Extensions / Area folders. The launch proceeds silently; symlinks are left absent or cleared. Warnings still appear for real issues: missing system folder, conflicting real directories, and missing previously-configured paths.
- **Settings dialog no longer auto-selects content** — Opening version settings (Content Management window) no longer auto-picks a compatible folder when the current selection is empty. The dialog now strictly reflects the saved state. Users must explicitly choose a folder.
- **Auto-select restricted to first-seen versions** — Compatible folder auto-selection now happens only once, the first time this app discovers a Spirit version (no prior settings entry). The selection is immediately persisted so subsequent app restarts and settings opens leave it unchanged. Versions that already have a settings entry (including explicit "None") are never changed automatically.

## 1.7.1

Released: 2026-03-08

### Added

- **System folder pre-flight check** — New Step 3 in onboarding wizard (between Content Root and Docker Runtime) that detects non-symlink Object, Extensions, and Area folders in `C:\ProgramData\Kongsberg\KSim\System` and `C:\ProgramData\Kongsberg\Nemo\System` directories. Prevents conflicts when creating symlinks during version activation.
	- **Detection**: Automatically scans both KSim and Nemo system directories when entering Step 3. Only flags real folders; existing symlinks are considered clean.
	- **Migration**: Offers automatic migration of detected folders to the content root with proper naming conventions (Objects get MIV appended, Extensions get interface hash appended, Areas keep original names).
	- **Collision handling**: Appends numeric suffixes (`_2`, `_3`, etc.) if target folder names already exist in content root.
	- **Skip option**: Users can acknowledge the risk and skip migration, though this may cause symlink creation failures later.
- `MigrationCandidate` model — Represents a content folder found in system directories that needs migration. Contains path, content type (Object/Extensions/Areas), system type (KSim/Nemo), display name, and target path.
- `ContentMigrationService` — New service for migrating content folders from system directories to content root.
	- `DetermineMigrationTarget()` — Determines target paths with proper naming: extracts MIV from `*.VersionInfo.json` for Objects, generates hash from extension DLL versions for Extensions, uses original name for Areas.
	- `MigrateFolderAsync()` — Moves a single folder with error handling for permissions, I/O errors, and disk space issues.
	- `MigrateAllFoldersAsync()` — Batch migration with success/failure tracking and detailed result messages.
- `SymlinkService.DetectNonSymlinkFoldersAsync()` — Scans both KSim and Nemo system directories for Object, Extensions, and Area folders that are not symlinks. Returns list of `MigrationCandidate` objects.
- `ContentHelpers.GenerateExtensionHash()` — Static utility method for generating 10-character SHA256 hash from extension interface versions. Extracted from `DownloadContentWindowViewModel` for reuse across the application.

### Changed

- **Onboarding wizard now has 4 steps** (previously 3): Step 1 (K-Sim Connect CLI) → Step 2 (Content Root Folder) → **Step 3 (System Folder Check)** → Step 4 (Docker Runtime). Step indicator updated to show 4 circles.
- `SpiritService` changed from `internal` to `public` to allow instantiation in onboarding workflow.
- `DownloadContentWindowViewModel.GenerateExtensionHash()` removed — now calls `ContentHelpers.GenerateExtensionHash()` instead to eliminate code duplication.

### Technical Details

- **MIV extraction**: Reuses JSON parsing pattern from `ContentValidationService.IsObjectSubdirectoryCompatible()` to read first MIV from `*.VersionInfo.json` files in Object folders.
- **Extension hash generation**: Calls `SpiritService.GetExtensionInterfaceVersions()` to read DLL versions from migrated folder, then `ContentHelpers.GenerateExtensionHash()` to compute hash. No code duplication.
- **Folder naming examples**:
	- Object folder: `MyObjects` → `MyObjects_DCA51D089E` (MIV appended)
	- Extensions folder: `Extensions` → `Extensions_a1b2c3d4e5` (hash appended)
	- Area folder: `MyAreas` → `MyAreas` (no modification)

## 1.7.0

Released: 2026-03-06

### Added

- **3-step onboarding wizard** — Replaced the single-step content-root overlay with a full `OnboardingWindow` + `OnboardingWindowViewModel`. The wizard is shown at startup for new users and whenever the kc CLI is missing or onboarding has not been marked complete.
	- **Step 1 — K-Sim Connect CLI**: Runs `kc info` to detect installation and displays the installed product version. Runs `kc spirit simulator download -if` to probe login status. Provides a **Login** button that launches `kc login` in a browser. Provides an **Update** button that runs `kc update`, tracks the spawned installer process, and shows live status, then re-reads the version on completion.
	- **Step 2 — Content Root Folder**: Folder picker for the content root; subfolders (Objects, Extensions, Areas) are created automatically on advance.
	- **Step 3 — Docker Runtime**: Auto-detects installed Docker Desktop and Rancher Desktop runtimes; pre-selects whichever is currently running (defaults to Rancher if neither is running). Explains that a Docker runtime is required for RabbitMQ. Provides a **Download Rancher Desktop** button (uses existing `kc spirit tool download -pc ocean_prerequisites` flow). **Finish** always enabled so users can skip runtime installation.
- `KSimCliService.GetKcVersionAsync()` — runs `kc info` and parses the `Product version` line.
- `KSimCliService.CheckLoginAsync()` — probes `kc spirit simulator download -if` output for "not authenticated".
- `KSimCliService.RunLoginAsync()` — launches `kc login` via `Process.Start` with `UseShellExecute = true` so the browser opens.
- `KSimCliService.UpdateKcAsync()` — runs `kc update`, streams stdout to a status callback, then finds and waits for the spawned installer process before returning.
- `LaunchSettings.IsOnboardingComplete` — new boolean flag (`false` by default) that persists onboarding completion to `settings.json`.

### Changed

- **Onboarding is now a dedicated window** (`OnboardingWindow` / `OnboardingWindowViewModel`) instead of an inline overlay in `MainWindow`. `MainWindowViewModel` no longer contains any wizard state or commands.
- **App startup** (`App.axaml.cs`) decides at boot whether to show `OnboardingWindow` or go directly to `MainWindow`. Onboarding triggers when `IsOnboardingComplete = false`, `ContentRootFolder` is empty, or `kc.exe` is not in PATH. After the wizard completes, `MainWindow` is created and versions are loaded as normal.
- `DockerService.IsDockerRuntimeRunning(DockerRuntime)` changed from `private` to `public` so it can be used from `OnboardingWindowViewModel`.

### Removed

- `IsSetupRequired` and `PendingContentRootFolder` observable properties from `MainWindowViewModel`.
- `BrowseContentRootCommand` and `CompleteSetupCommand` relay commands from `MainWindowViewModel`.
- Setup wizard overlay `<Border>` from `MainWindow.axaml`.

## 1.6.0

Released: 2026-03-05

### Added

- **Single content root folder** — Replaced the three separate Objects/Extensions/Areas root folder settings with a single `ContentRootFolder`. The Objects, Extensions, and Areas subfolders are derived automatically.
- **First-run setup wizard** — When no content root folder is configured, the main window shows a full-screen setup panel requiring the user to select a content root before the application loads versions. The three subfolders are created automatically if they don't exist.
- **Auto-migration** — On startup, existing three-path settings are automatically migrated to `ContentRootFolder` when all three paths share the same parent directory and are named Objects/Extensions/Areas. If migration cannot be determined unambiguously, the setup wizard is shown instead.
- **Startup subfolder validation** — On each launch, ensures Objects/Extensions/Areas subfolders exist under the configured root; warns the user if creation fails.

### Changed

- **Content management and symlink activation are now always enabled** — The `EnableContentManagement` and `EnableSymlinkActivation` opt-in toggles have been removed. All users benefit from content management and automatic symlink activation when launching Resource Manager.
- Settings dialog now shows a single "Content Root Folder" field with a Browse button, replacing the three-folder pickers and two toggle checkboxes.
- The gear icon on version entries always opens the Content Management window (the fallback Version Settings read-only dialog has been removed).

### Removed

- `VersionSettingsWindow` and `VersionSettingsWindowViewModel` — the read-only version info dialog shown when content management was disabled.
- `EnableContentManagement` and `EnableSymlinkActivation` settings fields (kept as `[Obsolete]` in the model for one-time JSON migration only).
- `ObjectsRootFolder`, `ExtensionsRootFolder`, `AreasRootFolder` settings fields (kept as `[Obsolete]` for one-time migration only).

## 1.5.1

Released: 2026-02-28

### Added

- **Installation Settings** section in the Settings dialog
	- "Add desktop icons" checkbox (default: off) — passes `InstallDesktopShortcuts=1/0` to the Spirit installer when triggering installation