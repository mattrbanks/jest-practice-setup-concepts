const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Matt" };
    user["lastName"] = "Banks";
    return user;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1") //fake api for tests
      .then((res) => res.data)
      .catch((err) => "error"),
};

module.exports = functions;
