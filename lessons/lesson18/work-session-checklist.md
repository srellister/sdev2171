# Lesson 18 Work-Session Checklist

Use this checklist before you start the full exercise set.

## Step 1: Choose Your Path
Choose one:

- `verify`
  Your lesson-17 workflow already runs and you are ready to retest the full integrated path.
- `repair`
  One part of the integrated flow is partial or blocked, so you need to restore that first.

Write down your choice before you continue.

## Step 2: Confirm The Baseline
Before changing code, verify:

- the local backend is running from this lesson folder
- your app can still open the details route
- the details screen still fetches `study-steps`
- the selected-step feature still updates through Context
- the form route still opens
- the summary route still exists

Default file anchors:
- `src/app/details.js`
- `src/app/session-form.js`
- `src/app/plan.js`
- `src/context/StudyPlanContext.js`
- `src/lib/apiBaseUrl.js`

If you arrive `partial` from lesson 17, do not start broad retesting until these three carry-forward checks are true:
- the form route opens
- one validation message appears on invalid submit
- the summary screen can show at least the saved session title after valid submit

## Step 3: Confirm The Three Fastest Checks
Make sure you can answer:

- what value is still local while the user types
- what value becomes shared after submit
- what visible clue proves the summary screen read the committed result

If any answer is unclear, inspect:
- [worked-example.md](worked-example.md)
- [recovery-paths.md](recovery-paths.md)

## Step 4: Use One Preferred Testing Loop
Do not invent a new testing path for this lesson.

Use this order:

- open the details screen and confirm the fetched list appears
- add at least one study step
- open the form route
- trigger one invalid submit
- correct the form and submit a valid title
- confirm the summary screen shows the saved result

If your project does not already support one part of that loop:
- inspect [worked-example.md](worked-example.md)
- then compare against the instructor-guided reference path before making wider changes

## Step 5: Launch The Main Exercise Set
Open:
- [exercise.md](exercise.md)

## Step 6: Record Your Outcome Before The Checkpoint
Before class ends, update:
- [progress-tracker.md](progress-tracker.md)

Then verify your current state with:
- [success-criteria.md](success-criteria.md)
