# Lesson 13 Troubleshooting Checklist

Use this guide when local backend access, loading-state UI, or error-state UI breaks down.

## Issue 1: The screen never leaves loading
Likely cause:
- `setIsLoading(false)` is missing
- the request helper never reaches `finally`

Try first:
- confirm the request helper uses `finally`
- add one log before `setIsLoading(false)`
- confirm the request is not hanging on the wrong base URL

Evidence of improvement:
- the screen moves into either success or error instead of spinning forever

## Issue 2: The error only appears in the terminal
Likely cause:
- the error is logged, but not stored in state

Try first:
- confirm `catch` sets `errorMessage`
- confirm the error branch checks `errorMessage`
- confirm the success list is hidden while the error branch is active

Evidence of improvement:
- the user can see the failure without reading the terminal

## Issue 3: The success list never comes back after retry
Likely cause:
- the old error message was not cleared
- the retry path still uses the error query

Try first:
- clear `errorMessage` before a new request
- confirm the retry button calls the normal endpoint
- retest with the standard request path

Evidence of improvement:
- the list returns after a normal retry

## Issue 4: The backend works on one target, but not another
Likely cause:
- the base URL host does not match the current run target

Try first:
- compare your base URL helper to [local-backend-reference.md](local-backend-reference.md)
- use `10.0.2.2` for Android emulator
- use `127.0.0.1` for iOS simulator
- use your computer LAN IP for a physical device

Evidence of improvement:
- the same endpoint becomes reachable from the current run target

## Issue 5: The loading state is too fast to see
Likely cause:
- the request succeeds before the user can notice the loading branch

Try first:
- use the backend `?delay=1200` query
- confirm the loading branch renders before the success list

Evidence of improvement:
- the loading indicator is visible long enough to test

## Issue 6: The known-good reference app works, but your own project does not
Likely cause:
- your project drifted from the stable lesson-12 fetch path before request-state code was added

Try first:
- compare the base URL helper
- compare `isLoading` and `errorMessage` state
- compare the request helper next
- compare the conditional rendering branches last
- restore one section at a time

Evidence of improvement:
- you can isolate the exact request-state section where your project differs from the working reference
