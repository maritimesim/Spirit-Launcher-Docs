# SpiritLauncher User Manual

SpiritLauncher is the desktop UI for installing Spirit versions, managing version-specific content, and configuring the local runtime on a Windows workstation.

The main window is organized around three areas:

- The top toolbar for the operation queue, refresh, application settings, and help.
- The left action buttons for RabbitMQ, Spirit installation, and content downloads.
- The version list, where each installed Spirit version is shown as its own card with launch and maintenance actions.

## Onboarding

The onboarding wizard opens automatically when Spirit Launcher still needs first-time setup. That happens when onboarding has not been completed yet, when no content root folder is configured, or when the K-Sim Connect CLI is not available.

### Step 1: K-Sim Connect CLI

Use the first page to make sure the `kc` CLI is ready:

1. Click **Re-check** to run the detection again.
2. If the CLI is missing, use the **K-Sim CLI installer** link.
3. If the CLI is installed, review the detected version and click **Update** when needed.
4. If you are not logged in, click **Login** and complete authentication in your browser.

You can only move to the next step when the CLI is installed and you are logged in.

### Step 2: Content Root Folder

This step defines the folder Spirit Launcher will use for shared content storage.

1. Click **Browse** and choose the root folder that should hold `Objects`, `Extensions`, `Areas`, and `ContentServer\models`.
2. Review the path in the text box.
3. Click **Next**.

Spirit Launcher creates the `Objects`, `Extensions`, `Areas`, and `ContentServer\models` folders automatically if they do not already exist.

### Step 3: System Folder Check

This step checks whether existing real folders in the system content locations could block symlink-based content activation.

1. Wait for the scan to complete.
2. If no conflicts are found, continue with **Next**.
3. If non-symlink folders are detected, review the warning list.
4. Click **Migrate Folders** to move the detected folders into the content root with safe names.
5. Use **Skip (Not Recommended)** only when you deliberately want to keep the existing system folders unchanged.

The wizard only enables **Next** after the scan is clear or after migration has completed.

### Step 4: Docker Runtime

RabbitMQ depends on a supported Docker runtime.

1. Review the detected runtime status for **Rancher Desktop** and **Docker Desktop**.
2. Select the runtime you want Spirit Launcher to use.
3. If a runtime is missing, click **Download** beside that option.
4. Click **Finish** when the setup is complete.

You can finish onboarding without a runtime, but RabbitMQ and simulator communication will not work until one is installed.

## Manage Spirit Versions

The main window is where you manage installed versions and monitor ongoing work.

### Main window actions

- **RabbitMQ** starts or stops the local RabbitMQ runtime.
- **Install** opens the Spirit installation dialog.
- **Content** opens the content download dialog.
- The queue button in the toolbar opens the operation queue.
- **Refresh** reloads the installed version list.
- **Settings** opens Spirit Launcher settings.
- **Help** opens the documentation.

If a self-update is available, a banner appears near the top of the window with **What's new**, **Update now**, and **Update on close** actions.

### Version cards

Each installed Spirit version is shown as a card with actions on the right side.

- The Kongsberg logo button opens **Resource Manager** for that version.
- The instructor button opens **Instructor**.
- The Config Tool button opens **Config Tool**.
- Right-clicking the Config Tool button exposes **Open** and **Open and Connect**.
- The folder button opens a menu for **Bin x64**, **Bin x86**, **Config**, **System**, and **User** folders when they exist.
- The gear button opens version-specific settings and content management.
- **Close all** shuts down applications related to that version.
- **Uninstall** removes the version. This action is disabled while the version is running.

The lower queue panel shows the current operation, queue counts, completion counts, warnings, and failures. The log strip at the bottom shows the latest log message and provides an **Open Logs** button.

## Spirit Version Settings

Open version settings by clicking the gear button on a version card. This opens the content management window for that specific Spirit version.

### Objects tab

Use this tab to choose which object folder the version should use.

- Select **None** if you do not want any object folder active.
- Select a discovered folder from the list.
- Review the compatibility text and any MIV details shown under the folder path.
- Use the refresh icon to **Re-validate** a folder.
- Use the wrench icon to **Fix incompatible content** when the folder is only partially compatible or not compatible.
- Use the folder icon to open the folder in Windows Explorer.
- Use the delete icon to remove the folder from disk.
- Click **Add Manual Folder** to register another folder manually.

The MIV value for the selected Spirit version is shown at the top of the tab and can be copied with the copy button.

### Extensions tab

This tab works like the Objects tab, but for extension folders.

- Select **None** to disable extension folder usage.
- Select a folder from the list and review its compatibility state.
- Click **Show Extension Versions** to inspect detected extension versions.
- Use the details button to inspect extension details for a folder.
- Use **Re-validate**, **Fix incompatible content**, **Open folder**, and **Delete folder** as needed.
- Click **Add Manual Folder** to add another extensions folder.

