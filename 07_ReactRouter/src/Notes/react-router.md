1. React itself only handles UI rendering. It does not provide routing capabilities out of the box.
2. In a real-world application, we need features such as:
   * Multiple Pages
   * Dynamic URLs
   * Route Parameters
   * Navigation
3. To achieve this, React applications commonly use **React Router DOM**, a third-party library specifically designed for routing.

# React Router DOM

* React Router DOM enables navigation between different pages without refreshing the browser.
* Since React applications are generally SPAs (Single Page Applications), routing is handled on the client side.
* Instead of requesting a new page from the server, React updates the UI based on the current route.

### Flow

```text
User Navigates
       ↓
Route Changes
       ↓
Matching Component Rendered
       ↓
No Page Refresh
```

# Creating a Router

Routing begins by creating a router configuration.

```js
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact-us',
        element: <Contact />
      }
    ]
  }
])
```

* Each route contains:
  * A Path
  * A Component to Render
* Child routes allow route nesting.

# RouterProvider

Once the router is created, React needs access to it.

```js
<RouterProvider router={router} />
```

* This makes the routing system available throughout the application.
* Without `RouterProvider`, React Router cannot function.

### Flow

```text
Create Router
      ↓
Pass To RouterProvider
      ↓
Routing Enabled
```

# Layout Component

In most applications, certain UI elements remain constant across pages.

Examples:

* Header
* Navbar
* Footer

Instead of repeating them inside every page, React Router provides a cleaner approach using Layout Components.

```js
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
```

# Outlet

* `Outlet` acts as a placeholder.
* React renders the currently matched child route inside the Outlet.

### Flow

```text
Layout
 ├── Header
 ├── Outlet
 └── Footer

      ↓

Matched Route Rendered Inside Outlet
```

This allows shared UI to remain fixed while only the page content changes.

# Link

Navigation can be performed using:

```html
<a href="/about">
```

However this causes:

* Full Page Reload
* Loss of React State
* Unnecessary Network Requests

React Router provides:

```js
<Link to="/about">
```

which performs client-side navigation.

### Flow

```text
Link Clicked
      ↓
Route Changes
      ↓
Component Changes
      ↓
No Page Refresh
```

# NavLink

`NavLink` works similarly to `Link` but provides additional information about the current route.

Example:

```js
<NavLink
  className={({ isActive }) =>
    isActive ? "active-class" : "normal-class"
  }
>
  Home
</NavLink>
```

# Why NavLink?

It helps identify:

* Active Routes
* Pending Routes
* Current Navigation State

### Common Callback Parameters

```js
({ isActive, isPending })
```

### Example

```text
Current URL = /about

About Link
      ↓
isActive = true
```

This is commonly used to highlight the currently selected navigation item.

# Route Parameters

Sometimes a route must handle dynamic values.

Example:

```text
/user/chirag
/user/hitesh
/user/john
```

Instead of creating separate routes for every user, React Router allows Route Parameters.

### Route Definition

```js
{
  path: "user",
  children: [
    {
      path: ":name",
      element: <User />
    }
  ]
}
```

The `:` symbol indicates a dynamic parameter.

# useParams()

React Router provides:

```js
useParams()
```

to access route parameters.

```js
const { name } = useParams();
```

### Example

URL:

```text
/user/chirag
```

Result:

```js
name = "chirag"
```

### Flow

```text
URL
 ↓
/user/chirag
 ↓
useParams()
 ↓
{name:"chirag"}
```

# Loaders

A common requirement is fetching data before rendering a page.

Traditional approach:

```js
useEffect()
      ↓
Component Renders
      ↓
API Call Starts
      ↓
Data Arrives
      ↓
Re-render
```

React Router introduces **Loaders** to optimize this process.

# Loader

A Loader is a function responsible for fetching data before the route renders.

```js
{
  path: "github",
  loader: githubInfoLoader,
  element: <Github />
}
```

Example:

```js
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/hiteshchoudhary"
  );

  return response.json();
}
```

# Why Use Loaders?

* Data fetching becomes route-aware.
* Data is prepared before the Component renders.
* Cleaner separation between UI and data-fetching logic.
* Better user experience.

One interesting optimization is that React Router can begin preparing route-related resources even before navigation completes, such as during user interactions leading up to navigation.

### Flow

```text
User Intends To Navigate
          ↓
Loader Executes
          ↓
Data Fetched
          ↓
Route Renders
```

# useLoaderData()

Data returned by the Loader can be accessed using:

```js
const data = useLoaderData();
```

Example:

```js
const data = useLoaderData();

<p>Followers: {data.followers}</p>
```

### Flow

```text
Loader
   ↓
Returns Data
   ↓
useLoaderData()
   ↓
Component Receives Data
```

# Summary

* React Router DOM is a third-party routing library for React.
* `createBrowserRouter()` is used to define routes.
* `RouterProvider` enables routing inside the application.
* `Layout` and `Outlet` help share common UI across pages.
* `Link` enables navigation without page refreshes.
* `NavLink` provides active route awareness.
* `useParams()` is used to capture dynamic route parameters.
* `loader` functions fetch route-related data before rendering.
* `useLoaderData()` provides access to Loader data inside Components.