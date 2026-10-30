# Starting State Reference

Lesson 20 starts from the lesson-19 auth design target and turns it into working code.

## What should already be clear from lesson 19
- public auth routes and protected feature routes have different jobs
- auth state needs one shared home
- `/auth/me` is the session-validation example
- protected requests need the bearer-token pattern

## What students are implementing today
- one auth provider that stores:
  - current token
  - current signed-in user
- one login path
- one registration path
- one logout path
- one protected route gate
- one successful protected request after sign-in

## What does not change
- the study-step shape stays the same
- the protected feature still uses the existing study-plan flow
- secure storage is not part of this lesson yet

## Minimum lesson-20 target
Students should leave class able to show:
- a successful sign-in or registration path
- a redirect into the protected route group
- one successful protected request
- a logout that returns the app to a public route
