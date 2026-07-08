1. One of the most common React interview questions revolves around how React handles multiple state updates inside the same function.

Consider the following example:

```js
let incFunc = () => {
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)
}
```

**Question:** Will the counter increase by 1 or by 4?

# State Batching

* React batches multiple state updates together before processing them.
* All four setter calls above use the same snapshot of `count`.
* If `count` was `0`, React effectively sees:

```js
setCount(1)
setCount(1)
setCount(1)
setCount(1)
```

* Since all updates are trying to set the same value, React performs the update only once.

### Flow

```text
count = 0
    ↓
4 Setter Calls
    ↓
All Calculate 0 + 1
    ↓
React Batches Updates
    ↓
Final Count = 1
```

# Functional Updates

Now suppose the requirement is that the counter should increase every time the setter is called.

This can be achieved using the callback form of the setter function.

```js
setCount(prevCount => prevCount + 1)
```

* The callback receives access to the latest available state.
* Each setter now operates on the updated value from the previous setter.

```js
let incFunc = () => {
  setCount(prevCount => prevCount + 1)
  setCount(prevCount => prevCount + 1)
  setCount(prevCount => prevCount + 1)
  setCount(prevCount => prevCount + 1)
}
```

### Flow

```text
0 → 1 → 2 → 3 → 4
```

* Since every update uses the latest state, the counter increases by 4.

# Rule of Thumb

```text
Next State Depends On Previous State
                ↓
      Use Functional Updates
```

# Interview Takeaway

* React batches state updates for performance.
* Multiple setter calls using the same state snapshot may not produce multiple updates.
* Functional updates (`prevState => ...`) allow access to the latest state and ensure each update is applied sequentially.

### Funny Moment 😄

Yes, if the goal is simply to add 4, you could write:

```js
setCount(count + 4)
```

But the real purpose of this discussion is understanding:
* State Batching
* React Update Queue
* Functional Updates
* Accessing Previous State

which are common React interview topics.