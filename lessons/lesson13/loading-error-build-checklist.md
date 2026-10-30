# Lesson 13 Loading And Error Build Checklist

Use this checklist during class. Move in order and retest after each small change instead of rewriting multiple parts of the screen at once.

## Plain-Language Definitions
- **loading state**: visible UI while the request is still running
- **success state**: visible UI when the request works
- **error state**: visible UI when the request fails
- **retry**: running the request again after a failure

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [local-backend-reference.md](local-backend-reference.md)
- [request-states-reference.md](request-states-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Required clue rule for this lesson
- at least one build round today must use a real request-state clue, not only guessing
- acceptable clues:
  - one visible loading indicator during a delayed request
  - one exact terminal error line or one visible error message
  - one successful recovery after retry

## Step 1: Confirm the lesson-12 fetch success path
- run the local backend first
- if your old lesson-12 screen still uses JSONPlaceholder, convert it to the local `study-steps` backend before you continue
- confirm the detail screen still fetches and renders list data
- do not add new request-state code until the old success path still works

If you still need the lesson-12-to-local-backend bridge:
- add the base URL helper first
- switch the endpoint to `/api/study-steps`
- remove the old external-data mapping
- confirm the local success list works before continuing

## Step 2: Name the three request states before coding
- write one sentence for what the user should see during loading
- write one sentence for what the user should see on success
- write one sentence for what the user should see on failure

You should see:
- one clear loading plan
- one clear success plan
- one clear error plan

## Step 3: Add the new state values
- add `isLoading`
- add `errorMessage`
- keep the old fetched data state value from lesson 12

You should see:
- one state value for progress
- one state value for failure
- one state value for success data

## Step 4: Refactor the request helper
- set loading to true before the request starts
- clear the old error message before the request starts
- keep the success data update
- store the failure message in `catch`
- stop loading in `finally`

You should see:
- the request helper now controls all three request states

## Step 5: Add the loading branch
- use `ActivityIndicator`
- add one short loading message
- use the backend `delay` query so the branch is visible long enough to confirm

You should see:
- a visible loading state before the success list appears

## Step 6: Add the error branch
- show a short error title
- show one user-friendly message
- keep the success list hidden while the error branch is active

You should see:
- a visible error branch instead of a blank or confusing screen

## Step 7: Add one retry or reload action
- add one button that starts the normal request again
- confirm the loading state appears again before success or failure

You should see:
- one clear recovery path for the user

## Step 8: Test the failure path on purpose
- keep the normal request helper, but add one preferred failure-test path:
  - `loadRemoteSteps({ simulateError: true })`
- that helper option should point to the same endpoint with `?error=1`
- confirm the error branch appears
- retry with the normal endpoint

You should see:
- one deliberate failure
- one successful recovery

## Step 9: Record your lesson status
- `resolved`: the screen shows loading, success, and error clearly
- `partial`: some request-state UI works, but the full flow is incomplete
- `blocked`: the build cannot continue during class without recovery support

Record:
- your current status
- your loading clue
- your error clue
- your retry result
- the next action to try before lesson 14

## Step 10: Confirm lesson success
You are successful in this lesson when:
- the local backend path still works
- you can show a visible loading indicator
- you can show a visible error message
- you can show the success list after recovery
- you can explain what makes the loading state stop

## Step 11: Leave a lesson-14-ready baseline
- keep the local backend flow working
- keep the request-state branches readable
- remove only noisy logs, not helpful state logic
- save a known current state before class ends
- `resolved` is lesson-14-ready
- `partial` and `blocked` require remediation before lesson 14
