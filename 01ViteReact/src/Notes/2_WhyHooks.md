1. Main problem with Vanilla JS was the sync problem between State and UI, JS would update the state locally but would not propagate that state to entire UI at all. Programmer would need to do it manually via DOM selectors, as soon as state changes select all the parts and inject the new value into the DOM. IT WAS CUMBERSOME!

PROBLEM: UI updation Handling ==> Anything that changes would not get propagated to the UI although its used dynamically in the program 


2. This is where React comes in, what it does is simple. Wherver UI is getting manipulated it will be handled via React. It provides us with a set of special functions called HOOKS which let us use them and propagate all the changes to the UI via them.

They parse the entire DOM tree and make changes eherever applicable ----> UI updates ✅

There are multiple hooks for different use cases. Go explore them on React's Open source Github


3. Most common hook is UseState HOOK! on which the project is based on. UseState is actually used for state manipulation, and whenever the state gets manipulated it's role is to have it propagated back to the UI as well.

# usage:

let [var, setVar] = useState(<default value of 'var'>)
* useState basically gives an array with 2 values in it. First value is a normal variable while other is a function handling state of that variable.
* It needs a default value to be given to that variable which can be anything. boolean, string, numeric, array , object or even a Function

4. That is why whenever complex UI manipulation takes place -----> Its React to be plugged in, as it Reacts to every change everywhere applicable!









