# Provider Placement Reference

Use this guide when you are deciding where the provider should live in the course scaffold.

## Correct Placement In This Course
For this lesson, the provider belongs:
- in a shared file such as `src/context/StudyPlanContext.js`
- wrapped around the shared route tree in `src/app/_layout.tsx`

## Why The Layout Level Matters
The details screen and the plan screen both need:
- access to the same selected-step value
- access to the same update functions

If the provider is placed:
- only inside `details.js`, the plan screen cannot use it
- only inside `plan.js`, the details screen cannot use it

## Plain-Language Rule
Place the provider high enough that every screen needing the shared feature sits inside it, but not so broadly that unrelated app-wide state gets mixed in by default.

## What Does Not Move Here
Even after adding the provider:
- `isLoading` for one fetch can stay local
- `errorMessage` for one fetch can stay local
- temporary one-screen UI values can stay local
