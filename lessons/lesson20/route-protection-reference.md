# Route Protection Reference

## Two route checks work together

### 1. Entry-route decision
- `src/app/index.js`
- decides where the app should start:
  - public auth path when signed out
  - protected feature path when signed in

### 2. Protected layout gate
- `src/app/(protected)/_layout.tsx`
- stops signed-out users from staying inside the protected route group

## Why both matter
- the entry route gives the normal launch path
- the protected layout handles direct or accidental access to protected routes

## Simple rule
- if auth state says “not signed in,” protected routes should redirect out
- if auth state says “signed in,” protected routes can render
