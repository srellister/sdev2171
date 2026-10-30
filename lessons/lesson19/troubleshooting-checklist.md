# Troubleshooting Checklist

Use this guide if the auth flow still feels vague.

## If public versus protected routes feel mixed up
- Reopen `starting-state-reference.md`.
- Ask: “Could a signed-out user reach this route?”
- If the answer is yes, it belongs in the public group.
- If the answer is no, it belongs in the protected group.

## If auth state and feature state feel mixed up
- Open `auth-structure-map.md`.
- Ask:
  - does this value identify the user or access level?
  - or does it describe the study-plan feature after login?
- User identity and token belong to auth state.
- Selected study steps still belong to the feature state provider.

## If the bearer token still feels abstract
- Open `bearer-request-reference.md`.
- Find the helper file and the exact `Authorization` header.
- Say out loud:
  - “Login gets the token.”
  - “Shared auth state keeps the token.”
  - “Protected requests use the token.”

## If logout behaviour feels unclear
- Ask what should happen if the token is removed.
- The protected route group should no longer be available.
- The app should send the user back to a public auth route.

## If you are still blocked
- Compare the exact files named in `example/auth-flow-concepts-reference/README.md`.
- Ask the instructor for one file to inspect first instead of jumping between many files at once.
