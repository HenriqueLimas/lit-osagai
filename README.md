# lit-osagai 🧙‍♂️

The power of [lit-html](https://github.com/Polymer/lit-html) with [osagai](https://github.com/HenriqueLimas/osagai)

## Install

You can get it on npm.

```
npm install lit-osagai
```

Or import from unpkg

```js
import { define, html } from "https://unpkg.com/lit-osagai/osagai.mjs";
```

## Usage

```js
import { define, html } from 'lit-osagai'

function HelloWorld() {
  return () => html`
    <h1>Hello World</h1>
  `
}

define('hello-world', HelloWorld)
```
