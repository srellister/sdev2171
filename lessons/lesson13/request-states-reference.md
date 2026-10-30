# Lesson 13 Request States Reference

Use this guide when you need a plain-language reminder of how loading and error states work in this lesson.

## Plain-Language Definitions
- **loading state**: what the user sees while the request is still running
- **success state**: what the user sees when the request works
- **error state**: what the user sees when the request fails
- **retry**: starting the request again after a failure

## The lesson-13 request-state flow
Use this mental model:
1. start the request
2. set loading to true
3. clear the old error message
4. wait for the response
5. store the data on success, or store the error message on failure
6. stop loading
7. render the matching UI branch

## Main tools for this lesson
### `ActivityIndicator`
- use it to show visible loading progress

### `isLoading`
- use it to decide whether the screen should show the loading branch

### `errorMessage`
- use it to store one user-visible error message

### `try/catch/finally`
- use it to separate success, failure, and finish behaviour clearly

## One worked example
### Symptom
- the user taps into the screen and waits

### Good loading branch
- show a loading indicator plus one short loading message

### Failure branch
- show a short error message plus one retry action

### Success branch
- show the list only after the request succeeds

## Scope boundary
This lesson is not about:
- new endpoint shapes
- advanced forms
- authentication
- offline data storage

This lesson is about:
- visible loading UI
- visible error UI
- retry and recovery
- conditional rendering of request states
