prompt = require("prompt-sync")();
let string = prompt('Enter a sentence: ');
let words = string.split(' ');
words.sort();
console.log('The sorted words are:');
for (const element of words) {
  console.log(element);
}