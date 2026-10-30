# Lesson 09 Troubleshooting Checklist

Use this guide when local state, prop passing, or the child preview area does not behave the way you expect.

## Issue 1: The screen no longer updates after input or button presses
Likely cause:
- the parent state value was removed or renamed
- the update handler is no longer changing the right state

Try first:
- confirm `useState` is imported
- confirm the state value and setter both exist
- confirm the handler calls the correct setter
- retest with one short input

Evidence of improvement:
- the parent screen values change again after the action

## Issue 2: The child component appears, but the values are wrong
Likely cause:
- the parent passed the wrong prop values
- the prop names do not match between parent and child

Try first:
- confirm the JSX prop names in the parent
- confirm the child reads those same names
- confirm the parent is passing the current state value rather than old placeholder text

Evidence of improvement:
- the child shows the latest expected values

## Issue 3: The child output never changes
Likely cause:
- the parent state is not actually changing
- the child is still rendering hard-coded text

Try first:
- confirm the parent setter runs
- confirm the child renders props, not fixed strings
- retest after one state change

Evidence of improvement:
- the child output changes after the parent action

## Issue 4: The detail screen became too confusing after extraction
Likely cause:
- too many UI sections moved at once
- the child component took on more than one simple responsibility

Try first:
- move only one display area into the child component
- keep the input and button logic in the parent
- keep the child focused on rendering only

Evidence of improvement:
- the parent-child relationship is easier to explain

## Issue 5: Navigation broke while adding the child component
Likely cause:
- the lesson-07 or lesson-08 baseline was altered while editing the detail screen

Try first:
- confirm the home screen still opens the detail screen
- confirm the back path still exists
- restore the working route flow before adding more state changes

Evidence of improvement:
- the app still moves between screens correctly

## Issue 6: Too many state and props changes happened at once
Likely cause:
- the parent screen, handler, and child component were all rewritten before retesting

Try first:
- stop and identify the last known-good version
- recheck the state values first
- then recheck the handler
- then recheck the prop passing
- then recheck the child output

Evidence of improvement:
- you can identify which step caused the problem

## Issue 7: Your own project is too broken to continue
Likely cause:
- the earlier interaction baseline was not stable before lesson-09 edits began

Try first:
- stop editing the broken project
- compare your `src/app/details.js` to `example/state-and-props-reference/src/app/details.js`
- compare your child component file to `example/state-and-props-reference/src/components/StatePreviewCard.js`
- repair one section at a time instead of rewriting the whole screen
- record the next step for restoring your own project

Evidence of improvement:
- you can still explain the state-and-props flow and continue the lesson
