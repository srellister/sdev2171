# Lesson 18 Exercise Set

Use this task set during the lesson-18 work period. Follow the path that matches your current project state.

## If You Chose `verify`
Complete Tasks 1 through 5 in order, then finish Task 7.

## If You Chose `repair`
Complete Task 1 first, then jump directly to Task 6. After one targeted repair, return to the narrowest relevant verify task and then finish Task 7.

Use this quick map:
- route or provider repair: return to Task 1
- controlled input or validation repair: return to Task 3
- summary-state repair: return to Task 4

## Task 1: Baseline Verification
Confirm all of these before larger changes:

- the backend runs from `lesson-18/example/backend`
- the details route in `src/app/details.js` opens
- fetched study-step data appears on the details screen
- the form route in `src/app/session-form.js` opens
- the summary route in `src/app/plan.js` exists

Write one sentence naming the first part of the flow that is still weak, if any.

If you are not sure where to start, inspect:
- [work-session-checklist.md](work-session-checklist.md)
- [worked-example.md](worked-example.md)
- [recovery-paths.md](recovery-paths.md)

## Task 2: Shared Selection Check
On the details screen:

- add at least one study step
- confirm the shared selection count changes

Evidence:
- write the visible clue that proved the shared selection updated

## Task 3: Invalid Submit Check
On the form screen:

- attempt one invalid submit
- confirm one validation message appears

Evidence:
- write the exact clue that proved validation ran before save

## Task 4: Valid Submit Check
Still on the form screen:

- enter a valid title
- submit the form
- open or confirm the summary screen in `src/app/plan.js`

Evidence:
- write the visible clue that proved the committed result was saved

## Task 5: Local Versus Shared Explanation
Write 2 to 4 sentences explaining:

- one value that stayed local while typing
- one value that was shared across screens
- why those two values belonged in different places

## Task 6: Narrow Repair
Use this task immediately if you chose `repair`, or later if the verify path exposes one clear weak spot.

Choose one:

- route or provider repair
- controlled input repair
- validation repair
- summary-state repair

Record:
- the file you changed
- the exact weak spot you repaired
- the next check you ran afterward

## Task 7: End-Of-Class Status
Before the checkpoint, record one final status:

- `resolved`
- `partial`
- `blocked`

Then complete:
- [progress-tracker.md](progress-tracker.md)
- [success-criteria.md](success-criteria.md)
