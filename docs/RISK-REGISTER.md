# Risk Register

This register tracks practical risks for CyberPath Repaired.

| ID | Risk | Severity | Probability | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-001 | Vercel project name and GitHub repository name are misaligned. | Medium | High | Repository owner | Rename GitHub repository or document mapping clearly. | Open |
| R-002 | No automated test suite beyond build/typecheck. | Medium | High | Engineering | Add unit, component, and acceptance tests. | Open |
| R-003 | Deployment source appears CLI/Codex-driven rather than fully Git-linked. | Medium | Medium | Repository owner | Connect Vercel Git integration to the intended repository and branch. | Open |
| R-004 | Cybersecurity learning content may become stale. | High | Medium | Content owner | Add content source, version, and review date fields. | Open |
| R-005 | Future cloud sync could violate local-first expectation. | High | Medium | Product owner | Require architecture decision record before implementation. | Open |
| R-006 | Accessibility gaps may be missed without automated and manual checks. | Medium | Medium | Engineering | Add accessibility checklist and future automated scans. | Open |
| R-007 | Secrets accidentally committed during deployment work. | High | Low | Repository owner | Use `.env.example`, secret scanning, and PR review. | Open |
| R-008 | Analytics or tracking added without clear privacy communication. | Medium | Medium | Product owner | Document analytics purpose and keep learner data minimal. | Open |

## Review cadence

Review this register before major releases and after production incidents.

## Risk acceptance rule

High-risk items should not be silently accepted. They require explicit owner acknowledgement and a mitigation plan.
