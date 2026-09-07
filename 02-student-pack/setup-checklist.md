# Lesson 02 Setup Checklist

Use this checklist during class. Move in order and do not skip ahead when one step is failing.

## Plain-Language Definitions
- **Node.js runtime**: the software that allows JavaScript-based tooling to run in the terminal
- **Expo server**: the local development server started for the app
- **verification path**: the way you open the app, such as emulator or phone
- **emulator tooling**: the software that lets your computer simulate a mobile device
- **development build**: an installed app built from your own project, used as the main course runtime
- **Expo Go**: Expo's shared prebuilt runtime, shown in this course as a comparison path rather than the main workflow

## Step 1: Confirm basic tools
- open a terminal successfully
- verify that `node --version` works
- verify that `npm --version` works
- verify that Node.js is version `22.13.x` or newer for the course SDK 56 baseline

If `node` or `npm` is not found:
- stop here
- mark your status as `partial` or `blocked`
- use issue 1 in [troubleshooting-checklist.md](troubleshooting-checklist.md)

If Node.js is older than `22.13.x`:
- stop here
- mark your status as `partial` or `blocked`
- update Node.js before continuing with the verification app

## Step 2: Confirm your working environment
- from the repo root, open:
  - `resources/01-foundations-setup/lesson-02/example/environment-check-app`
- confirm you can run commands in that folder
- confirm your editor can open and save files there

## Step 3: Choose a device path
- emulator path
- physical-device path

You only need one working path today.

## Step 4: Choose the runtime approach
### Primary course path
- development build

### Secondary comparison path
- Expo Go, only if the instructor has already prepared it successfully for the same baseline

## Step 5: Prepare the path
### Emulator path
- confirm the emulator tooling is installed
- start the emulator before launching the app if required

### Physical-device path
- use this path only if the instructor has already prepared an SDK 56-compatible device workflow
- do not assume the public app-store version of Expo Go matches SDK 56
- if this path is not already prepared, switch to the emulator or simulator path

## Step 6: Start the verification app
- run `npm install` in the verification app folder if dependencies are not already present
- run `npx expo install expo-dev-client`
- create and install the development build:
  - Android: `npm run android:dev`
  - iOS on macOS: `npm run ios:dev`
- run `npm run start`
- wait for the Expo server to start fully

## Step 7: Open the app
- launch the installed development build on your emulator or prepared device path
- use Expo Go only if your instructor explicitly tells you to compare the two approaches

## Step 8: Confirm success
You are `verified` if:
- the app opens
- the verification screen renders
- you can interact with the app

## If you are not verified
- identify the step where progress stopped
- consult [troubleshooting-checklist.md](troubleshooting-checklist.md)
- update [setup-status-tracker.md](setup-status-tracker.md)

## Fallback Protocol
If you are blocked after trying one small troubleshooting step:
1. record the failing step number
2. record the exact error or symptom
3. record the first fix you tried
4. record the result after retry
5. choose one alternate route:
   - verify the app through instructor demo pairing
   - verify through a prepared shared device path
   - defer one setup step while confirming the rest of the workflow
6. leave class with either:
   - `verified`, or
   - `partial` / `blocked` plus one approved next action for lesson 03
