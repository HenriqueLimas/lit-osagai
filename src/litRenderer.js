import { render } from "lit-html";
import { SHADOW_DOM } from "osagai/dom";

function litRenderer(element, template) {
  render(template, element[SHADOW_DOM] || element);
}

export default litRenderer;
