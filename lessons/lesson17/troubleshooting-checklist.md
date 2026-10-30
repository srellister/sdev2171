# Lesson 17 Troubleshooting Checklist

Use this checklist if your form workflow is partial or blocked.

## If The Shared-State Baseline No Longer Works
Check:
- the local backend is running from lesson-17 `example/backend`
- `src/context/StudyPlanContext.js` still shares the selected-step feature
- the details screen and summary screen still agree before the form is added

Go back to:
- lesson-16 `starting-state-reference.md`
- lesson-16 `context-build-checklist.md`

## If Typing Does Not Update The Input
Check:
- the input `value` points to the correct local state value
- `onChangeText` points to the correct setter
- the draft state still lives on the form screen

Then inspect:
- `src/app/session-form.js`

## If Validation Does Not Appear
Check:
- are you trimming the title before validation
- are you checking the selected-step count before save
- does the form actually render the current `errorMessage`

Then inspect:
- `validation-reference.md`
- `src/app/session-form.js`

## If The Summary Screen Never Shows The Saved Result
Check:
- does valid submit call `saveSession(...)`
- does the save happen before navigation to the summary screen
- does the summary screen read `savedSession` from Context

Then inspect:
- `src/context/StudyPlanContext.js`
- `src/app/session-form.js`
- `src/app/plan.js`

## If Too Much Form State Moved Into Context
Pause and sort values again:
- title and goal draft text can stay local while typing
- the committed saved session can become shared after submit
- the validation error message can stay local

Use:
- `local-vs-shared-form-state.md`

## If You Are Still Blocked
Do not keep adding new fields or new validation rules.

Instead:
1. name the exact broken step in the form flow
2. name the exact file to inspect next
3. compare your file to the instructor-guided reference path
4. record one next action in `form-status-tracker.md`
