# Auth Structure Map

Use this file during the code-exploration portion of class.

## Route groups in the example
- `src/app/(public)/`
  - public auth routes a user can reach before login
- `src/app/(protected)/`
  - existing study-plan feature routes that now require auth

## Important files
- `src/app/index.js`
  - chooses the public or protected entry path based on auth state
- `src/app/(public)/welcome.js`
  - public explanation screen and launch point for auth
- `src/app/(public)/login.js`
  - sends credentials to the login endpoint
- `src/app/(public)/register.js`
  - sends new-account data to the register endpoint
- `src/app/(protected)/_layout.tsx`
  - blocks unauthenticated users from entering the protected group
- `src/app/(protected)/details.js`
  - makes protected requests after login
- `src/context/AuthContext.js`
  - owns auth state and auth actions
- `src/context/StudyPlanContext.js`
  - still owns the shared study-plan feature state
- `src/lib/authApi.js`
  - builds the auth requests and the bearer-token request

## What belongs to auth state
- current token
- current signed-in user
- auth actions such as sign in, register, and sign out

## Session-validation example for this lesson
- `GET /auth/me`
  - preferred lesson-19 example of checking that the current token still identifies a valid user
- this is different from the feature data request:
  - `GET /study-steps`
  - which loads protected study-step content after access is already granted

## What does not belong to auth state
- every local text input value
- every selected study step
- every temporary error message in the whole app

## One useful mental model
- auth state answers: “Who is the user, and are they allowed inside the protected part of the app?”
- study-plan state answers: “What feature data is the signed-in user working with after they get inside?”
