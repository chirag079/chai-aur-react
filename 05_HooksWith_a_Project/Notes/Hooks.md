1. This project introduces some of the most commonly used React Hooks. Hooks were introduced to allow Functional Components to use features that were previously available only in Class Components.
2. A Hook is simply a special function provided by React that enables additional capabilities such as state management, side effects, memoization and DOM references.
3. Some of the most commonly used Hooks are:
   * `useState`
   * `useEffect`
   * `useCallback`
   * `useRef`

# useState

* `useState()` is React's basic state management Hook.
* It allows a Component to store values that can change over time.
* Whenever the state changes, React re-renders the Component.

### Syntax

```js
const [state, setState] = useState(initialValue)
```

* The first value represents the current state.
* The second value is a setter function used to update the state.
* Calling the setter triggers a re-render.

### Flow

```text
User Interaction
        ↓
Setter Function Called
        ↓
State Updated
        ↓
Component Re-renders
```

# useEffect

* `useEffect()` is used whenever a Component needs to perform side effects.
* Side effects are operations that happen outside the normal rendering process.

Examples:

* API Calls
* Timers
* Event Listeners
* DOM Manipulation
* Synchronizing Data

### Syntax

```js
useEffect(() => {

}, [])
```

The second argument is known as the Dependency Array.

### Dependency Array Behaviour

```js
useEffect(() => {

}, [])
```

* Runs only once after the initial render.

```js
useEffect(() => {

})
```

* Runs after every render.

```js
useEffect(() => {

}, [value])
```

* Runs whenever `value` changes.

### Flow

```text
Render
   ↓
Check Dependencies
   ↓
Dependency Changed ?
   ↓
Run Effect
```

# useCallback

* `useCallback()` is a performance optimization Hook.
* It memoizes a function and prevents React from recreating that function unnecessarily during every render.
* React returns the same function reference until one of the dependencies changes.

### Syntax

```js
const memoizedFunction = useCallback(() => {

}, [dependencies])
```

### Why It Exists

Normally:

```js
const myFunction = () => {}
```

A new function gets created every render.

With `useCallback()`:

```js
const myFunction = useCallback(() => {

}, [])
```

React reuses the same function reference.

### When To Use

* Passing functions as Props.
* Functions inside Dependency Arrays.
* Expensive re-renders caused by changing function references.

### Flow

```text
Render
   ↓
Dependencies Changed ?
   ↓
Yes → Create New Function

No → Reuse Existing Function
```

# useRef

* `useRef()` provides a way to persist values between renders without causing re-renders.
* It is commonly used to directly access DOM elements.

### Syntax

```js
const ref = useRef(initialValue)
```

### Accessing Values

```js
ref.current
```

* The value is stored inside the `current` property.
* Updating `current` does not trigger a re-render.

### Common Use Cases

* Accessing DOM Elements
* Managing Focus
* Selecting Text
* Storing Mutable Values
* Tracking Previous Values

### Flow

```text
Create Ref
    ↓
Attach Ref
    ↓
Access Through
ref.current
```

# Controlled vs Uncontrolled Inputs

React generally prefers controlling form values through state.

### Controlled Input

```js
value={state}
onChange={...}
```

* React controls the value.
* State becomes the single source of truth.

### Uncontrolled Input

```js
ref={inputRef}
```

* DOM controls the value.
* React accesses it through a Ref when required.

# Dependency Arrays

Dependency Arrays are important because they control when Hooks should re-execute.

Commonly seen in:

* `useEffect`
* `useCallback`
* `useMemo`

### Rule

```text
If Hook Uses A Value
          ↓
That Value Should Usually
Appear In Dependency Array
```

This helps React keep values synchronized and prevents stale data issues.

# Memoization

* Memoization is the process of storing previously computed results and reusing them when possible.
* Hooks such as `useCallback()` and `useMemo()` are based on this concept.

### Goal

```text
Avoid Unnecessary Work
          ↓
Improve Performance
```

# Summary

* `useState()` manages state and triggers re-renders.
* `useEffect()` handles side effects and runs based on dependencies.
* `useCallback()` memoizes functions and prevents unnecessary recreation.
* `useRef()` stores mutable values and provides DOM access without causing re-renders.
* Dependency Arrays control when Hooks re-execute.
* Memoization helps React avoid unnecessary work and improve performance.