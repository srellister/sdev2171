# Lesson 13 Starting State Reference

Use this file to confirm whether your project is ready before you begin the loading and error build.

## Expected baseline
Your starting point should be a working lesson-12 style project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- one fetch request that already returns list data
- one clear back-navigation path

## Minimum readiness check
Before adding request-state UI, confirm:
- the local backend server starts
- if your lesson-12 screen still uses JSONPlaceholder, convert it to the local `study-steps` backend first
- the app starts
- the home screen opens the detail screen
- the detail screen fetches and renders study-step data
- the back path still returns to the home screen

## If your baseline is `resolved`
Use your own project for the lesson-13 build.

## If your baseline is `partial`
Recover the lesson-12 fetch success path before adding loading and error state.

Recommended check order:
1. `example/backend/`
2. `src/lib/apiBaseUrl.js` or your base URL helper
3. `src/app/details.js`

## If your lesson-12 screen still uses JSONPlaceholder
Before you add loading and error state:
1. add a base URL helper like `src/lib/apiBaseUrl.js`
2. change the endpoint from the external demo API to `/api/study-steps`
3. remove the old `title`-to-`label` mapping because the local backend already returns `{ id, label }`
4. confirm the success list still renders from the local backend

Only after that local-backend success path works should you begin lesson-13 request-state changes.

## Baseline recovery table
| File | Confirm this before moving on |
| --- | --- |
| `example/backend/server.js` | the server starts and `/api/study-steps` returns JSON |
| `src/lib/apiBaseUrl.js` | the base URL matches your run target |
| `src/app/details.js` | the request succeeds and the list renders before adding more state |

## If your baseline is `blocked`
Do not begin the request-state build from an already unstable fetch screen.

Use the instructor-guided reference path:
- inspect the backend run guide first
- compare your base URL helper to `example/loading-error-reference/src/lib/apiBaseUrl.js`
- compare your `src/app/details.js` to `example/loading-error-reference/src/app/details.js`
- focus on the minimum required sections only:
  - `isLoading` state
  - `errorMessage` state
  - the request helper
  - the `finally` branch
  - the conditional rendering branches
- run the reference app only if the instructor explicitly tells you to do that
- document the failing step and one next action before class ends

## Canonical lesson-13 starting point
- the lesson-12 local fetch still works
- the local backend is reachable
- the app is ready for visible loading and error feedback
