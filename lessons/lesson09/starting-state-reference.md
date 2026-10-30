# Lesson 09 Starting State Reference

Use this file to confirm whether your project is ready before you begin the lesson-09 build.

## Expected baseline
Your starting point should be a working lesson-07 or lesson-08 project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- one input-driven interaction on the detail screen
- one clear back-navigation path

## Minimum readiness check
Before adding state-and-props changes, confirm:
- the app starts
- the home screen opens the detail screen
- the detail screen still accepts input
- the detail screen still shows one visible response
- the back path still returns to the home screen

## If your baseline is `configured`
Use your own project.

## If your baseline is `partial`
Fix the lesson-07 interaction issue before extracting a child component.

Recommended check order:
1. `src/app/_layout.tsx`
2. `src/app/index.js`
3. `src/app/details.js`

## If your baseline is `blocked`
Do not start the lesson-09 build in a broken project.

Use the instructor-guided reference path:
- compare your `src/app/details.js` to `example/state-and-props-reference/src/app/details.js`
- compare your child component file to `example/state-and-props-reference/src/components/StatePreviewCard.js` once you reach the extraction step
- document the failing step and one next action before class ends

## Canonical lesson-09 starting point
- lesson-07 interaction still works
- one screen already owns a changing text value
- one screen already shows a visible result after a user action
- the app is ready to extract one display area into a child component
