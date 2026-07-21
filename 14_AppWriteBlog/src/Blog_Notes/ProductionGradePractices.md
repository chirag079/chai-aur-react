# Production Practice

Instead of accessing:

```js
import.meta.env
```

throughout the application, a common practice is creating a configuration file.

Example:

```text
src/
 └── conf/
      └── config.js
```

```js
const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    collectionId: import.meta.env.VITE_COLLECTION_ID,
    bucketId: import.meta.env.VITE_BUCKET_ID,
}

export default conf;
```

Advantages:

* Single source of configuration.
* Easier maintenance.
* Cleaner imports.
* Easy migration if environment variables change.

# Authentication as a Service

Authentication is another feature commonly provided by Backend as a Service platforms.

Instead of implementing authentication from scratch, services like Appwrite provide ready-made APIs for:

* User Registration
* Login
* Logout
* Session Management
* Current User Information

# Creating a Wrapper Class

Although Appwrite already provides authentication methods, directly using them throughout the application creates **Vendor Lock-in**.

Example:

```text
Component
    ↓
Appwrite SDK
```

If Appwrite is replaced by another service in the future, every Component would need modifications.

Instead, a wrapper class is created.

Example:

```js
class AuthService {

    createAccount(){}

    login(){}

    logout(){}

    getCurrentUser(){}

}
```

Components interact only with this wrapper.

```text
Component
      ↓
AuthService
      ↓
Appwrite
```

# Why Create a Wrapper?

This abstraction provides several advantages:

* Avoids Vendor Lock-in.
* Keeps Appwrite-specific code in one place.
* Makes the application easier to maintain.
* Future backend migrations require minimal frontend changes.

For example, if Appwrite is replaced with Firebase or Supabase, only the implementation inside `AuthService` changes while the frontend continues calling:

```js
authService.login()

authService.logout()

authService.createAccount()
```

without any modifications.