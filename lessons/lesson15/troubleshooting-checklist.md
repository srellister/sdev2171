# Lesson 15 Troubleshooting Checklist

Use this checklist if your lesson-15 analysis is partial or blocked.

## If The Fetch Baseline No Longer Works
Check:
- the local backend is running from lesson-15 `example/backend`
- `src/lib/apiBaseUrl.js` still targets the correct host
- `src/app/details.js` still renders study-step data before you inspect the state-sharing problem

Go back to:
- lesson-14 `starting-state-reference.md`
- lesson-14 `success-criteria.md`

## If You Cannot Reproduce The Mismatch
Check:
- did you add at least two study steps on the details screen first
- did you open the copied plan screen after that
- did you remove one item from the copied screen, not only from the original screen

If not, repeat the exact order from:
- `state-sharing-analysis-checklist.md`

## If You Can See The Screens But Cannot Explain The Drift
Ask:
- where does the original local selection live
- where does the copied selection live
- which screen changed after the copy was created

Then inspect:
- `src/app/details.js`
- `src/app/plan.js`

## If You Think Everything Should Become Shared
Pause and sort values again:
- loading and error state for one request screen can still stay local
- only the cross-screen changing feature value needs to become shared next

Use:
- `scenario-map.md`

## If You Are Still Blocked
Do not start implementing Context yet.

Instead:
1. name the exact mismatch you expected
2. name the exact clue you did or did not observe
3. compare your file to the instructor-guided reference path
4. record one next action in `state-readiness-tracker.md`
