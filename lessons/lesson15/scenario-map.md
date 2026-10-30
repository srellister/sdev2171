# Lesson 15 Scenario Map

Use this guide to sort values into likely local-only, likely shared-later, or unclear categories.

## Usually Local-Only
Examples:
- `isLoading` for one request screen
- `errorMessage` for one request screen
- temporary text inside one input field
- whether one card is expanded

Why:
- one screen owns the value
- another screen does not need to stay synchronized with it

## Usually Shared-Later
Examples:
- selected study steps used across multiple screens
- favorites shown in more than one route
- user profile data viewed and edited in multiple places
- one current cart, plan, or saved list

Why:
- more than one screen depends on the same changing value
- duplicated copies can drift out of sync

## Sometimes Unclear
Examples:
- a draft form that starts on one screen but is confirmed on another
- a filter value that might become app-wide later

Questions to ask:
- does another screen need the live changing value or only the final submitted result
- is this value temporary, or is it part of a real app feature used in more than one place

## Lesson-15 Prompt
Before lesson 16, be able to name:
- one value from your current app that should stay local
- one value from your current app that should become shared
