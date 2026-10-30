# Lesson 11 Starting State Reference

Use this file to confirm whether your project is ready before you begin the debugging lab.

## Expected baseline
Your starting point should be a working lesson-10 project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- a visible list when items exist
- a visible empty-state message when the list is cleared
- one clear back-navigation path

## Minimum readiness check
Before debugging intentional bugs, confirm:
- the app starts
- the home screen opens the detail screen
- the detail screen can add one item
- the detail screen can clear all items
- the empty-state message appears after clearing the list
- the back path still returns to the home screen

## If your baseline is `configured`
Use your own project for the debugging lab.

## If your baseline is `partial`
Recover the lesson-10 list flow before introducing any new debugging scenarios.

Recommended check order:
1. `src/app/_layout.tsx`
2. `src/app/index.js`
3. `src/app/details.js`

## Baseline recovery table
| File | Confirm this before moving on |
| --- | --- |
| `src/app/_layout.tsx` | the app still uses a stack layout and both screens can be reached |
| `src/app/index.js` | the home screen still has one clear action that opens the detail screen |
| `src/app/details.js` | the detail screen can add one item, clear the list, and show the empty-state message |

## If your baseline is `blocked`
Do not begin the debugging lab from an already unstable project.

Use the instructor-guided reference path:
- inspect the reference files first instead of copying everything at once
- compare your `src/app/_layout.tsx` to `example/debugging-lab-reference/src/app/_layout.tsx`
- compare your `src/app/index.js` to `example/debugging-lab-reference/src/app/index.js`
- compare your `src/app/details.js` to `example/debugging-lab-reference/src/app/details.js`
- run the reference app only if the instructor explicitly tells you to do that
- document the failing step and one next action before class ends

## Canonical lesson-11 starting point
- lesson-10 navigation still works
- the list screen still renders current items
- the empty-state condition still works
- the app is ready for one instructor-introduced bug at a time
