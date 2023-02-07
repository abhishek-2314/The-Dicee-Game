// generating random number for dice 1 between 1 to 6
var randomNo1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "dice" + randomNo1 + ".png";    // dice...png
var randomDiceSource1 = "images/" + randomDiceImage1;  // images/dice...png

var image1 = document.querySelectorAll("img")[0];  // selecting first image
image1.setAttribute("src", randomDiceSource1);     // setting its attribute


var randomNo2 = Math.floor(Math.random()*6) + 1;
var randomDiceImage2 = "dice" + randomNo2 + ".png";
var randomDiceSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);


if(randomNo1 > randomNo2)
    document.querySelector("h1").innerHTML = "🚩Player1 wins!";
else if(randomNo1 < randomNo2)
    document.querySelector("h1").innerHTML = "Player2 wins!🚩";
else
    document.querySelector("h1").innerHTML = "Draw!";