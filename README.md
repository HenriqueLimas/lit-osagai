# lit-osagai 🧙‍♂️

The power of [lit-html](https://github.com/Polymer/lit-html) with [osagai](https://github.com/HenriqueLimas/osagai)

## Install

You can get it on npm.

```sh
npm install lit-osagai
```

Or import from unpkg

```js
import { define, html } from "https://unpkg.com/lit-osagai/dist/lit-osagai.mjs";
```

## Usage

```js
import { define, html } from "lit-osagai";

function HelloWorld() {
  return () => html`
    <h1>Hello World</h1>
  `;
}

define("hello-world", HelloWorld);
```

---

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [define](#define)
  - [Parameters](#parameters)
- [html](#html)
  - [Parameters](#parameters-1)
- [attachShadow](#attachshadow)
- [onConnected](#onconnected)
  - [Parameters](#parameters-2)
- [onDisconnected](#ondisconnected)
  - [Parameters](#parameters-3)
- [onAttributeChanged](#onattributechanged)
  - [Parameters](#parameters-4)
- [update](#update)
  - [Parameters](#parameters-5)

### define

Define a new custom element

#### Parameters

- `name` **[String](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name for the new custom element. Note that custom element names must contain a hyphen (ex. hello-world)
- `Component` **OsagaiComponent** Function that will return a Template function that defines the layout of your custom element. [Reference](https://osagai.js.org/docs/api-reference/osagai/#overview)
- `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Configuration options from Osagai and custom elements. [Reference](https://osagai.js.org/docs/api-reference/osagai/#define)

### html

Interprets a template literal as an HTML template that can efficiently render to and update a container. From [lit-html docs](https://lit-html.polymer-project.org/api/modules/lit_html.html#html)

#### Parameters

- `strings` **TemplateStringsArray**

Returns **TemplateResult**

### attachShadow

Attach a shadow dom in the element. More at [Osagai docs](https://osagai.js.org/docs/api-reference/dom/#attachShadow)

### onConnected

Add a callback to be performed when the element is connected in the document. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onConnected)

#### Parameters

- `element` **OsagaiElement** Instance of the osagai element.
- `callback` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that will be perfomed when the element is connected.

### onDisconnected

Add a callback to be performed when the element is disconnected from the document. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onDisconnected)

#### Parameters

- `element` **OsagaiElement** Instance of the osagai element.
- `callback` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that will be perfomed when the element is disconnected.

### onAttributeChanged

Add a callback to be performed when one of the attribute from the observedAttributeslist is added, changed or removed. [Osagai docs](https://osagai.js.org/docs/api-reference/lifecycles/#onAttributeChanged)

#### Parameters

- `element` **OsagaiElement** Instance of the osagai element.
- `callback` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that will be runned with an object with the information of the attribute changed. (name, current, old)

### update

Updates the data of the Component, scheduling a new change in the DOM using lit-html and return a promise with the new data returned by the dataChanger.

#### Parameters

- `element` **OsagaiElement** Instance of the element to be updated. [Reference](https://osagai.js.org/docs/api-reference/dom/#update)
- `dataChanger` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** Function that receive as parameter the data that needs to be changed and needs to return the new data. This could also be a promise that will be resolved by the update function. [Reference](https://osagai.js.org/docs/api-reference/dom/#update)

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)** a promise with the new data changed
