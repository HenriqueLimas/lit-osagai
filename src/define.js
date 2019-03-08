import { define } from "osagai";

import litRenderer from "./litRenderer.js";

/**
 * Define a new custom element
 *
 * @name define
 * @param {String} name Name for the new custom element. Note that custom element names must contain a hyphen (ex. hello-world)
 * @param {OsagaiComponent} Component Function that will return a Template function that defines the layout of your custom element. [Reference](https://osagai.js.org/docs/api-reference/osagai/#overview)
 * @param {Object} options Configuration options from Osagai and custom elements. [Reference](https://osagai.js.org/docs/api-reference/osagai/#define)
 *
 */
function defineLit(name, Component, options) {
  return define(name, Component, {
    ...options,
    renderer: litRenderer
  });
}

export default defineLit;
