# Lesson 06 Navigation Status Tracker

Use this tracker during or at the end of class.

## Status options
- `configured`
  Both route files work, the stack layout is active, and forward/back navigation both work.
- `partial`
  The route structure exists, but one screen or one navigation action still fails.
- `blocked`
  The project cannot complete the navigation flow during class progress.

## Record these items
- current status
- which project you worked in:
  - your own project
  - the instructor-guided reference path
- current failing step, if any
- one next action to try before lesson 07

## Example status notes
- `configured`: `index.js` and `details.js` both open, and `router.push('/details')` plus `router.back()` both work.
- `partial`: the route files exist, but the second screen path still fails.
- `blocked`: the project would not recover in time, so the instructor-guided reference path was used and the next step is to restore the lesson-05 baseline first.

## Lesson-07 readiness rule
- `configured` is lesson-07-ready.
- `partial` and `blocked` are not lesson-07-ready yet.
- If your status is `partial` or `blocked`, record this remediation sequence before the next class:
  1. restore the lesson-05 baseline
  2. rebuild `_layout.tsx`
  3. rebuild `index.js`
  4. rebuild `details.js`
  5. verify forward and back navigation
  6. update your status to `configured`
