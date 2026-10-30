# Lesson 14 Recovery Paths

Use this guide if your lesson-14 request-state workflow is partial or blocked.

## If The Route Or Layout Is Broken
Symptoms:
- the app does not reach the request screen
- the route file is missing or not opening
- navigation back and forth is broken

Go back to:
- lesson 06 route structure and screen registration
- lesson 10 list-screen layout anchors if your screen shape drifted too far

Default inspection files:
- `src/app/_layout.tsx`
- `src/app/index.js`
- `src/app/details.js`

## If The Request Does Not Start Correctly
Symptoms:
- the screen opens but no fetch happens
- the request loops repeatedly
- you cannot explain what triggers the request

Go back to:
- lesson 12 request trigger and `useEffect` scaffold

Default inspection files:
- `src/app/details.js`
- lesson-12 `starter-snippets.md`
- lesson-12 `remote-data-build-checklist.md`

## If Loading, Error, Or Retry Is Broken
Symptoms:
- the screen jumps straight to blank content
- the error branch never appears
- retry does not recover the screen

Go back to:
- lesson 13 request-state scaffolds and troubleshooting path

Default inspection files:
- `src/app/details.js`
- lesson-13 `loading-error-build-checklist.md`
- lesson-13 `request-states-reference.md`
- lesson-13 `starter-snippets.md`
- lesson-13 `troubleshooting-checklist.md`

## If The Backend Path Is Wrong
Symptoms:
- the request fails because of the wrong host
- the endpoint path is wrong
- the server is not running from the current lesson folder

Inspect:
- `src/lib/apiBaseUrl.js`
- `example/backend/server.js`
- `example/backend/BACKEND.md`

## If You Are Still Blocked
Do not keep changing unrelated code.

Instead:
1. name the exact blocker
2. name the exact file to inspect next
3. compare your file to the instructor-guided reference path
4. record one next action in `progress-tracker.md`
