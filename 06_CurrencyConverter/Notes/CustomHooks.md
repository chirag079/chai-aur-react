1. React provides many built-in Hooks such as `useState()`, `useEffect()`, `useRef()` etc. However, while building applications we often encounter situations where the same logic is needed in multiple places.
2. Copy-pasting the same Hook logic into multiple Components violates the DRY (Don't Repeat Yourself) principle.
3. React allows developers to create their own Hooks known as **Custom Hooks**.

# Custom Hooks

* A Custom Hook is simply a JavaScript function whose name starts with `use`.
* It allows us to extract reusable stateful logic into a separate function.
* Internally a Custom Hook can use other Hooks such as:
  * `useState`
  * `useEffect`
  * `useRef`
  * `useCallback`

### Example

Suppose multiple Components need currency exchange data.

Without a Custom Hook:

```text
Component A
  ↓
Fetch Currency Data

Component B
  ↓
Fetch Currency Data

Component C
  ↓
Fetch Currency Data
```

The same logic gets repeated everywhere.

With a Custom Hook:

```text
Component A
      ↓
Component B
      ↓
Component C
      ↓
useCurrencyInfo()
```

The fetching logic exists only once and can be reused anywhere.

# useCurrencyInfo()

In this project, a Custom Hook named:

```js
useCurrencyInfo()
```

has been created.

Its responsibility is:

* Receive a currency.
* Fetch exchange rate data.
* Store it inside state.
* Return the processed data.

### Flow

```text
Currency Selected
        ↓
useCurrencyInfo()
        ↓
API Call
        ↓
Data Stored In State
        ↓
Return Data
```

# Benefits

* Reusability
* Cleaner Components
* Better Separation of Concerns
* Easier Maintenance

The Component focuses on displaying UI while the Custom Hook focuses on data fetching logic.