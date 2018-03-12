
//This is setting 
var yourScore = document.getElementById('yourScore');
yourScore.innerHTML = 0;

var targetScore = document.getElementById('targetScore');

function addToScore(val) {
  var numberToAdd = parseInt(val);
  var currentScore = parseInt(yourScore.innerHTML);
  yourScore.innerHTML = numberToAdd + currentScore;
}

var red = document.getElementById("red");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

red.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

blue.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

yellow.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  addToScore(this.value);
  checkPlayerScore();
});

//I still have the following pieces to figure out:
    //get random number between 19 and 120
    //display number on screen
    //assign random number values between 1 and 12 for each crystal/box as opposed to 5,10,15, and 20 as they are currently set
    //create div's for wins and loses
    //have wins and loses display in divs
    

