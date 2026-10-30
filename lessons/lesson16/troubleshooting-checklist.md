# Lesson 16 Troubleshooting Checklist

Use this checklist if your Context refactor is partial or blocked.

## If The Fetch Baseline No Longer Works
Check:
- the local backend is running from lesson-16 `example/backend`
- `src/lib/apiBaseUrl.js` still targets the correct host
- `src/app/details.js` still renders study-step data before or after the Context refactor

Go back to:
- lesson-15 `starting-state-reference.md`
- lesson-15 `state-sharing-analysis-checklist.md`

## If The Hook Throws An Error
Check:
- is the screen using the hook inside the provider tree
- does `_layout.tsx` wrap both screens with the provider
- are you importing the provider and hook from the correct path

Then inspect:
- `src/app/_layout.tsx`
- `src/context/StudyPlanContext.js`

## If One Screen Still Uses Its Own Copy
Check:
- did you remove the old route-parameter copy path
- did you remove the old local selected-step state from the screen
- are both screens now reading `selectedSteps` from the shared hook

Then inspect:
- `src/app/details.js`
- `src/app/plan.js`

## If Too Much State Moved Into Context
Pause and sort values again:
- the selected-step feature should be shared here
- loading and error UI for one fetch can still stay local
- temporary one-screen UI values can still stay local

Use:
- `provider-placement-reference.md`
- `context-flow-reference.md`

## If You Are Still Blocked
Do not keep adding unrelated state changes.

Instead:
1. name the exact broken link in the provider path
2. name the exact file to inspect next
3. compare your file to the instructor-guided reference path
4. record one next action in `context-status-tracker.md`
