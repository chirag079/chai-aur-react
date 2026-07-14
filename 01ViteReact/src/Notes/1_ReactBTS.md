1. Before understanding React deeply, it is useful to know what React is actually doing behind the scenes.
2. Although we write JSX, React does not directly understand JSX.
3. JSX is eventually converted into JavaScript objects which React can process and render.

# How React Works Internally

When we write:

```jsx
<h1>Hello World</h1>
```

React internally converts it into an object-like structure describing:

* What element needs to be created.
* What attributes it should have.
* What children it contains.

Conceptually:

```js
{
  type: "h1",
  props: {},
  children: "Hello World"
}
```

React then uses this information to create actual DOM elements.

### Flow

```text
JSX
 ↓
JavaScript Object
 ↓
React Processing
 ↓
Actual DOM
```

# Root Element

React needs a place inside the HTML document where it can render the application.

This location is known as the **Root**.

Example:

```html
<div id="root"></div>
```

React selects this element using DOM selectors.

```js
document.getElementById("root")
```

and takes control of everything rendered inside it.

# Render Function

Once React has the object representation of the UI, it needs to display it on the screen.

This is done using:

```js
render()
```

The render function takes React Elements and converts them into actual DOM elements.

### Flow

```text
React Element
      ↓
render()
      ↓
Browser DOM
      ↓
Visible UI
```

# Components

A Component is simply a JavaScript function that returns JSX.

Example:

```js
function App() {
  return <h1>Hello World</h1>;
}
```

Since a Component is ultimately just a function:

```js
<App />
```

and

```js
App()
```

both work conceptually.

However, React applications should use:

```js
<App />
```

because it allows React to properly manage Components, Hooks and the Component Lifecycle.

# React Elements

Since React internally works with objects, it might seem that we can manually create our own object and pass it into React's render function.

Example:

```js
const customObject = {
  type: "a",
  props: {
    href: "https://google.com"
  }
}
```

However, this does not work.

### Why?

Because React expects objects in a very specific structure that it understands internally.

Simply creating a similar-looking object is not enough.

# createElement()

To manually create React Elements, React provides:

```js
React.createElement()
```

This creates a valid React Element that React can understand and render.

### Syntax

```js
React.createElement(
  type,
  props,
  children
)
```

# Example

```js
const customElement = React.createElement(
  "a",
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "Click Me, Visit GOOGLE"
);
```

Rendering it:

```js
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {customElement}
  </StrictMode>
);
```

### Flow

```text
createElement()
        ↓
React Element Created
        ↓
render()
        ↓
Actual DOM
        ↓
Visible UI
```

# JSX vs createElement()

When writing:

```jsx
<a href="https://google.com">
  Visit Google
</a>
```

React eventually converts it into:

```js
React.createElement(...)
```

internally.

This means:

```text
JSX
 ↓
createElement()
 ↓
React Element
 ↓
render()
 ↓
DOM
```

# Summary

* React ultimately works with JavaScript objects representing UI.
* JSX is converted into React Elements behind the scenes.
* React renders everything inside a Root Element.
* The `render()` function converts React Elements into actual DOM elements.
* Components are functions that return JSX.
* React Elements should be created using `React.createElement()`.
* Custom objects cannot be directly rendered because React expects a specific internal structure.
* JSX is simply a cleaner syntax that eventually becomes `React.createElement()` calls.
