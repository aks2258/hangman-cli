var possibleWords = ["Fry", "Professor Farnsworth", "Leela", "Hermes", "Zoidberg", "Zap Brannigan", "Kiff", "Amy"];
var wordSelected = "";
var blanks = [];
var lettersWord = [];

function selectWord(){
	var x = Math.floor((Math.random() * possibleWords.length)+0);
	wordSelected = possibleWords[x];
	// console.log(wordSelected);
	lettersWord = wordSelected.split("");
	// console.log(lettersWord);

	for(var i = 0; i<lettersWord.length; i++){
		if(lettersWord[i]==" "){
			blanks.push(" ");
		}
		else{
			blanks.push("_");
		}
	}
	console.log(blanks);
}

selectWord();