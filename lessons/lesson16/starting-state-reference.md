# Lesson 16 Starting State Reference

Use this file to confirm whether your project is ready before you begin the Context refactor.

## Expected Baseline
Your starting point should be a working lesson-15 style project that already has:
- a home route in `src/app/index.js`
- a detail route in `src/app/details.js`
- a second route that shows the selected-step feature from another screen
- a working stack layout in `src/app/_layout.tsx`
- one fetch request that already returns study-step data
- one visible mismatch or copied-state limitation from lesson 15

## Minimum Readiness Check
Before adding Context, confirm:
- the local backend server starts
- the app starts
- the home screen opens the details screen
- the details screen fetches and renders study-step data
- the second screen still reproduces the lesson-15 copied-state problem

## If Your Baseline Is `resolved`
Use your own project for the lesson-16 build.

## If Your Baseline Is `partial`
Recover the lesson-15 mismatch reproduction path before introducing the provider.

Recommended check order:
1. `example/backend/`
2. `src/lib/apiBaseUrl.js`
3. `src/app/details.js`
4. `src/app/plan.js`
5. lesson-15 `state-sharing-analysis-checklist.md`

## If Your Baseline Is `blocked`
Do not begin the Context refactor from an unstable lesson-15 baseline.

Use the instructor-guided reference path:
- inspect the backend run guide first
- compare your `_layout.tsx` to `example/context-state-reference/src/app/_layout.tsx` if provider placement is unclear
- compare your base URL helper to `example/context-state-reference/src/lib/apiBaseUrl.js`
- compare your `src/app/details.js` to `example/context-state-reference/src/app/details.js`
- compare your `src/app/plan.js` to `example/context-state-reference/src/app/plan.js`
- focus on the minimum required sections only:
  - the provider placement in `_layout.tsx`
  - the fetch success path
  - the selected-step feature
  - the multi-screen route flow
- document the failing step and one next action before class ends

## Canonical Lesson-16 Starting Point
- the lesson-15 problem still reproduces
- the local backend is reachable
- the app is ready for one small shared-state refactor
