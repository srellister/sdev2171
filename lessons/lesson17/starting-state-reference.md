# Lesson 17 Starting State Reference

Use this file to confirm whether your project is ready before you begin the form workflow.

## Expected Baseline
Your starting point should be a working lesson-16 style project that already has:
- a home route in `src/app/index.js`
- a details route in `src/app/details.js`
- a shared summary or plan route in `src/app/plan.js` that already reads Context
- a working stack layout in `src/app/_layout.tsx`
- a provider that already shares the selected-step feature
- one fetch request that already returns study-step data

## New Lesson-17 File Changes
Today you will:
- add one new route file: `src/app/session-form.js`
- update `src/app/_layout.tsx` so the new route is registered
- extend `src/context/StudyPlanContext.js` with a committed session result
- update `src/app/plan.js` so it shows the submitted session summary
- keep `src/app/details.js` as the launch point into the new form flow

## Minimum Readiness Check
Before adding the form, confirm:
- the local backend server starts
- the app starts
- the details screen fetches and renders study-step data
- the selected-step feature still updates across screens through Context
- the provider path still works before the form is introduced

## If Your Baseline Is `resolved`
Use your own project for the lesson-17 build.

## If Your Baseline Is `partial`
Recover the lesson-16 shared selected-step path before adding the form screen.

Recommended check order:
1. `example/backend/`
2. `src/context/StudyPlanContext.js`
3. `src/app/_layout.tsx`
4. `src/app/details.js`
5. `src/app/plan.js`

## If Your Baseline Is `blocked`
Do not begin the form workflow from an unstable lesson-16 Context baseline.

Recover the lesson-16 path first:
- inspect lesson 16 `starting-state-reference.md`
- inspect lesson 16 `context-build-checklist.md`
- compare your `src/context/StudyPlanContext.js` to the lesson-16 reference
- compare your `src/app/_layout.tsx`, `src/app/details.js`, and `src/app/plan.js` to the lesson-16 reference
- focus on the minimum required sections only:
  - the provider path
  - the shared selected-step feature
  - the multi-screen route flow

Only after the lesson-16 baseline works again:
- inspect `example/forms-flow-reference/src/app/session-form.js`
- inspect the new saved-session additions in `example/forms-flow-reference/src/context/StudyPlanContext.js`
- inspect the saved-session display in `example/forms-flow-reference/src/app/plan.js`

Document:
- the failing lesson-16 step you repaired
- the lesson-17 step you can try next before class ends

## Canonical Lesson-17 Starting Point
- the lesson-16 shared selected-step feature still works
- the local backend is reachable
- the app is ready for one small validated form flow
