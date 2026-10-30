# Auth Flow Analysis Checklist

Use this checklist during class. The goal is to explain the auth flow clearly, not to build it from scratch yet.

## 1. Distinguish the two unauthenticated entry points
- Identify the first screen on normal app launch.
- Identify the redirect target when a signed-out user tries to enter a protected route.
- Name one reason both of those routes must stay public.
- Record the answer:
  - launch route:
  - protected-route redirect target:
  - why they stay public:

## 2. Name the auth actions
- Identify where registration happens.
- Identify where login happens.
- Identify what logout should do to route access.
- Record the answer:
  - register route:
  - login route:
  - logout result:

## 3. Trace the successful auth flow
- Start from the public welcome screen.
- Choose one path first:
  - login path
  - registration path
- Follow the flow in order.
- Fill in the sequence:
  1. user enters credentials
  2. app sends request to:
  3. backend returns:
  4. auth state stores:
  5. app redirects to:
- Then add one comparison note:
  - how the other auth path is similar:

## 4. Locate the protected area
- Find the protected route group in the example.
- Name at least two routes that should stay inside it.
- Record the answer:
  - protected group:
  - protected route 1:
  - protected route 2:

## 5. Inspect the auth state location
- Find the file that owns auth state.
- Name the two most important auth values in that provider.
- Record the answer:
  - auth-state file:
  - value 1:
  - value 2:

## 6. Find the bearer-token clue
- Open the protected request helper or protected screen.
- Find where the `Authorization` header is attached.
- Record the answer:
  - file:
  - request:
  - exact clue in plain language:

## 7. Use `/auth/me` as the session-validation example
- Open `auth-flow-map.md` if you need the order first.
- Treat `GET /auth/me` as the preferred lesson-19 session-validation example.
- Describe what the backend needs in order to identify the current user.
- Explain what this route confirms after login.
- Explain why this route should not behave like a public route.

## 8. Connect auth state to navigation
- Explain what the app should do when:
  - there is no token
  - a token exists
  - the user logs out
- Keep the answer in route language, not just “the screen changes.”

## 9. Midpoint check
By this point, you should be able to say:
- one public route
- one protected route
- one shared auth value
- one bearer-token request clue

If one of those is still unclear, use `auth-structure-map.md` before moving on.

## 10. End-of-class checkpoint
Be ready to explain:
- why auth is a shared-state problem
- why auth also changes navigation structure
- what `/auth/me` validates in this lesson
- why one protected request needs a bearer token
- why secure storage is not part of today’s lesson yet
