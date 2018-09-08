const {nodeConstructor, setupEvents} = require('../src/script.js');

describe('nodeConstructor', () => {
  test('returns an HTML element', () => {
    const testTypes = ['h1', 'h2', 'h3', 'p', 'button', 'title'];
    testTypes.forEach(type => {
      expect(nodeConstructor(type, 'test')).toBeInstanceOf(HTMLElement);
    });
  });

  test('returns an HTML element based on the type passed in', () => {
    const testInstances = [
      ['h1', HTMLHeadingElement],
      ['h2', HTMLHeadingElement],
      ['h3', HTMLHeadingElement],
      ['p', HTMLParagraphElement],
      ['button', HTMLButtonElement],
      ['title', HTMLTitleElement],
    ];
    testInstances.forEach(([type, instance]) => {
      expect(nodeConstructor(type, 'test')).toBeInstanceOf(instance);
    });
  });

  test('returns an HTML element with text based on the text passed in', () => {
    const testText = [
      ['h1', 'h1 test !!'],
      ['h2', 'h2 test !@#!'],
      ['h3', 'heading 3 test!'],
      ['p', 'lorem ipsum paragraph test'],
      ['button', 'click me test'],
      ['title', 'this is a test'],
    ];
    testText.forEach(([type, text]) => {
      expect(nodeConstructor(type, text).textContent).toEqual(text);
    });
  });
});

describe('setupEvents', () => {
  document.body.innerHTML = '<div>' + '  <button id="main-btn" />' + '</div>';

  const preClickHTML = document.body.innerHTML;

  setupEvents();

  const btn = document.getElementById('main-btn');
  btn.click();

  expect(document.body.innerHTML).toEqual(
    preClickHTML + '<h2>Secret Text!</h2>',
  );
});
