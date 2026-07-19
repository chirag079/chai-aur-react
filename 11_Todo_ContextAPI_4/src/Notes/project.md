# Todo App using Context API & Local Storage

## Why Context API?

In this project, multiple components need access to the same todo data.

- `App` stores the todos.
- `TodoForm` adds new todos.
- `TodoItem` edits, deletes, and marks todos as completed.

Without Context API, these functions would have to be passed through Props.

```text
App
 ↓
TodoList
 ↓
TodoItem
```

As the application grows, this becomes difficult to maintain. This is called **Prop Drilling**.

Using Context API:

```text
Todo Context
      ↓
TodoForm
TodoItem
```

Any component inside the Provider can directly access the todo data and functions.

---

# Todo Context

The Context stores all todo-related data and operations.

```js
createContext({
    todos: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
})
```

It provides:

- `todos`
- `addTodo()`
- `updateTodo()`
- `deleteTodo()`
- `toggleComplete()`

---

# Provider

The `TodoContextProvider` makes the Context available to all child components.

```jsx
<TodoContextProvider value={{ ... }}>
    <App />
</TodoContextProvider>
```

Flow:

```text
Create Context
      ↓
Wrap App with Provider
      ↓
Components access Context
```

---

# Custom Hook

Instead of writing:

```js
import { useContext } from "react";
import { TodoContext } from "./contexts";

const data = useContext(TodoContext);
```

the project creates a custom hook:

```js
const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
} = useTodo();
```

This makes components cleaner and avoids repeating `useContext()` everywhere.

---

# Data Flow

Whenever the user performs an action:

```text
User Action
      ↓
Context Function
      ↓
State Updates
      ↓
UI Re-renders
```

Example:

```text
Click Add
      ↓
addTodo()
      ↓
todos state updates
      ↓
Todo list re-renders
```

The same flow is followed for editing, deleting, and toggling a todo.

---

# Local Storage

React state is temporary. Refreshing the page removes all todos.

To keep the todos even after a refresh, the project uses **Local Storage**.

Without Local Storage:

```text
Add Todos
      ↓
Refresh
      ↓
Todos Lost
```

With Local Storage:

```text
Add Todos
      ↓
Save in Local Storage
      ↓
Refresh
      ↓
Todos Restored
```

---

# Saving Todos

Whenever the `todos` state changes, it is saved automatically.

```js
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

- `JSON.stringify()` converts the array into a string.
- `setItem()` stores it in Local Storage.

---

# Loading Todos

When the application starts, previously saved todos are loaded.

```js
useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));

    if (storedTodos) {
        setTodos(storedTodos);
    }
}, []);
```

- `getItem()` reads the stored data.
- `JSON.parse()` converts it back into a JavaScript array.

This runs only once when the application loads.

---

# Why JSON?

Local Storage can only store **strings**.

Before saving:

```js
JSON.stringify(todos)
```

After reading:

```js
JSON.parse(data)
```

This allows JavaScript objects to be stored and restored correctly.

---

# Project Flow

```text
Application Starts
        ↓
Load Todos from Local Storage
        ↓
Store Todos in React State
        ↓
Provide State using Context
        ↓
Components access Context using useTodo()
        ↓
User adds / edits / deletes / toggles todos
        ↓
State Updates
        ↓
UI Re-renders
        ↓
Updated Todos saved to Local Storage
```

---

# Summary

- **Context API** removes Prop Drilling by sharing todo data across components.
- **TodoContextProvider** makes the Context available throughout the application.
- **useTodo()** provides an easy way to access the Context.
- **App** manages the todo state and CRUD operations.
- **TodoForm** adds new todos.
- **TodoItem** edits, deletes, and toggles todos.
- **Local Storage** keeps todos even after refreshing the page.
- **useEffect()** is used to automatically save and restore todos.
- Together, **React State + Context API + Local Storage** create a simple, maintainable, and persistent Todo application.