# Troubleshooting Checklist

Use this guide if the auth implementation is not working yet.

## If sign-in or registration fails immediately
- confirm the backend is running
- confirm the endpoint path matches the backend guide
- confirm the request body fields match the expected names
- check whether the response error is coming from:
  - missing input
  - bad seeded credentials
  - duplicate registration email

## If auth succeeds but the app does not move
- inspect the auth action first:
  - did the token get stored?
  - did the user get stored?
- then inspect the route change:
  - was `router.replace(...)` or equivalent called?

## If the protected route still opens while signed out
- inspect the protected layout gate
- inspect `index.js`
- confirm both are reading the same shared auth state

## If the protected request fails
- inspect the request helper or screen
- confirm the `Authorization` header exists
- confirm it uses:
  - `Bearer ${token}`
- confirm the token comes from shared auth state

## If logout seems incomplete
- confirm both:
  - token is cleared
  - user is cleared
- then confirm the app redirects back to a public route

## If you are still blocked
- compare these files in order:
  1. `src/context/AuthContext.js`
  2. `src/app/_layout.tsx`
  3. `src/app/index.js`
  4. `src/app/(protected)/_layout.tsx`
  5. one auth screen
