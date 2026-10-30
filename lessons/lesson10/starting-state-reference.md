# Lesson 10 Starting State Reference

Use this file to confirm whether your project is ready before you begin the lesson-10 build.

## Expected baseline
Your starting point should be a working lesson-09 project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- one working state-driven screen
- one clear back-navigation path

## Minimum readiness check
Before adding list-rendering changes, confirm:
- the app starts
- the home screen opens the detail screen
- the detail screen still updates based on state
- the back path still returns to the home screen

## If your baseline is `configured`
Use your own project.

## If your baseline is `partial`
Fix the lesson-09 state flow before converting it into a list screen.

Recommended check order:
1. `src/app/_layout.tsx`
2. `src/app/index.js`
3. `src/app/details.js`

## If your baseline is `blocked`
Do not start lesson-10 list work in a broken project.

Use the instructor-guided reference path:
- compare your `src/app/details.js` to `example/dynamic-list-reference/src/app/details.js`
- document the failing step and one next action before class ends

## Canonical lesson-10 starting point
- lesson-09 navigation still works
- the detail screen already uses local state correctly
- the old lesson-09 single preview flow is ready to be replaced
  This usually means `draftName`, `profileName`, `statusText`, and any `StatePreviewCard` output are no longer the main target for this lesson.
- the new lesson-10 target is:
  one `draftStep` input value, one `studySteps` array, one visible list, and one empty-state message
- the app is ready to change one single-value screen into a repeated-data list screen
