1. As React applications grow, multiple Components often need access to the same data.
2. Passing this data through every intermediate Component using Props becomes difficult and repetitive. This problem is known as **Prop Drilling**.
3. React solves this using the **Context API**, which allows data to be shared across the Component tree without manually passing Props at every level.

# Context API

* Context API provides a way to create global data that can be accessed by any Component wrapped inside its Provider.
* It is commonly used for data such as:
  * Theme
  * User Information
  * Authentication
  * Language
  * Application Settings

### Flow

```text
Context Created
       ↓
Provider Wraps Components
       ↓
Any Child Component
       ↓
Access Context Data
```

# Why Context API In This Project?

This project implements a **Theme Toggler**.

Imagine passing the current theme through Props:

```text
App
 ↓
Navbar
 ↓
Container
 ↓
Card
 ↓
Button
```

Even if only the Button needs the theme, every intermediate Component must receive and forward the Prop.

This is unnecessary and makes the code harder to maintain.

Using Context API:

```text
Theme Context
      ↓
Any Component
```

Every Component can directly access the current theme without Prop Drilling.

# Creating Context

A Context is created using:

```js
const ThemeContext = createContext()
```

While creating it, an **initial value** is usually provided.

Example:

```js
createContext({
    themeMode: "",
    lightTheme: () => {},
    darkTheme: () => {},
})
```

# Why Provide Initial Values?

The initial object acts as the default shape of the Context.

It helps by:

* Defining what values the Context will contain.
* Providing default values if no Provider exists.
* Improving readability and editor auto-completion.

# Provider

Every Context comes with a Provider.

Instead of writing:

```js
<ThemeContext.Provider>
```

this project exports it as:

```js
export const ThemeContextProvider = ThemeContext.Provider;
```

This makes importing cleaner and keeps all Context-related logic inside a single file.

### Flow

```text
Create Context
      ↓
Export Provider
      ↓
Wrap Components
      ↓
Context Available
```

# Custom Hook

Normally, accessing Context requires two imports.

```js
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const data = useContext(ThemeContext);
```

Doing this in every Component becomes repetitive.

To avoid this, the project creates a Custom Hook.

```js
export default function useTheme() {
    return useContext(ThemeContext);
}
```

Now any Component can simply write:

```js
const { themeMode } = useTheme();
```

instead of importing both `useContext` and `ThemeContext` every time.

This makes Components cleaner and easier to read.

# Project Structure

Instead of scattering Context logic across multiple files, this project keeps everything together.

The Context file is responsible for:

* Creating the Context.
* Initializing its default values.
* Exporting the Provider.
* Exporting the Custom Hook.

This creates a single source of truth for everything related to the Theme Context.

# Summary

* Context API solves the problem of Prop Drilling.
* It allows global data to be shared across Components.
* `createContext()` creates the Context.
* Initial values define the default structure of the Context.
* The Provider makes the Context available to child Components.
* A Custom Hook (`useTheme()`) removes the need to repeatedly import both `useContext` and the Context object.
* In this project, Context API is used to manage the application's theme so that any Component can access or change it without passing Props through the Component tree.