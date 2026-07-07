1. This topic is very important in terms of future exploration of React or any React-dependent framework. React initially used the traditional concept of a Virtual DOM as its core implementation. Understanding this is important because many modern concepts are built on top of it.

# Virtual DOM

* The `createRoot()` method creates a React Root from where React starts managing the UI.
* React maintains an in-memory representation of the UI, commonly referred to as the **Virtual DOM**.
* Whenever a state or prop changes, React first updates this Virtual DOM rather than directly touching the Actual DOM.
* React then compares the previous Virtual DOM with the updated Virtual DOM and determines what exactly has changed.
* Only the required changes are pushed to the Actual DOM.
* This comparison process is known as **Diffing**.
* The overall process of identifying and applying updates is known as **Reconciliation**.

Since React applications are generally SPAs (Single Page Applications), React keeps updating different portions of the same UI tree instead of reloading the entire page.

### Flow:

```text
State Change
      ↓
Virtual DOM Updated
      ↓
Diffing
      ↓
Reconciliation
      ↓
Actual DOM Updated
```

The above approach was already much faster than directly manipulating the DOM repeatedly. However, React engineers noticed another optimization opportunity.

Imagine the following scenario:

* A button click triggers a network request.
* The UI starts preparing updates immediately.
* Before the first request completes, the user clicks the button again.
* Then again.
* Then again.

At this point, React has multiple pending updates.

The question becomes:

* Why should React spend resources processing outdated updates?
* Why not prioritize the most recent update which actually represents the latest UI state?

This thought process became one of the motivations behind the next major architecture change in React.

# Fiber

* Fiber is React's modern reconciliation architecture.
* Instead of treating rendering as one large task, Fiber breaks rendering into smaller units of work.
* This allows React to control rendering much more intelligently.

The main idea is:

* Not all updates are equally important.
* Some updates should happen immediately.
* Some updates can wait.

### Example:

* Typing inside an input field.
* Rendering a table with 10,000 rows.

Both are updates, but typing is more important because it directly affects user experience.

Fiber allows React to prioritize the typing update before spending time rendering the huge table.

### What Fiber Enables

* Pausing work.
* Resuming work later.
* Prioritizing important updates.
* Discarding outdated work.
* Scheduling updates more efficiently.

### Flow:

```text
Multiple Updates
        ↓
     Fiber
        ↓
Prioritize Work
        ↓
Pause / Resume if Needed
        ↓
Apply Latest Relevant Changes
        ↓
Update Actual DOM
```

This makes applications feel significantly more responsive, especially when dealing with large component trees and expensive renders.

# Render Phase & Commit Phase

To understand Fiber better, React's work can be divided into two phases:

### Render Phase

* React calculates what needs to change.
* React creates a Work-In-Progress tree.
* No DOM changes happen here.
* Fiber can pause, restart, or discard this work if a higher priority update arrives.

```text
State Change
      ↓
Render Phase
      ↓
Calculate Changes
```

### Commit Phase

* Once React is satisfied with the calculations, it enters the Commit Phase.
* React finally updates the Actual DOM.
* This phase cannot be interrupted because UI consistency must be maintained.

```text
Calculated Changes
        ↓
Commit Phase
        ↓
Actual DOM Updated
```

# Hydration

Hydration is a concept commonly encountered in frameworks like Next.js.

Normally React generates UI inside the browser.

However, with Server Side Rendering (SSR):

* The server generates the HTML first.
* The browser receives an already rendered page.
* The user can see content immediately.

The problem is:

* The HTML is visible.
* But React has not attached its event handlers yet.
* Buttons may appear on screen but React is not controlling them.

Hydration solves this problem.

### What Hydration Does

* React takes control of the already existing HTML.
* Event listeners are attached.
* Component state becomes active.
* The page becomes fully interactive.

### Flow:

```text
Server Generates HTML
          ↓
Browser Receives HTML
          ↓
Content Visible
          ↓
React JS Loads
          ↓
Hydration
          ↓
Interactive Application
```

This is one of the major reasons SSR applications feel faster than traditional client-side rendered applications.

# Summary

```text
Virtual DOM
     ↓
Diffing
     ↓
Reconciliation
     ↓
Need Better Scheduling
     ↓
Fiber
     ↓
Render Phase
     ↓
Commit Phase
     ↓
Concurrent Features
```

```text
SSR
 ↓
HTML Sent From Server
 ↓
Page Visible
 ↓
Hydration
 ↓
React Takes Control
 ↓
Interactive UI
```