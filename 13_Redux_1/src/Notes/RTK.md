1. As applications grow larger, managing shared state becomes difficult. React's Context API solves the problem of **Prop Drilling**, but it does not provide a strict way of managing how data should be updated.
2. Since state updating logic can be written anywhere, maintaining large applications becomes difficult and data flow can become chaotic.
3. This led to the introduction of **Flux**, an architecture that focused on having a predictable and unidirectional data flow.
4. Redux is an implementation inspired by Flux that further simplified and standardized state management.

# Context API vs Redux

### Context API

* Solves the problem of Prop Drilling.
* Provides a Global State.
* Does not enforce how state should be updated.
* Developers can expose functions through Context and implement any logic inside them.

### Redux

Redux introduces a few important principles:

* There should be **only one Global Store**.
* State should be treated as **Read-Only**.
* State can only be modified through **Reducer Functions**.
* Components should request state changes instead of directly mutating state.

### Flow

```text
Component
     ↓
Dispatch Action
     ↓
Reducer
     ↓
Store Updated
     ↓
UI Re-renders
```

This makes state updates predictable and much easier to debug.

# Redux Toolkit (RTK)

Redux itself requires a lot of configuration.

To simplify this, Redux introduced **Redux Toolkit (RTK)**.

RTK provides utility functions like:

* `configureStore()`
* `createSlice()`
* `createAsyncThunk()` (for async operations)

Today, RTK is the recommended way of using Redux.

# Store

The **Store** is the single source of truth of the application.

It contains the complete global state.

Example:

```js
export const store = configureStore({
    reducer: todoReducer
})
```

The Store is then made available to the entire application using:

```jsx
<Provider store={store}>
    <App />
</Provider>
```

### Flow

```text
Store
   ↓
Provider
   ↓
Entire Application
```

# Slice

Instead of writing all Redux logic in one file, RTK organizes state into **Slices**.

A Slice contains:

* Initial State
* Reducers
* Generated Actions

Example:

```js
const initialState = {
    todos: []
}
```

Each Slice is responsible for one feature of the application.

Examples:

* User Slice
* Theme Slice
* Todo Slice
* Cart Slice

# Reducers

Reducers are the **only** place where Redux state should be modified.

Example:

```js
reducers: {
    addTodo(){},
    removeTodo(){}
}
```

Each reducer receives:

* Current State
* Action

```js
(state, action)
```

The `action.payload` contains any data sent while dispatching the action.

Example:

```js
dispatch(addTodo("Learn Redux"))
```

Inside reducer:

```js
action.payload
```

becomes:

```text
"Learn Redux"
```

# Actions

RTK automatically generates Action Creators from Reducers.

Example:

```js
export const {
    addTodo,
    removeTodo
} = todoSlice.actions
```

These functions are dispatched whenever a state update is required.

# useDispatch()

`useDispatch()` provides access to Redux's dispatch function.

```js
const dispatch = useDispatch();
```

Whenever state needs to change:

```js
dispatch(addTodo(input))
```

or

```js
dispatch(removeTodo(id))
```

React sends the Action to Redux.

### Flow

```text
Component
     ↓
dispatch()
     ↓
Reducer Executes
     ↓
Store Updated
```

# useSelector()

`useSelector()` is used to read data from the Redux Store.

Example:

```js
const todos = useSelector(
    (state) => state.todos
)
```

Unlike `useDispatch()`, it never changes state.

Its only responsibility is reading data.

### Flow

```text
Redux Store
      ↓
useSelector()
      ↓
Component Receives State
```

# State Update Cycle

Whenever a user performs an action:

```text
User Clicks Button
        ↓
dispatch(Action)
        ↓
Reducer Executes
        ↓
Store Updated
        ↓
Affected Components Re-render
```

Notice that Components never directly modify the Store.

Everything goes through Reducers.

# Why Redux?

Redux shines when:

* Multiple Components need the same data.
* State becomes complex.
* Applications grow larger.
* Predictable state management is required.

Instead of managing state updates from multiple places, Redux centralizes everything into one predictable flow.

# Summary

* Context API provides Global State but does not strictly organize state updates.
* Redux follows Flux Architecture and introduces predictable data flow.
* Redux Toolkit simplifies Redux configuration.
* The **Store** holds the application's global state.
* A **Slice** groups related state and reducers together.
* **Reducers** are the only place where state should be modified.
* **Actions** describe what update should happen.
* `useDispatch()` sends actions to Redux.
* `useSelector()` reads data from the Store.
* Redux follows one simple principle:

```text
Read State
     ↓
Dispatch Action
     ↓
Reducer Updates State
     ↓
UI Updates
```