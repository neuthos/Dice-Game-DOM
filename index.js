let dice1 = document.querySelector(".dice1").lastElementChild;
let dice2 = document.querySelector(".dice2").lastElementChild;
let header = document.querySelector(".container h1");
let random1 = Math.ceil(Math.random() * 6);
let random2 = Math.ceil(Math.random() * 6);

if (random1 === 1) {
  dice1.src = "./images/dice1.png";
} else if (random1 === 2) {
  dice1.src = "./images/dice2.png";
} else if (random1 === 3) {
  dice1.src = "./images/dice3.png";
} else if (random1 === 4) {
  dice1.src = "./images/dice4.png";
} else if (random1 === 5) {
  dice1.src = "./images/dice5.png";
} else if (random1 === 6) {
  dice1.src = "./images/dice6.png";
}

if (random2 === 1) {
  dice2.src = "./images/dice1.png";
} else if (random2 === 2) {
  dice2.src = "./images/dice2.png";
} else if (random2 === 3) {
  dice2.src = "./images/dice3.png";
} else if (random2 === 4) {
  dice2.src = "./images/dice4.png";
} else if (random2 === 5) {
  dice2.src = "./images/dice5.png";
} else if (random2 === 6) {
  dice2.src = "./images/dice6.png";
}

if (random1 > random2) {
  header.innerHTML = "🚩 Player 1 Win";
} else if (random2 > random1) {
  header.innerHTML = "Player 2 Win 🚩";
} else if (random2 === random1) {
  header.innerHTML = "Draw";
}
console.log(random1, random2);
