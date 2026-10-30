# Lesson 15 Starting State Reference

Use this file to confirm whether your project is ready before you begin the lesson-15 analysis.

## Expected Baseline
Your starting point should be a working lesson-14 style project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a working stack layout in `src/app/_layout.tsx`
- one fetch request that already returns study-step list data
- one clear back-navigation path
- visible loading, success, and error handling from lesson 14

## Minimum Readiness Check
Before you inspect shared-state problems, confirm:
- the local backend server starts
- the app starts
- the home screen opens the detail screen
- the detail screen fetches and renders study-step data
- the back path still returns to the home screen

## If Your Baseline Is `resolved`
Use your own project for the lesson-15 analysis.

## If Your Baseline Is `partial`
Recover the lesson-14 request success path before adding a new cross-screen state problem.

Recommended check order:
1. `example/backend/`
2. `src/lib/apiBaseUrl.js` or your base URL helper
3. `src/app/details.js`
4. lesson-14 `success-criteria.md`

## If Your Baseline Is `blocked`
Do not begin the state-sharing analysis from an already unstable fetch screen.

Use the instructor-guided reference path:
- inspect the backend run guide first
- compare your base URL helper to `example/state-sharing-problem-reference/src/lib/apiBaseUrl.js`
- compare your `src/app/details.js` to `example/state-sharing-problem-reference/src/app/details.js`
- compare your `src/app/plan.js` to `example/state-sharing-problem-reference/src/app/plan.js` if the mismatch is not obvious yet
- focus on the minimum required sections only:
  - the fetch success path
  - the local selection state
  - the navigation action to the copied plan screen
  - the copied local state on the plan screen
- document the failing step and one next action before class ends

## Canonical Lesson-15 Starting Point
- the lesson-14 fetch path still works
- the local backend is reachable
- the app is ready for one controlled multi-screen state mismatch
