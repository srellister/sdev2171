# Lesson 02 Troubleshooting Checklist

Use this guide when the setup process stops working. Start by identifying the failing step.

## Issue 1: `node` or `npm` command not found
Likely failing step:
- Step 1: confirm basic tools

Try first:
- close and reopen the terminal
- run the version command again
- confirm the expected runtime is actually installed
- if `node --version` works, confirm it is `22.13.x` or newer for the course baseline

Evidence of improvement:
- `node --version` or `npm --version` returns a version number instead of an error
- `node --version` meets the course minimum

If still blocked:
- record status as `partial` or `blocked`
- use instructor help or the alternate verification route

## Issue 2: Emulator is unavailable or will not start
Likely failing step:
- Step 3: choose and prepare a verification path

Try first:
- confirm the emulator toolchain is installed
- launch the emulator separately before starting Expo
- switch to a physical-device verification path if needed

Evidence of improvement:
- the emulator opens and is ready before the app launch step

If still blocked:
- move to the physical-device path or alternate verification route

## Issue 3: Expo server starts, but the app does not open on the device
Likely failing step:
- Step 6: open the app

Try first:
- confirm you are using the correct device path
- retry opening the app from the running Expo session
- verify that the device and computer are using a compatible connection workflow

For a physical device, confirm:
- the instructor prepared an SDK 56-compatible device workflow first
- the phone can access the launch flow being demonstrated
- if the device path is not prepared, switch to emulator or simulator instead of forcing the issue

Evidence of improvement:
- the app begins opening or the launch flow changes after retrying

## Issue 4: A device path is available, but the project still does not load
Likely failing step:
- Step 6: open the app

Try first:
- retry the open action from the running Expo session
- wait for the project bundle to finish starting
- check whether another path works more reliably

Evidence of improvement:
- the project bundle finishes loading and the verification screen appears

## Issue 5: Code changes do not appear
Likely failing step:
- Step 7: confirm success

Try first:
- confirm the file was actually saved
- restart the app session if needed
- verify you are editing the running project folder

Evidence of improvement:
- the screen refreshes or the edited content changes

## Issue 6: You are losing time and trying random fixes
Likely failing step:
- troubleshooting process itself

Try first:
- stop and write down the exact failing step
- record the symptom in `setup-status-tracker.md`
- ask for help using concrete evidence instead of a summary like “it doesn’t work”
