# Quick Start Reference

Use this file before you begin the lesson-20 build.

## Preferred app runtime for this lesson
- Use a development build when you need to inspect auth requests.
- Expo Go can still show the app, but it is not the preferred tooling path for this module's auth request work.

From your lesson app folder:

1. Install dependencies:
   - `npm install`
2. Add dev-client support:
   - `npx expo install expo-dev-client`
3. Create and install a development build:
   - Android: `npx expo run:android`
   - iOS on macOS: `npx expo run:ios`
4. Start Expo for the development build:
   - `npx expo start --dev-client`

## Backend startup
From `example/backend` for this lesson:

1. Install dependencies:
   - `npm install`
2. Create `.env` from `.env.example`:
   - `cp .env.example .env`
3. Start the backend:
   - `npm start`

## Seeded login for the simplest first proof
- Email: `student1@example.com`
- Password: `Password123!`

## API base URL reminder
- Android emulator:
  - `http://10.0.2.2:3000`
- iOS simulator:
  - `http://127.0.0.1:3000`
- Physical device:
  - replace the device LAN base URL in `src/lib/apiBaseUrl.js` with your computer LAN IP

## Preferred first success proof
- get seeded login working first
- then prove `GET /auth/me`
- treat the protected study-step request as the second proof after the first path is stable
