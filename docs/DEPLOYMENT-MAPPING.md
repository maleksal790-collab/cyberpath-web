# Deployment Mapping

This document records the relationship between the active Vercel app and the GitHub repository update.

## Current Vercel project

| Field | Value |
| --- | --- |
| Vercel team | `Malek_Collab' projects` |
| Team slug | `malek-manus-projects` |
| Team ID | `team_3QHQo5zXfgIblBZSUHcciyMw` |
| Project name | `cyberpath-repaired` |
| Project ID | `prj_2L7HElpZFYLgkVY2buVcupGjgT3H` |
| Framework | Vite |

## Latest known production deployment

| Field | Value |
| --- | --- |
| Deployment ID | `dpl_HB1YqzRV2rpyGJmsWXmpFeUAEEc9` |
| URL | `https://cyberpath-repaired-e4b9c5wyo-malek-manus-projects.vercel.app` |
| State | `READY` |
| Target | `production` |
| Creator | `maleksal790-collab` |
| Actor | `codex` |
| Action | `redeploy` |
| Original deployment | `dpl_Hfk8Q4Z3tmepvbVbQ7XMbntbRqyb` |

## GitHub repository alignment

| Field | Value |
| --- | --- |
| Current repository | `maleksal790-collab/cyberpath-web` |
| Updated branch | `cyberpath-repaired-repository-update` |
| Package name after update | `cyberpath-repaired` |
| Deployment config | `vercel.json` |
| CI workflow | `.github/workflows/ci.yml` |

## Important note

The active Vercel project name and the GitHub repository name are not identical. This update aligns the repository content and operating model with the deployed project, but a GitHub repository rename must be performed manually in GitHub settings if the final desired repository name is exactly `cyberpath-repaired`.

## Recommended final mapping

```text
GitHub repository: maleksal790-collab/cyberpath-repaired
Vercel project:   cyberpath-repaired
Primary branch:   main
Build command:    npm run build
Output directory: dist
```

Until the GitHub repository is renamed, use:

```text
GitHub repository: maleksal790-collab/cyberpath-web
Vercel project:   cyberpath-repaired
```
