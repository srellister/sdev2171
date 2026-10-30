# Provider Placement Reference

## Where the auth provider goes
- place the auth provider in the shared app layout
- keep both:
  - the public route group
  - the protected route group
  inside that provider

## Why this matters
- login and registration need to update shared auth state
- the protected layout needs to read shared auth state
- the route entry screen also needs to read shared auth state

## Wrong placements
- inside only the login screen
- inside only the protected route group
- inside one feature screen such as `details.js`

## Right mental model
- the provider should wrap the whole route tree that depends on auth
