# Auth Implementation Reference App

This is the lesson-20 instructor reference project.

## Recovery use during class
- This project is a known-good comparison app for the lesson-20 authentication build.
- If a student is blocked, the fallback path is to inspect these files with the instructor:
  - `src/app/_layout.tsx`
  - `src/app/index.js`
  - `src/app/(public)/login.js`
  - `src/app/(public)/register.js`
  - `src/app/(protected)/_layout.tsx`
  - `src/app/(protected)/details.js`
  - `src/context/AuthContext.js`
  - `src/lib/authApi.js`
- The preferred recovery loop is compare and repair:
  1. compare `src/context/AuthContext.js` to confirm the token and user state
  2. compare `src/app/_layout.tsx` to confirm the provider wrap
  3. compare `src/app/index.js` and `src/app/(protected)/_layout.tsx` to confirm route gating
  4. compare `src/app/(public)/login.js` or `register.js` to confirm one auth action path
  5. compare `src/app/(protected)/details.js` only for the `/auth/me` proof first
- Important scope note:
  - this reference screen also includes the protected study-step request and older protected feature UI
  - for lesson-20 recovery, the required first proof is only `/auth/me`
- Blocked students do not need to install and run this app themselves during class unless the instructor explicitly chooses that path.

## Run
From this folder:

1. Install dependencies:
   - `npm install`
2. Add dev-client support for the preferred auth-debugging path:
   - `npx expo install expo-dev-client`
3. Create and install a development build:
   - `npm run android:dev`
   - or `npm run ios:dev`
4. Start Expo for the development build:
   - `npm run start:dev-client`
5. Open the installed development build on one working path:
   - Android emulator
   - iOS simulator on macOS
   - a prepared device path if already available

## Why this project now prefers a development build
- Expo documents development builds as the path that adds stronger tooling such as network request inspection.
- That matters in lesson 20 because students often need to inspect login, registration, `/auth/me`, and protected study-step requests directly.
- Expo Go can still show the screens, but it is no longer the preferred tooling path for auth lessons.

## What this app demonstrates
- one shared auth provider
- one public login and registration flow
- one protected route group
- one logout path
- one required protected `/auth/me` request
- one optional second protected `/study-steps` request

## Minimum lesson-20 pieces
- auth provider setup in `src/context/AuthContext.js`
- provider placement in `src/app/_layout.tsx`
- route entry redirect in `src/app/index.js`
- protected route gate in `src/app/(protected)/_layout.tsx`
- one auth action screen in `src/app/(public)/login.js`
- one first protected request path in `src/app/(protected)/details.js`

## What is not required for lesson success
- Students do not need secure storage in this lesson.
- Students do not need refresh tokens or third-party auth providers.
- Students do not need advanced role-based access control.
- Students do not need to redesign the protected feature UI to succeed.
