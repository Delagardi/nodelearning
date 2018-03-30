var phrases = require("./ua.json");

function User(name) {
  this.name = name;
}

User.prototype.hello = function(who) {
  console.log(phrases.Hello + ", " + who.name);
};

console.log("-- user's index.js added --");

//exports.User = User;
// using module.export for simplyfing add function

module.exports = User;