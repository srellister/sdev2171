# Lesson 14 Work-Session Checklist

Use this checklist before you start the full exercise set.

## Step 1: Choose Your Path
Choose one:

- `verify`
  Your local backend screen already runs and you are ready to test the full request-state flow.
- `repair`
  One part of the request-state flow is partial or blocked, so you need to restore that first.

Write down your choice before you continue.

## Step 2: Confirm The Baseline
Before changing code, verify:

- the local backend is running from this lesson folder
- your app can still open the request-state route
- the screen is still pointed at the course `study-steps` endpoint
- the data shape is still `{ id, label }`

Default file anchors:
- `src/app/details.js`
- `src/lib/apiBaseUrl.js`
- `example/backend/server.js`

## Step 3: Confirm The Two Fastest Checks
Make sure you can answer:

- what starts the request
- what the user should see while the request is still running

If either answer is unclear, inspect:
- [worked-example.md](worked-example.md)
- [recovery-paths.md](recovery-paths.md)

## Step 4: Use One Preferred Testing Loop
Do not invent a new testing path for this lesson.

Use this order:

- load the normal endpoint with a visible delay such as `?delay=1200`
- trigger failure with the same request helper pattern used in lesson 13, such as `loadRemoteSteps({ simulateError: true })`
- use the existing retry action to return to success

If your project does not already have that helper or action:
- inspect [worked-example.md](worked-example.md)
- then compare against the instructor-guided reference path before making larger changes

## Step 5: Launch The Main Exercise Set
Open:
- [exercise.md](exercise.md)

## Step 6: Record Your Outcome Before The Checkpoint
Before class ends, update:
- [progress-tracker.md](progress-tracker.md)

Then verify your current state with:
- [success-criteria.md](success-criteria.md)
