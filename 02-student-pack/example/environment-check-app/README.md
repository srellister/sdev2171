# Environment Check App

This is the lesson-02 verification app.

## Course Baseline
This sample app is intentionally aligned to the current course baseline:
- verified against official Expo docs on `2026-06-04T04:16Z`
- Expo SDK 56
- React Native 0.85
- React 19.2.3
- Node.js 22.13.x or newer

This lesson uses a provided verification app so the class can validate one shared workflow before making project-creation choices in lesson 03.

The runnable lesson screen lives in `src/app/App.js` to match the Expo Router-style project scaffold now used for the course examples.

## Run
From the repo root, open:
- `resources/01-foundations-setup/lesson-02/example/environment-check-app`

1. Install dependencies:
   - `npm install`
2. Add dev-client support:
   - `npx expo install expo-dev-client`
3. Create and install a development build:
   - `npm run android:dev`
   - or `npm run ios:dev`
4. Start Expo:
   - `npm run start`
5. Open the installed development build on:
   - Android emulator, or
   - iOS simulator on macOS, or
   - a prepared physical-device path if the instructor has one ready for SDK 56
6. If a physical-device path is not already prepared:
   - stay on emulator or simulator for the shared classroom workflow

## Runtime comparison
- Expo Go is still worth showing briefly so students understand the difference between a shared Expo runtime and their own installed app.
- The course uses the development-build path as the primary workflow because later lessons depend more directly on React Native DevTools.

## What Counts As Verified
You are `verified` when:
- the app opens successfully
- the verification screen renders
- you can toggle the environment checks on screen

## Suggested Instructor Demo Route
1. Start the Expo server.
2. Open the installed development build on one working device path.
3. Point out the visible verification criteria.
4. Toggle one or two checklist items and show that the technical status changes from `partial` to `verified`.
5. Remind students that lesson 03 is where they create a brand-new app.
