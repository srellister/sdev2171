# Lesson 11 Debugging Lab Checklist

Use this checklist during class. Move in order and retest after each small change instead of rewriting multiple parts of the app at once.

## Plain-Language Definitions
- **bug**: behaviour that does not match the intended result
- **symptom**: what you can see or describe when the bug happens
- **hypothesis**: your current explanation for the bug
- **retest**: run the same action again after one small fix

Use these references while you debug:
- [starting-state-reference.md](starting-state-reference.md)
- [debugging-reference.md](debugging-reference.md)
- [starter-snippets.md](starter-snippets.md)

## Required tool rule for this lesson
- at least one debugging round today must use a real tool clue, not only a guess
- acceptable tool clues:
  - one exact LogBox or terminal error line
  - one Expo terminal `console.log` result with a clear label
  - one DevTools `Console` observation
  - one Dev Menu or DevTools action that confirmed the bug path

## Step 1: Confirm the lesson-10 baseline
- open your main lesson-10 Expo Router project, not an older backup or a second partial copy
- run the app
- confirm the home screen, detail screen, and back navigation still work
- confirm the detail screen can add an item
- confirm the detail screen can clear all items
- confirm the empty-state message appears when expected

If the project does not run:
- stop here
- recover the lesson-10 baseline first
- use [troubleshooting-checklist.md](troubleshooting-checklist.md)
- if the project will not recover in time for class progress, switch to the instructor-guided reference path

## Step 2: Reproduce one bug only
- use the single bug scenario your instructor names for this round
- wait for the instructor to inject the bug or tell you the one exact change to make
- do not invent your own bug during the main lab
- trigger the bug exactly once or twice
- describe the symptom in one sentence before changing code

You should see:
- one clear symptom
- one known place in the app where the symptom appears

## Step 3: Choose the most relevant check
- identify which value or file is most closely tied to the symptom
- decide whether you need a log, a code comparison, a warning/error read, or DevTools first
- avoid editing anything yet

You should see:
- a short hypothesis about where the bug might live

## Step 4: Add one focused debug check
- add one `console.log` or one comparison step
- if the bug produced a warning or runtime error, read that exact text before adding extra logs
- inspect only the value or file tied to your hypothesis
- keep the debug check small and readable
- after saving, watch the Expo terminal first or the DevTools `Console` tab if your instructor has it open

You should see:
- one new piece of evidence
- a better idea of whether your hypothesis is correct

## Step 5: Change one small thing
- fix one property name, condition, import, or handler detail
- do not mix multiple fixes together
- save the file and prepare to retest immediately

You should see:
- one specific code change that matches the earlier evidence

## Step 6: Retest the same bug
- trigger the same action again
- compare the new result to the earlier symptom
- decide whether the bug is resolved, improved, or unchanged

You should see:
- a clearer outcome from the retest
- one next action based on evidence, not guessing

## Step 7: Mid-lab checkpoint
Pause here and confirm:
- you can name the bug symptom clearly
- you can point to one logged or inspected value
- you can point to one exact tool clue from LogBox, the terminal, or DevTools
- you can explain why your code change matched the symptom

## Step 8: Record your lesson status
- `resolved`: you reproduced the bug, inspected evidence, and resolved it
- `partial`: you reproduced the bug and gathered evidence, but the fix is incomplete
- `blocked`: the debugging path cannot continue during class without recovery support

Record:
- your current status
- the bug symptom
- the main tool clue you used
- the last useful check you performed
- the next action to try before lesson 12

## Step 9: Confirm lesson success
You are successful in this lesson when:
- the app still runs or has been restored to a known-good baseline
- you can describe one bug symptom accurately
- you can show one log or inspected value tied to that symptom
- you can explain one warning, error line, or DevTools clue
- you can explain one small fix and the retest result

## Step 10: Leave a lesson-12-ready baseline
- restore a known-good version of the list screen
- remove or reduce temporary noisy logs if they are no longer useful
- save a known current state before class ends
- if you used the reference path, record the next step for restoring your own project
- `resolved` is lesson-12-ready
- `partial` and `blocked` require remediation before lesson 12
