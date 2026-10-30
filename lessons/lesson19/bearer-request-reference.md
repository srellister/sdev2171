# Bearer Request Reference

## The pattern
Protected requests send the token in the `Authorization` header:

```http
Authorization: Bearer <token>
```

## Plain-language meaning
- `Authorization`
  - this header carries access information
- `Bearer`
  - the app is saying, “this request is presenting this token”
- `<token>`
  - the actual string returned by login or registration

## What the example shows
- login or registration returns a token
- auth state keeps that token in memory for the current app session
- a protected request helper attaches the token to requests like:
  - `GET /auth/me`
  - `GET /study-steps`

## Preferred validation example
- In lesson 19, treat `GET /auth/me` as the clearest session-validation example.
- Plain-language meaning:
  - “This token still identifies a valid current user.”

## What to notice in code
- the token is not typed into the request by the user each time
- the token is read from shared auth state
- the protected request will fail if the token is missing or invalid

## Why this matters for lesson 20
Lesson 20 will ask you to build this flow. For now, the important idea is:
- public auth screens obtain the token
- shared auth state keeps the token available
- protected requests use that token
