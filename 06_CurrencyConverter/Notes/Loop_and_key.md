1. While rendering collections of data in React, we often use JavaScript's `map()` function.
2. `map()` allows us to transform each element of an array into a React Element.

### Example

```js
currencyOptions.map((currency) => (
  <option>{currency}</option>
))
```

This generates multiple `<option>` elements from an array.

# The Key Prop

Whenever React renders a list using:

```js
map()
```

it expects every rendered element to have a unique `key`.

Example:

```js
currencyOptions.map((currency) => (
  <option key={currency}>
    {currency}
  </option>
))
```

# Why Does React Need Keys?

Imagine React renders:

```text
USD
INR
NPR
```

and later:

```text
USD
EUR
INR
NPR
```

Without keys, React may struggle to identify:

* Which item is new.
* Which item was removed.
* Which item remained unchanged.

With keys:

```text
USD → Same
EUR → New
INR → Same
NPR → Same
```

React can efficiently update only the necessary elements.

### Flow

```text
Array
  ↓
map()
  ↓
React Elements
  ↓
Keys Help React Track Elements
```

# Rule

Whenever rendering a list using:

```js
map()
```

always try to provide a unique key.

Good Examples:

```js
key={id}
key={currency}
```

Avoid:

```js
key={Math.random()}
```

because the value changes on every render.

# In This Project

The currencies are unique values:

```js
usd
inr
npr
eur
```

Therefore:

```js
key={currency}
```

works perfectly.