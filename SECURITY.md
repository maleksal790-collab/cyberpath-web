# Security Policy

CyberPath Repaired is a cybersecurity learning platform, so the repository must behave like one: no casual handling of secrets, learner data, or deployment controls.

## Supported scope

The current supported scope is the active React + Vite application and its Vercel deployment configuration.

| Area | Status |
| --- | --- |
| Frontend application | Supported |
| Vercel deployment configuration | Supported |
| Documentation and learning content | Supported |
| Cloud sync or learner accounts | Not currently in core scope |
| Formal certification or credential issuance | Not currently in core scope |

## Reporting a vulnerability

For now, report issues through GitHub issues or private project coordination with the repository owner.

Include:

- Affected area.
- Steps to reproduce.
- Expected result.
- Actual result.
- Security impact.
- Suggested mitigation, if known.

## Secret handling

Never commit:

- API keys.
- Vercel tokens.
- OAuth client secrets.
- Private certificates.
- `.env` files containing real values.
- Learner personal data.

Use `.env.example` for placeholders only.

## Privacy baseline

The core learning workflow should stay local-first. Any future feature that stores learner progress remotely must define:

- Data collected.
- Purpose.
- Retention period.
- Deletion path.
- Authentication model.
- Risk assessment.

## Deployment security baseline

The Vercel deployment should retain security headers and avoid exposing sensitive runtime configuration. Production changes should be traceable to a pull request, commit, and deployment record.
