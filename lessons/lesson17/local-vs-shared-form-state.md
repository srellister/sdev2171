# Local Versus Shared Form State

Use this guide when deciding where form-related values should live in this lesson.

## Keep Local While Typing
Examples:
- current title text
- current goal text
- current validation error message

Why:
- these values belong to the draft form screen
- other screens do not need each keystroke live

## Move To Shared State After Submit
Examples:
- saved session title
- saved focus goal
- saved selected-step count tied to the committed session

Why:
- another screen needs to display the submitted result
- the committed result is now part of a cross-screen feature
- the lesson-16 `selectedSteps` list can stay as the existing shared source, while the saved session stores only the committed summary created at submit time

## Plain-Language Rule
Draft input stays local.
Committed result can become shared.

## Lesson-17 Warning
If you move every form character into Context immediately:
- the lesson becomes harder than it needs to be
- beginners lose the difference between “typing” and “saving”
