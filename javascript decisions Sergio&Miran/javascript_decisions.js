
// Purpose:What number's bigger?
//
// Signature:
//Write a function named greaterNum that:
//takes 2 arguments, both numbers.
//returns whichever number is the greater (higher) number.
//Test the function 2 times with different number pairs

// Examples:
// if a > b return >

function inputNumber(){
  var a=prompt("pick a number:");
  var b=prompt("pick another number:");
  if (a>b) {
    alert(a);
  }else {
    alert(b);
  }
}

// Purpose:The World Translator
// Signature:
//Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "es", "ge", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning //English.
//Test the function for each of the supported languages
// Examples:
// Hallo Welt
// Hola mundo
// Hello World

function helloWorld(){
  var language=prompt("Say hello in what language?")
  if(language==="german"){
    alert("Hallo Welt")
  } else if(language==="spanish"){
    alert("Hola mundo")
  } else{
    alert("Hello World")
  }
}

// Purpose:The Grade Assigner
// Signature: Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.
//Examples:
//

function assignGrade(){
  var grade=prompt("what is grade?")
  if(grade>=90){
    alert("You've earned an A!!!")
  }
  else if(grade>=80){
    alert("You got a B")
  }
  else if(grade>=70){
    alert("you have a C :(")
  }
  else if(grade>=60){
    alert("you have a D :(")
  }
  else{
    alert("you have a F :'(")
  }
}

// Purpose:The Pluralizer
// Signature:Write a function named pluralize that:
// takes 2 arguments, a noun and a number. returns the number and pluralized form, like "5 cats" or "1 dog".
// Test the function for all special nouns and one regular.
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".
//Examples:
//
//

function pluralize(){
  var pet=prompt("Name a pet?")
  var number=parseInt(prompt("How many?"))
  if(number>1){
    alert(number+" "+ pet +"s")
  }
  else{
    alert(number +" " + pet)
  }
}

// Purose:Javascript Hi/Lo Game
//
//
//Signature:
//Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
//If the user's guess is too high or too low, the computer notifies them of that
//Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
//Examples:
//
//
// random number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(0);
  max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// your input
function yourGuess(){
  var yourGuess=parseInt(prompt("pick a number between 0-100:"))
  var number=getRandomIntInclusive()
  console.log(number)
  // if statements
  while(number !== yourGuess) {
    if(number > yourGuess){
      alert ("Your are too low!!!")
      yourGuess=prompt("pick another number")
    }
    else(number < yourGuess){
      alert ("You are too high!!!")
      yourGuess=prompt("pick another number")
    }
  }
  alert ("Correct, You are the winner!!!")}
}
