# Starting State Reference

Lesson 19 does not start from a brand-new app idea.

## Baseline from lesson 18
- the app already has a multi-screen study-plan flow
- shared Context already stores selected study steps
- a local form draft still submits one saved session summary
- the local backend already serves the same `{ id, label }` study-step shape

## What changes in lesson 19
- new public auth screens appear before the feature routes
- the existing feature routes move behind a protected route group
- the app gains one shared auth state source
- one token is attached to protected requests
- logout now changes navigation and access

## What does not change
- the study-step shape stays the same
- the selected-step feature still belongs in shared Context
- the local draft form still stays local while typing
- secure storage is not part of this lesson yet

## State boundary refresher
- `StudyPlanContext` still owns the study-plan feature values:
  - selected steps
  - saved session summary
- auth state now owns only the access values:
  - current token
  - current signed-in user

## Minimum lesson-19 target
Students should leave class able to explain:
- which screens are public
- which screens are protected
- where auth state lives
- how the bearer token reaches one protected request
