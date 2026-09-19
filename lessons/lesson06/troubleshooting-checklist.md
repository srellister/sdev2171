# Lesson 06 Troubleshooting Checklist

Use this guide when route setup or navigation actions do not behave the way you expect.

## Issue 1: The app breaks after route changes
Likely cause:
- a syntax error in a route file
- a missing import
- `_layout.tsx` is incomplete

Try first:
- check the most recent route or layout edit only
- confirm each import exists
- confirm `_layout.tsx` returns `Stack`

Evidence of improvement:
- the app renders again
- the error screen disappears

## Issue 2: The second screen does not open
Likely cause:
- the pushed path does not match the route file
- `details.js` is missing or named incorrectly

Try first:
- confirm the file name is exactly `details.js`
- confirm the action uses `router.push('/details')`
- save the file and test again

Evidence of improvement:
- the second screen opens when the action is triggered

## Issue 3: The first screen opens, but there is no return path
Likely cause:
- the back action was never added
- the back action is attached to the wrong component

Try first:
- confirm `router.back()` exists on the second screen
- confirm the return action is actually triggered by a press

Evidence of improvement:
- the app returns to the first screen

## Issue 4: The wrong content appears on the wrong screen
Likely cause:
- too much lesson-05 content stayed on one route
- content was moved without a clear screen purpose

Try first:
- keep overview content on `index.js`
- move one focused section to `details.js`
- compare the two screen purposes out loud

Evidence of improvement:
- each screen has a clearer role

## Issue 5: The app structure feels confusing
Likely cause:
- file names and screen roles do not match
- too many route changes happened at once
- the project is still mentally organized around the old single-screen `App.js`

Try first:
- reduce the lesson to two routes only
- rename screens clearly
- treat the old `App.js` as source content, not as the finished lesson-06 structure
- recheck the file tree before changing more code

Evidence of improvement:
- you can explain what each file does

## Issue 6: Your own project is too broken to continue
Likely cause:
- the lesson-05 baseline was not stable before route changes started

Try first:
- stop editing the broken project
- inspect the instructor-guided reference path
- trace `_layout.tsx`, `index.js`, and `details.js`
- record the next step for restoring your own project

Evidence of improvement:
- you can still explain the route structure and continue the lesson
