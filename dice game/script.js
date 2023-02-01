// // scores
// let currentScore1 = 0;
// let currentScore2 = 0;

// let score1 = 0;
// let score2 = 0;

// let activePlayer = 0;

// const btnRoll = document.querySelector(".btn--roll");
// const btnNew = document.querySelector(".btn--new");
// const btnHold = document.querySelector(".btn--hold");
// const current1 = document.querySelector("#current--0");
// const diceImg = document.querySelector(".dice");
// const score = document.querySelector("#score--0");

// // img

// dice.style.display = "none";

// btnRoll.addEventListener("click", () => {
//   dice.style.display = "block";
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
//   dice.src = `./dice-${randomNumber}.png`;
//   currentScore1 += randomNumber;
//   current1.textContent = currentScore1;
// });

// btnHold.addEventListener("click", () => {
//   score1 += currentScore1;
//   score.textContent = score1;
//   currentScore1 = 0;
//   current1.textContent = currentScore1;
// });

// function SwitchPlayer() {
//   let activePlayer = 1;
//   document.querySelector(`.player--${activePlayer}`);
// }

//Buttons
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const current1 = document.querySelector("#current--0");

// Dice img
const diceImg = document.querySelector(".dice");
diceImg.style.display = "none";

// Veriables
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const SwitchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";

    const random = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `./dice-${random}.png`;
    currentScore += random;

    if (random !== 1) {
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      SwitchPlayer();
    }
  }
});

// hold
btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      gameOver = false;
    } else {
      SwitchPlayer();
    }
  }
});

// New btn

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add ("player--active");
});
