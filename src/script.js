// The primary executing function. Source of our page setup function calls
const main = () => {
  setupEvents();
};

// Creates the eventListeners for the page
const setupEvents = () => {
  const mainBtn = document.getElementById('main-btn');
  mainBtn.addEventListener('click', () => {
    document.body.appendChild(
      nodeConstructor('h2', 'Secret Text!', document.body),
    );
  });
};

/**
 * Returns a newly generated DOM element
 * @param string type - The HTML tag we want our new node to be
 * @param string text - The internal text of our new node
 */
const nodeConstructor = (type, text) => {
  const element = document.createElement(type);
  const node = document.createTextNode(text);
  element.appendChild(node);

  return element;
};

// ready waits until the DOM is fully loaded before running any scripts.
function ready() {
  if (
    document.attachEvent
      ? document.readyState === 'complete'
      : document.readyState !== 'loading'
  ) {
    main();
  } else document.addEventListener('DOMContentLoaded', main);
}

// this code block checks if the "module" is available. If so we export or functions for testing. otherwise we run our DOM "ready" function
if (typeof module === 'object' && module.exports) {
  module.exports = {
    nodeConstructor,
    setupEvents,
  };
} else ready();
