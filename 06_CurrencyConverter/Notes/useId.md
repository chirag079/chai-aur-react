1. React applications often contain multiple form elements such as:
   * Inputs
   * Selects
   * Checkboxes
   * Radio Buttons

2. A common requirement is connecting a `<label>` with its corresponding input.

Example:

```html
<label>Name</label>
<input />
```

Although this works visually, the label is not actually linked to the input.

# useId()

React provides a Hook called:

```js
useId()
```

which generates a unique identifier.

### Syntax

```js
const id = useId();
```

React returns a unique ID that can safely be used inside Components.

# Why Is It Needed?

To connect:

```html
<label>
<input>
```

properly, HTML requires:

```html
<label for="input-id">
<input id="input-id">
```

When both IDs match:

* Clicking the label focuses the input.
* Accessibility improves.
* Screen readers can understand the relationship.

### Flow

```text
useId()
   ↓
Generate Unique ID
   ↓
Assign To Input
   ↓
Connect Label Using htmlFor
```

# In This Project

```js
const amountInputId = useId();
```

The generated ID is assigned to:

```js
<input id={amountInputId} />
```

and the label uses:

```js
<label htmlFor={amountInputId}>
```

As a result:

* Clicking the label focuses the input.
* Multiple instances of the Component can exist without ID conflicts.

# Why Not Hardcode IDs?

Suppose two Components use:

```html
id="amount"
```

Now both inputs have the same ID.

This creates conflicts.

`useId()` solves this by ensuring every Component instance receives its own unique identifier.

# Summary

* `useId()` generates unique IDs.
* Mainly used for form accessibility.
* Helps connect Labels and Inputs.
* Prevents ID collisions when Components are reused multiple times.
* Particularly useful in reusable form Components.