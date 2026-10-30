# Auth Build Checklist

Use this checklist during class. Keep the scope fixed to one working in-memory auth flow.

## 1. Confirm the lesson scope
- Do not add secure storage yet.
- Do not add third-party auth.
- Do not redesign the existing protected feature screens.
- Keep the target to:
  - shared auth state
  - public auth screens
  - protected route gate
  - one protected request
- Open `quick-start-reference.md` now if:
  - the backend is not running yet
  - you want the seeded login path first
  - you need the emulator or simulator API base URL reminder

## 2. Create the auth provider
- Create or confirm the auth context file.
- Preferred file target:
  - `src/context/AuthContext.js`
- Add state for:
  - current token
  - current signed-in user
  - working/loading status
- Add actions for:
  - sign in
  - register
  - sign out
- Record the file:
  - auth provider file:

## 3. Wrap the route tree
- Place the auth provider at the shared app layout level.
- Preferred file target:
  - `src/app/_layout.tsx`
- Make sure both the public and protected route groups sit inside it.
- Verify:
  - the provider is not inside only one route group
  - screens can read auth state anywhere in the app tree

## 4. Implement the first auth path
- Pick one first path:
  - seeded login
  - registration
- Preferred first path for weaker students:
  - seeded login using the credentials in `quick-start-reference.md`
- Preferred file target:
  - `src/app/(public)/login.js`
- Wire the request to the backend endpoint.
- After success, confirm the app stores:
  - token
  - user
- Record the first working path:
  - first working auth path:

## 5. Add the second auth path
- Once one path works, wire the other one.
- Preferred second file target:
  - `src/app/(public)/register.js`
- Keep the response handling the same:
  - token stored
  - user stored
  - app redirected into the protected area

## 6. Gate the protected routes
- Update `index.js` or equivalent entry route so the app chooses:
  - public route when signed out
  - protected route when signed in
- Preferred file targets:
  - `src/app/index.js`
  - `src/app/(protected)/_layout.tsx`
- Add or confirm the protected layout gate.
- Verify:
  - signed-out users cannot stay in the protected group

## 7. Prove one protected request
- Use `/auth/me` as the required first proof.
- Treat the protected study-step request as the optional second proof after `/auth/me` is stable.
- Preferred file target:
  - `src/app/(protected)/details.js`
- Confirm the request includes:
  - `Authorization: Bearer <token>`
- Record the proof:
  - file:
  - request:
  - visible success clue:

## 8. Implement logout
- Clear the token.
- Clear the current user.
- Redirect back to a public auth route.
- Verify:
  - protected screens are no longer available after logout

## 9. Mid-build check
By this point, students should have:
- one provider at the shared layout level
- one working auth request
- one protected route gate
- one successful protected request

If one of those is missing, use `starter-snippets.md` before moving on.

## 10. End-of-class checkpoint
Be ready to show:
- login or registration success
- redirect into the protected area
- one protected request success
- logout and return to a public route

## 11. Lesson-21 handoff clue
- Close and reopen the app if your environment makes that possible.
- Observe what happens to auth state after restart.
- Record one note:
  - what was lost on restart:
  - why lesson 21 is needed next:
