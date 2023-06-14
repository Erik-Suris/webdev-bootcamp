var randNumber1 = Math.floor(Math.random()*6)+1 //1-6
var randDice1 = "./images/dice" + randNumber1 + ".png"
var randNumber2 = Math.floor(Math.random()*6)+1 //1-6
var randDice2 = "./images/dice" + randNumber2 + ".png"
var player1 = document.querySelector(".img1")
var player2 = document.querySelector(".img2")
player1.setAttribute("src", randDice1)
player2.setAttribute("src", randDice2)

var refresh = document.querySelector("h1")
if (randNumber1>randNumber2) {
    refresh.innerHTML = "Player 1 Wins!"
} else if (randNumber1<randNumber2) {
    refresh.innerHTML = "Player 2 Wins!"
} else {
    refresh.innerHTML = "Draw!"
}