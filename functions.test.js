const functions = require("./functions");

/*
the test description can be anything you want
expect is where the function goes with its params
toBe is called a matcher and there are a lot of them in jest
test suites are the files
*/

//toBe note: This is for primitive types of data not composite/reference data
test("Adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

//not
test("Adds 2 + 2 NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

//toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

//toEqual or toStrictEqual note: This is for composite/reference type data
test("User should be Matt Banks object", () => {
  expect(functions.createUser(undefined)).toStrictEqual({
    firstName: "Matt",
    lastName: "Banks",
  });
});

//less than and greater than
test("Should be under 1600", () => {
  const load1 = 800; //the logic can be entered in the test
  const load2 = 800; //the logic does not need to be in the test suite
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i); //i flag is case sensitive
});

//Arrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with async data

//Promise
test("user fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  }); //you must have assertions and return for this to work properly
});

//Async Await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
