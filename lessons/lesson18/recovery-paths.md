# Lesson 18 Recovery Paths

Use this guide if your integrated workflow is partial or blocked.

## If The Route Or Provider Path Is Broken
Symptoms:
- the form route does not open
- the summary route is missing
- the provider no longer wraps the screens that need shared state

Go back to:
- lesson 16 provider placement and shared hook path

Default inspection files:
- `src/app/_layout.tsx`
- `src/context/StudyPlanContext.js`
- lesson-16 `provider-placement-reference.md`
- lesson-16 `context-build-checklist.md`

## If The Shared Selection No Longer Syncs
Symptoms:
- selected-step count never changes
- details and summary screens no longer agree
- remove or add actions do not update shared state

Go back to:
- lesson 16 shared selected-step workflow

Default inspection files:
- `src/context/StudyPlanContext.js`
- `src/app/details.js`
- `src/app/plan.js`
- lesson-16 `context-flow-reference.md`

## If The Form Draft Or Validation Is Broken
Symptoms:
- typing does not update inputs
- validation never appears
- submit saves when the form is still invalid

Go back to:
- lesson 17 local draft form path

Default inspection files:
- `src/app/session-form.js`
- lesson-17 `starter-snippets.md`
- lesson-17 `validation-reference.md`
- lesson-17 `forms-build-checklist.md`

## If The Summary Screen Never Shows The Saved Result
Symptoms:
- submit runs but the summary screen stays blank
- the saved title never appears
- the wrong shared value is being displayed

Go back to:
- lesson 17 committed-summary read path

Default inspection files:
- `src/context/StudyPlanContext.js`
- `src/app/session-form.js`
- `src/app/plan.js`
- lesson-17 `local-vs-shared-form-state.md`

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
