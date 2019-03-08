import litRenderer from "./litRenderer.js";

function update(element, stateChanger = () => {}) {
  return Promise.resolve(stateChanger(element.__currentState__)).then(
    nextState => {
      return new Promise(resolve => {
        requestAnimationFrame(() => {
          element.__currentState__ = nextState;
          litRenderer(element, element._template(nextState));
        });
      });
    }
  );
}

export default update;
