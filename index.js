var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomDice1);


if (randomDice > randomDice1){
    document.querySelector("h1").innerHTML = "🚩Player 1 win."
    document.querySelectorAll("p")[0].innerHTML = "😊Player 1"
    document.querySelectorAll("p")[1].innerHTML = "😞Player 2"
}
else if (randomDice < randomDice1){
    document.querySelector("h1").innerHTML = "🚩Player 2 win."
    document.querySelectorAll("p")[1].innerHTML = "😊Player 2"
    document.querySelectorAll("p")[0].innerHTML = "😞Player 1"
}
else{
    document.querySelector("h1").innerHTML = "Draw."
}