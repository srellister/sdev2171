# Lesson 19 Exercise

Complete this after class. Use full sentences unless a prompt says otherwise.

## Part 1. Public versus protected
1. Name one public route from lesson 19 and explain why it must stay public.
2. Name one protected route from lesson 19 and explain why it should not be reachable before login.

## Part 2. Flow order
Write the correct order for this auth flow using one short sentence for each step:
- login or registration request
- token returned by the backend
- auth state updated in the app
- one `/auth/me` session-validation check
- navigation into the protected area
- logout and return to the public area

## Part 3. State location
Answer both prompts:
1. What two values belong in shared auth state for lesson 19?
2. Name one value from the existing study-plan feature that should not move into auth state.

## Part 4. Bearer-token clue
Describe one real clue from the example that shows a protected request needs a bearer token.

Your answer should include:
- which file or screen gave you the clue
- which protected request was involved
- what would likely happen if the token were missing

## Part 5. Session validation
Use `/auth/me` as the lesson-19 example and answer both prompts:
1. What does `/auth/me` confirm after login?
2. How is that different from loading the protected study-step list?

## Part 6. Lesson 20 handoff
Explain why lesson 20 is an implementation lesson, not another concept-only lesson.

Your answer should mention:
- one auth screen or action to build
- one route or navigation rule to implement
- one protected request to wire up
