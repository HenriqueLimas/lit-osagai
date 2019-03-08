import litRenderer from "./litRenderer.js";

/**
 * Updates the data of the Component, scheduling a new change in the DOM using lit-html and return a promise with the new data returned by the dataChanger.
 *
 * @name update
 * @param {OsagaiElement} element Instance of the element to be updated. [Reference](https://osagai.js.org/docs/api-reference/dom/#update)
 * @param {Function} dataChanger Function that receive as parameter the data that needs to be changed and needs to return the new data. This could also be a promise that will be resolved by the update function. [Reference](https://osagai.js.org/docs/api-reference/dom/#update)
 * @returns {Promise} a promise with the new data changed
 *
 */
function update(element, dataChanger = () => {}) {
  return Promise.resolve(dataChanger(element.__currentState__)).then(
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
