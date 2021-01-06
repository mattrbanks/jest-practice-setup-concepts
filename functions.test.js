const functions = require("./functions");

/*
the test description can be anything you want
expect is where the function goes with its params
toBe is called a matcher and there are a lot of them in jest
test suites are the files
*/
test("Adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
