# Lesson 12 Starting State Reference

Use this file to confirm whether your project is ready before you begin the remote-data build.

## Expected baseline
Your starting point should be a working lesson-10 or lesson-11 style project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- one list-rendering screen shape you can safely edit
- one clear back-navigation path

## Minimum readiness check
Before adding network code, confirm:
- the app starts
- the home screen opens the detail screen
- the detail screen renders without a runtime error
- the back path still returns to the home screen

## If your baseline is `resolved`
Use your own project for the lesson-12 build.

## If your baseline is `partial`
Recover the list-screen baseline before introducing any API code.

Recommended check order:
1. `src/app/_layout.tsx`
2. `src/app/index.js`
3. `src/app/details.js`

## Baseline recovery table
| File | Confirm this before moving on |
| --- | --- |
| `src/app/_layout.tsx` | the app still uses a stack layout and both screens can be reached |
| `src/app/index.js` | the home screen still has one clear action that opens the detail screen |
| `src/app/details.js` | the detail screen still renders one stable layout and the back button still works |

## If your baseline is `blocked`
Do not begin the fetch build from an already unstable project.

Use the instructor-guided reference path:
- inspect the reference files first instead of copying everything at once
- compare your `src/app/_layout.tsx` to `example/fetching-remote-data-reference/src/app/_layout.tsx`
- compare your `src/app/index.js` to `example/fetching-remote-data-reference/src/app/index.js`
- compare your `src/app/details.js` to `example/fetching-remote-data-reference/src/app/details.js`
- in `details.js`, focus on the minimum required sections only:
  - the `useEffect` import
  - the `remoteSteps` state value
  - the request helper
  - the `useEffect` trigger
  - the `FlatList` data source
- run the reference app only if the instructor explicitly tells you to do that
- document the failing step and one next action before class ends

## Canonical lesson-12 starting point
- lesson-10 or lesson-11 navigation still works
- the detail route is stable enough to edit safely
- the app is ready for one explicit API request trigger
