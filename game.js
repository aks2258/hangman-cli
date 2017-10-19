var inquirer = require ('inquirer');
var wordSelect = require("./word-select")
var currentWord = [];

console.log("The Futurama Hangman Game");
console.log("Can you guess the character name?")
currentWord = wordSelect;


// grab selected word from wordSelect
// use inquirer to collect user's guess
// call function checkLetters from check-letter.js to find user's letter in the word
//	if user's guess is in the word, replace blank with the letter