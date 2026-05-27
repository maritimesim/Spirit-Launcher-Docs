# SpiritLauncher Documentation

SpiritLauncher is a Windows desktop application for managing K-Sim Spirit simulator versions, related content, and local runtime dependencies on internal workstations.

## What you can find here

- Release notes for shipped versions.
- A DocFX site rooted entirely under `/docs` for GitHub Pages publishing.
- A stable documentation surface that the desktop app can link to for help and update details.

## Publishing flow

This documentation is authored in Azure Repos, mirrored to the GitHub repository used for publishing, and deployed to GitHub Pages with a custom workflow.

## Release notes

Release notes are maintained manually in `docs/release-notes/index.md`. Add new in-progress notes under `## Unreleased`, then move them into a version section when a release ships.