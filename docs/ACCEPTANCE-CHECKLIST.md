# Acceptance Checklist

Use this checklist before merging or deploying CyberPath Repaired changes.

## Product fit

- [ ] The change has a clear learner or operator benefit.
- [ ] The change does not create unnecessary complexity.
- [ ] The change respects the local-first product principle.
- [ ] The change does not introduce false claims about certification or professional qualification.

## Engineering verification

- [ ] `npm install` or `npm ci` completed successfully.
- [ ] `npm run typecheck` passed.
- [ ] `npm run build` passed.
- [ ] The affected page or workflow was manually reviewed.
- [ ] No unrelated files were changed.

## Security and privacy

- [ ] No secrets were committed.
- [ ] No real user data was committed.
- [ ] Storage behavior is understood.
- [ ] Account, cloud sync, analytics, or tracking changes are explicitly documented.
- [ ] Deployment headers were not weakened.

## Accessibility

- [ ] Keyboard navigation remains usable.
- [ ] Focus order is reasonable.
- [ ] Text contrast is readable.
- [ ] Motion or animation does not block usability.
- [ ] Important status messages are visible or announced.

## Content quality

- [ ] Cybersecurity content is practical and accurate.
- [ ] Content source/version is recorded where applicable.
- [ ] Scenario questions require judgment, not only memorization.
- [ ] Topic IDs or progress identifiers are preserved when changing learning data.

## Deployment readiness

- [ ] GitHub Actions CI passed.
- [ ] Vercel preview or production deployment is available when needed.
- [ ] Production URL was checked after deployment.
- [ ] Rollback candidate is known.
- [ ] Known limitations were documented.

## Final decision

- [ ] Accept.
- [ ] Accept with follow-up item.
- [ ] Reject until fixes are made.
