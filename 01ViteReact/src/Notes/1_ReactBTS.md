custom react learnings

1. everything in react is translated as an object , with props like type, props(Attr of element), children...
2. The Root portion is selected via DOM selectors
3. A render function is used which basically renders that object back to HTML and places it inside Root

# refer to customReact.js File for more context!

# Component: A function which returns a JSX part

* since it is a function, <Component /> or Component() BOTH will work, as At the end it is a function only

**NOTE**
As everything is translated as an object doesnt mean we can create our custom object and inject it in Render function of React, Although the concept is same but due to syntactical mismatching we can't do so.

* Instead we use createElement() function of react and inject it in Render Function, ex:

# Example of createElement and use in Render function:

let customElement=React.createElement('a', {href:"https://www.google.com", target:"_blank"}, Click Me, Visit GOOGLE);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {customElement}
  </StrictMode>,
)