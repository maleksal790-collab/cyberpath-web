# CyberPath Repaired

CyberPath Repaired is a cybersecurity self-learning platform built as a React + Vite application and aligned to a governed software delivery model. The repository is intentionally structured for clear ownership, repeatable builds, controlled changes, and production deployment through Vercel.

## Current deployment mapping

| Item | Value |
| --- | --- |
| Vercel project | `cyberpath-repaired` |
| Vercel team | `Malek_Collab' projects` |
| Framework | Vite |
| Current production deployment | `dpl_HB1YqzRV2rpyGJmsWXmpFeUAEEc9` |
| Current production URL | `https://cyberpath-repaired-e4b9c5wyo-malek-manus-projects.vercel.app` |
| Source repository candidate | `maleksal790-collab/cyberpath-web` |

> Note: the Vercel app is named `cyberpath-repaired`, while the GitHub repository is currently `cyberpath-web`. This repository update aligns the GitHub operating model with the deployed app name without breaking the existing repository history.

## Product principle

CyberPath should remain local-first, privacy-conscious, and useful without forcing learners into accounts, cloud dependency, or artificial certification claims. Cloud sync, AI assistance, and formal certification can be future integrations, but they must not become fake promises or hidden dependencies.

## Quick start

```bash
git clone https://github.com/maleksal790-collab/cyberpath-web.git
cd cyberpath-web
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verification commands

```bash
npm run typecheck
npm run build
npm run ci:verify
npm run preview
```

## Repository structure

```text
.
├── .github/
│   ├── workflows/ci.yml
│   ├── pull_request_template.md
│   └── CODEOWNERS
├── docs/
│   ├── ACCEPTANCE-CHECKLIST.md
│   ├── DELIVERY-PIPELINE.md
│   ├── DEPLOYMENT-MAPPING.md
│   ├── REPOSITORY-OPERATING-MODEL.md
│   └── RISK-REGISTER.md
├── public/
├── src/
├── package.json
├── vercel.json
└── README.md
```

## Governed delivery model

Every meaningful change should pass through this control path:

1. Define the change scope.
2. Create a feature branch.
3. Run local verification.
4. Open a pull request using the repository template.
5. Pass GitHub Actions CI.
6. Review product, security, and deployment impact.
7. Merge to `main` only after acceptance criteria are satisfied.
8. Deploy through Vercel and record the deployment result.

## Definition of done

A change is done only when it meets these conditions:

- The app builds successfully.
- TypeScript checks pass.
- User-facing behavior is documented when changed.
- Security or privacy impact is declared.
- Vercel deployment status is known.
- No core learning workflow requires an account, paid service, or internet connection unless explicitly approved as a future integration.

## Documentation index

| Document | Purpose |
| --- | --- |
| `docs/REPOSITORY-OPERATING-MODEL.md` | Ownership, branching, review, release, and evidence model. |
| `docs/DELIVERY-PIPELINE.md` | Software delivery pipeline from idea to production. |
| `docs/ACCEPTANCE-CHECKLIST.md` | Practical gate checklist before merge or deployment. |
| `docs/DEPLOYMENT-MAPPING.md` | GitHub-to-Vercel mapping and deployment evidence. |
| `docs/RISK-REGISTER.md` | Project risks, severity, owner, and mitigation. |
| `SECURITY.md` | Security posture and reporting path. |
| `CONTRIBUTING.md` | Contribution workflow and engineering expectations. |
| `CHANGELOG.md` | Release history and governance milestones. |

## Near-term roadmap

1. Confirm whether `cyberpath-web` should be renamed to `cyberpath-repaired` in GitHub.
2. Connect Vercel Git integration directly to the repository if not already linked.
3. Add automated unit tests and component tests.
4. Add accessibility checks and Lighthouse evidence.
5. Create a release tag after production validation.

## Status

Repository governance uplift created on branch:

```text
cyberpath-repaired-repository-update
```
