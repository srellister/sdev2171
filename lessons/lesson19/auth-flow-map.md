# Auth Flow Map

Use this map when the route or request order feels fuzzy.

## Preferred lesson-19 auth flow
1. App launches.
2. Signed-out user reaches the public welcome screen.
3. User chooses register or login.
4. Backend returns:
   - token
   - safe user object
5. Shared auth state stores:
   - current token
   - current signed-in user
6. App enters the protected route group.
7. `GET /auth/me` runs as the lesson-19 session-validation example.
8. Protected data request such as `GET /study-steps` uses the same bearer-token pattern.
9. User logs out.
10. Token and user are cleared, and the app returns to a public auth route.

## Two unauthenticated route answers
- first screen on normal app launch:
  - public welcome screen
- redirect target when a signed-out user tries to reach a protected route:
  - login screen

## State boundary refresher
- `AuthContext`
  - who the user is
  - whether the protected area should be available
- `StudyPlanContext`
  - selected study steps
  - saved session summary
  - feature state after the user is already inside the protected area
