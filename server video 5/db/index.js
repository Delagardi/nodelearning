var phrases;

exports.connect = function() {
  phrases = require("./ua.json"); 
}

exports.getPhrase = function(name) {
  if (!phrases[name]) {
    throw new Error("Немає такої фрази: " + name);
  }
  return phrases[name];
};