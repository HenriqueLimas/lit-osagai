import { define } from "osagai";

import litRenderer from "./litRenderer.js";

function defineLit(name, Component, options) {
  return define(name, Component, {
    ...options,
    renderer: litRenderer
  });
}

export default defineLit;
