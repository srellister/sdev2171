# Lesson 11 Troubleshooting Checklist

Use this guide when logging, runtime inspection, or small-step debugging breaks down.

## Issue 1: You do not know what the real bug symptom is
Likely cause:
- too many things changed at once
- the bug was not reproduced carefully

Try first:
- run the same action again
- describe what the screen should do
- describe what it does instead in one sentence

Evidence of improvement:
- you can name one specific symptom instead of a vague feeling that the app is broken

## Issue 2: Your logs are not helping
Likely cause:
- the log is too broad
- the log is checking the wrong value
- too many logs are printed at once

Try first:
- remove noisy logs
- log one value with one short label
- place the log closer to the code path tied to the symptom

Evidence of improvement:
- the console output answers one real question about the bug

## Issue 3: A warning or error appears, but you are guessing at the fix
Likely cause:
- the exact warning or error text was not read carefully

Try first:
- read the full warning or error text
- name the file or value it points to
- compare that clue to the related code before editing

Evidence of improvement:
- your next fix is tied to the warning or error instead of a random guess

## Issue 4: The app is more broken after one fix
Likely cause:
- more than one change happened before the retest
- the fix changed the wrong area

Try first:
- stop adding new edits
- identify the last known-good state
- compare the current file to the reference app if needed
- redo one smaller change

Evidence of improvement:
- you can name which change introduced the new problem

## Issue 5: The known-good reference app works, but your own project does not
Likely cause:
- your project drifted from the lesson-10 baseline before debugging started

Try first:
- compare `_layout.tsx` and confirm both screens are still reachable
- compare `index.js` and confirm the home-screen route action still opens details
- compare `details.js` imports first
- compare `details.js` state values and handlers next
- compare `details.js` render output last
- restore one section at a time

Evidence of improvement:
- you can isolate the exact section where your project differs from the working reference

## Issue 6: You are stuck after the first bug check
Likely cause:
- the next step is not tied to evidence

Try first:
- ask which value is most directly connected to the symptom
- inspect only that value or the code that creates it
- retest after one small change

Evidence of improvement:
- your debugging path becomes one clear loop again: symptom, check, change, retest
