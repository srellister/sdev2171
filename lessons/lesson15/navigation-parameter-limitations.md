# Navigation Parameter Limitations

Use this guide when you are deciding whether route parameters are enough for a piece of data.

## What Navigation Parameters Are Good For
Navigation parameters work well when you need to:
- open a specific screen
- carry one identifier such as an item id
- carry one short label or read-only snapshot
- provide context for the next screen

## What Navigation Parameters Are Not Good For
Navigation parameters become fragile when you expect them to:
- act as the main home for changing shared data
- keep multiple screens synchronized automatically
- behave like one live shared state value

## Why The Lesson-15 Example Breaks Down
In this lesson:
- the details screen owns a local selected-step list
- the plan screen receives a copied version through navigation
- each screen can change its own copy after that

That means:
- the screens are not reading one source of truth
- removing one step on the plan screen does not update the details screen

## Plain-Language Test
Ask:
- if this value changes on one screen, should another screen instantly agree with it

If the answer is yes, route parameters alone are usually not enough.

## Not The Same As “Parameters Are Bad”
Parameters are still useful for:
- ids
- titles
- one-time context
- opening the correct screen

The problem is not “navigation parameters exist.”
The problem is “we are asking copied parameter data to behave like shared mutable state.”
