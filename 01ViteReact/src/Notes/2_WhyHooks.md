1. One of the biggest problems with Vanilla JavaScript was maintaining synchronization between **State** and **UI**.
2. A variable could change successfully inside JavaScript, but the UI would not automatically reflect that change.
3. Developers had to manually locate DOM elements and update them whenever the state changed.

### Example

```text
State Changes
      ↓
Select DOM Element
      ↓
Update DOM Manually
      ↓
UI Updated
```

This approach worked for small applications but quickly became cumbersome as applications grew larger.

# The Core Problem

```text
State Updated ✅
UI Updated ❌
```

The responsibility of keeping State and UI synchronized was entirely on the developer.

# How React Solves This

React introduces a different approach.

Instead of manually updating the DOM, developers update the **State**, and React takes care of updating the UI wherever necessary.

### Flow

```text
State Changes
      ↓
React Detects Change
      ↓
Finds Affected UI
      ↓
Updates UI
```

This removes the need for repetitive DOM manipulation and keeps State and UI in sync.

# Hooks

To achieve this, React provides special functions known as **Hooks**.

* Hooks allow Functional Components to use React features such as:
  * State Management
  * Side Effects
  * References
  * Performance Optimizations

Different Hooks exist for different use cases, but all of them integrate with React's rendering system.

# useState

The most commonly used Hook is:

```js
useState()
```

* `useState()` is React's basic state management Hook.
* It allows a Component to store values that can change over time.
* Whenever the state changes, React automatically updates the affected UI.

### Syntax

```js
const [state, setState] = useState(defaultValue)
```

### What Does It Return?

`useState()` returns an array containing:

1. Current State Value
2. State Setter Function

```js
const [count, setCount] = useState(0)
```

Here:

```text
count      → Current State
setCount   → Updates State
```

# Default Value

A default value must be provided when creating state.

Examples:

```js
useState(0)
useState("")
useState(false)
useState([])
useState({})
```

The default value can be:

* Number
* String
* Boolean
* Array
* Object
* Function

# State Update Cycle

Whenever the setter function is called:

```js
setCount(count + 1)
```

React performs the following:

```text
Setter Called
      ↓
State Updated
      ↓
Component Re-renders
      ↓
UI Updated
```

This automatic synchronization between State and UI is one of the biggest reasons React became popular.

# Why React?

For simple DOM manipulation, Vanilla JavaScript is sufficient.

However, as applications become larger:

* More State
* More UI
* More User Interactions

the complexity of manually keeping everything synchronized increases rapidly.

React solves this by making the UI a function of State.

### Flow

```text
State
  ↓
React
  ↓
UI
```

Whenever State changes:

```text
State Changes
      ↓
React Reacts
      ↓
UI Updates
```

And that is exactly where React gets its name from.

# Summary

* Vanilla JavaScript requires manual DOM updates whenever State changes.
* This makes large applications difficult to maintain.
* React automatically synchronizes State and UI.
* Hooks provide access to React's special features.
* `useState()` is the most commonly used Hook for managing State.
* Calling a State Setter updates both the State and the UI.
* React's core philosophy is simple:

```text
Change State
      ↓
React Handles UI Updates
```
