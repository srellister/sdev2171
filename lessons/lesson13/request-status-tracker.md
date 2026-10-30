# Lesson 13 Request Status Tracker

Use this tracker at the midpoint or checkpoint if your instructor asks for a quick status update.

## Status options
- `resolved`
  The screen clearly shows loading, success, and error states, and retry works.
- `partial`
  Part of the request-state flow works, but one branch or recovery step is incomplete.
- `blocked`
  The build cannot continue during class without recovery support.

## Record
- Current status:
- Loading clue:
- Error clue:
- Retry result:
- Current file you are checking:
- Current hypothesis:
- Next action:

## Suggested check order
1. backend server is running
2. base URL matches the run target
3. loading state starts
4. error message stores correctly
5. success list returns after recovery

## Instructor checkpoint question
Be ready to answer:
- What does the user see during loading?
- What does the user see during failure?
- What makes the screen leave the loading state?
