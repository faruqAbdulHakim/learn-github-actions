const { add } = require('./app');

it('add 1 and 2 Should return 3', () => {
  expect(add(1, 2)).toBe(3);
});

it('add 3 and 2 Should return 5', () => {
  expect(add(1, 2)).toBe(6);
});
