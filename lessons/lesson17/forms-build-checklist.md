# Lesson 17 Forms Build Checklist

Use this checklist during class. Move in order and retest after each small change instead of rewriting the whole app at once.

## Plain-Language Definitions
- **controlled input**: an input field whose value comes from state
- **local draft state**: form values that belong to the current screen while the user is typing
- **validation**: checking whether the form is acceptable before submit
- **committed shared data**: the saved result moved into shared state after submit

Use these references while you build:
- [starting-state-reference.md](starting-state-reference.md)
- [local-vs-shared-form-state.md](local-vs-shared-form-state.md)
- [validation-reference.md](validation-reference.md)
- [starter-snippets.md](starter-snippets.md)

## File Map For Today
- `src/app/session-form.js`
  Owns the draft form state, controlled inputs, validation message, and submit action.
- `src/context/StudyPlanContext.js`
  Owns the new committed shared session result through `savedSession` and `saveSession(...)`.
- `src/app/plan.js`
  Displays the submitted session result after the form saves it.
- `src/app/details.js`
  Keeps the lesson-16 shared selected-step flow and adds the launch path into the new form screen.
- `src/app/_layout.tsx`
  Registers the new `session-form` route inside the same provider path.

## Required Clue Rule For This Lesson
- at least one build round today must use a real form-flow clue, not only guessing
- acceptable clues:
  - one visible validation message when the form is incomplete
  - one successful submit after the form becomes valid
  - one summary screen showing the saved shared result

## Step 1: Confirm The Lesson-16 Shared-State Path Still Works
- run the local backend first
- confirm the selected-step feature still stays synchronized across screens
- do not add the form until the old shared-state path still works

You should see:
- the lesson-16 Context path still works before the new form begins

## Step 2: Add Local Draft State
- work in `src/app/session-form.js`
- add local state for the form title
- add local state for the form goal or note
- add local state for one error message

You should see:
- one local home for each draft input value

## Step 3: Connect Controlled Inputs
- stay in `src/app/session-form.js`
- connect each input `value` to state
- connect each input `onChangeText` to its setter
- confirm the screen always shows the current state value

You should see:
- typing updates local state directly

## Step 4: Add Simple Validation
- keep this check inside `src/app/session-form.js` before navigation
- require a non-empty title
- require at least one selected study step before save
- show one short error message if the form is invalid

You should see:
- one failed submit clue before the valid path works

## Step 5: Save The Committed Result To Shared State
- extend `src/context/StudyPlanContext.js` with the new shared session result
- call that shared save function from `src/app/session-form.js`
- keep draft values local while typing
- on valid submit, save the committed session result into Context
- include the selected-step count in the saved result

You should see:
- the form draft stays local
- the saved result becomes shared only after submit

## Step 6: Show The Shared Result On Another Screen
- update `src/app/plan.js`
- open the summary screen after save
- show the saved title
- show the optional goal or a fallback message
- show the saved selected-step count attached to that submitted session

You should see:
- another screen can read the committed shared result

## Step 7: Retest The Full Flow
- confirm `src/app/details.js` can still launch the form route
- try one invalid submit first
- then enter a valid title
- save the session
- confirm the summary screen shows the committed result

You should see:
- one visible validation clue
- one visible saved-summary clue

## Step 8: Record Your Lesson Status
- `resolved`: the full local-draft to shared-summary flow works
- `partial`: some input, validation, or summary wiring works, but the full flow is incomplete
- `blocked`: the form or data-flow path is still broken or unclear

Record:
- your current status
- your validation clue
- your shared-summary clue
- one value that stayed local
- the next action to try before lesson 18

## Minimum Carry-Forward State For Lesson 18
- `resolved`
  Bring your own project with the full local-draft to shared-summary flow working.
- `partial`
  Before lesson 18 starts, repair enough that all three of these are true:
  - the form route opens
  - one validation message appears on invalid submit
  - the summary screen can show at least the saved session title after valid submit
- `blocked`
  Bring written notes naming the exact file and exact step still failing so lesson 18 can start with targeted repair instead of a full rebuild.

## Step 9: Confirm Lesson Success
You are successful in this lesson when:
- the local backend path still works
- the form uses controlled inputs
- invalid submit shows one clear message
- valid submit saves the committed result into shared state
- another screen shows that saved result clearly, including the saved session title and saved step count