### Areas tab

Use the Areas tab to choose the active area folder.

- Select **None** to avoid using an areas folder.
- Select one of the listed folders.
- Use the folder button to open it in Explorer.
- Use the delete button to remove it.
- Click **Add Manual Folder** when you want to bring another area folder into the list.

### Simulator Configuration tab

This tab exposes the simulator configuration editor for the selected version.

- Edit the available configuration entries directly in the editor.
- Click **Save** to write changes.
- Click **Discard** to abandon unsaved edits.
- Click **Reload** to reload values from disk.
- Click **Clear All** to remove all editable values from the current configuration state.

If you try to close the window with unsaved simulator configuration changes, Spirit Launcher asks you to confirm before closing.

### Refresh all folders

The **Refresh All** button in the top-right corner rebuilds the content view and runs validation again for the current version.

## Download Spirit

Use the **Install** button on the main window to open the installer dialog for **Spirit**, **Seaview R7**, or **K-Sim Prerequisites**.

1. Click **Install**.
2. Select the tab for the installer you want to run.
3. Enter the **Branch** to install from.
4. Optionally enter a specific **Version**. Leave it empty, or use `latest`, to install the newest available version from that branch.
5. Click **Install** for the selected tab.
6. Monitor progress from the queue panel in the main window.

The installer dialog is pre-filled from Spirit Launcher settings, so the default branch and version usually already match your normal install flow. The branch always maps to `-b`. A specific version adds `-p`, while an empty version or `latest` downloads the newest available package for that branch.

- **Spirit** uses the existing simulator installer flow.
- **Seaview R7** downloads the Seaview installer package, runs it silently with no UI shown to the user, and removes the temporary files.
- **K-Sim Prerequisites** downloads the prerequisites installer executable, starts it with `/z /v /noreboot`, and removes the temporary files.

## Download Content

Use the **Content** button on the main window to open the content download dialog.

### Basic workflow

1. Select one or more content types: **Objects**, **Areas**, or **Extensions**.
2. Choose the target **Spirit Version**.
3. Fill in the required input for each selected content type.
4. Optionally change the destination folder name.
5. Click **Download**.

The **Download** button stays disabled until every selected content type has valid input. Its tooltip explains what is still missing.

### Objects

Objects support four input modes:

- **From Existing File** to pick a known `.txt` file.
- **Browse File** to choose a `.txt` file from disk.
- **Manual Input** to enter space-separated product codes.
- **From Exercise** to extract content from a `.kgexc.recovery` exercise file.

Objects also expose extra options:

- **Include Web Instruments**.
- **Recursive Download Mode** with `None`, `Required`, `Recommended`, or `Optional`.
- **Use custom branch (non-master)** with a branch name field.
- Extra content checkboxes for **Docs**, **DocData**, and **Seaview R7 visual model**.

### Areas

Areas support the same four source modes as Objects:

- **From Existing File**.
- **Browse File**.
- **Manual Input**.
- **From Exercise**.

Areas use a simpler form, with an optional destination folder name and no extra recursive or documentation options.

### Extensions

Extensions support four source modes:

- **From Existing File**.
- **Browse File**.
- **Manual Input**.
- **By Category**.

When using **Manual Input**, choose whether to enter the extension **By Name** or **By Product Code**. When using **By Category**, select one or more of:

- **Delivery Extensions**.
- **System Extensions**.
- **Project Extensions**.

Extensions also support **Use custom branch (non-master)** with a branch name field.

### Existing files and defaults

The existing-file dropdowns combine:

- User-managed `.txt` files from the configured content root.
- Built-in default files shipped with Spirit Launcher, shown with a `[Default]` prefix.

When you confirm the dialog, Spirit Launcher places the download request into the operation queue and processes it from the main window.

## Spirit Launcher Settings

Open the application settings from the gear button in the main window toolbar.

### Docker Settings

- Choose **Docker Desktop** or **Rancher Desktop** as the active runtime.
- Adjust **Startup Timeout (seconds)**.

### RabbitMQ Settings

- Edit the RabbitMQ **Username**.
- Edit the RabbitMQ **Password**.

### Resource Manager Settings

- Toggle **Enable local when starting**.
- Toggle **Enable server when starting**.
- Toggle **Start in the background**.

### Download Settings

- Set the **Download Directory** with the text box or **Browse** button.
- Set the **Default Branch** used by the install dialog.
- Set the **Default Version** used by the install dialog.
- Toggle **Delete installer files after installation**.
- Click **Clear Download Cache** to remove cached install files.

### Installation Settings

- Toggle **Add desktop icons** for newly installed Spirit versions.

### Update Settings

- Toggle **Check for updates on startup**.

### Content Management

- Set the shared **Content Root Folder** with the text box or **Browse** button.

Click **Save** to persist changes or **Cancel** to leave the current settings unchanged.