1. Modern frontend applications rarely depend only on React. They are built by combining multiple libraries and services, each solving a specific problem.

For this project:

* **Frontend:** React + Redux
* **Backend:** Appwrite (Backend as a Service)
* **HTML Parsing:** `html-react-parser`
* **Forms:** `react-hook-form`

Each of these tools has a dedicated responsibility, making the application easier to maintain.

# Backend as a Service (BaaS)

Instead of building a backend from scratch, Backend as a Service (BaaS) providers offer ready-made backend functionalities.

Common features include:

* Authentication
* Database
* File Storage
* APIs
* Permissions

In this project, **Appwrite** is used as the backend.

This allows us to focus more on application logic rather than backend implementation.

# HTML Parsing

Sometimes data stored in the database contains HTML.

Example:

```html
<h1>Hello World</h1>
```

If rendered directly inside React:

```jsx
{data}
```

React treats it as a normal string.

To render it as actual HTML, libraries such as:

```text
html-react-parser
```

are used.

It converts stored HTML strings into valid React Elements that can be rendered on the page.

# React Hook Form

Handling forms manually becomes repetitive as applications grow.

Problems include:

* Managing multiple input states.
* Validation.
* Error Handling.
* Form Submission.

`react-hook-form` simplifies all these tasks.

It provides:

* Easy Form Handling
* Validation
* Error Management
* Better Performance
* Cleaner Code

It is one of the most widely used form libraries in the React ecosystem.

# Environment Variables

Applications often require values such as:

* API URLs
* Database IDs
* Project IDs
* Secret Keys
* Bucket IDs

Hardcoding these values directly inside source code is considered a bad practice.

Instead, they are stored as **Environment Variables**.

Example:

```env
VITE_APPWRITE_URL=""
VITE_APPWRITE_PROJECT_ID=""
VITE_DATABASE_ID=""
VITE_COLLECTION_ID=""
VITE_BUCKET_ID=""
```

# Why Use Environment Variables?

* Keeps configuration separate from application logic.
* Makes switching between Development, Testing and Production easier.
* Prevents modifying source code whenever configuration changes.
* Improves maintainability.

## Should Secrets Be Stored Here?

A very important point:

Frontend environment variables are **NOT secret**.

Although they are not hardcoded inside Components, they are still bundled and shipped to the browser during build time.

Therefore:

* API Keys intended for the frontend are acceptable.
* Secret Keys, Private Credentials and Backend-only Tokens should **never** be placed inside frontend environment variables.

# Accessing Environment Variables

The syntax depends on the framework being used.

Examples:

* Create React App (CRA)
* Vite
* Next.js

Each framework defines its own convention.

### In Vite

Variables must begin with:

```env
VITE_
```

Example:

```env
VITE_APPWRITE_URL=""
```

Accessing them:

```js
import.meta.env.VITE_APPWRITE_URL
```

Always refer to the framework documentation for the correct naming convention.