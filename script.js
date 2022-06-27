'use strict';

// Elements Selection
// P - player
// P1
const scoreP1Element = document.querySelector('#score--0');
const currentScoreP1Element = document.querySelector('#current--0');
// P2
const scoreP2Element = document.getElementById('score--1');
const currentScoreP2Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const hiddenDiceElement = document.querySelector('.hidden');

//Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Game initial conditions
scoreP1Element.textContent = 0;
scoreP2Element.textContent = 0;
diceElement.style.display = 'none';
let currentScore = 0;

// Roll Dice


const RollDice = function () {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    diceElement.style.display = 'block';
    diceElement.src = `dice${diceNum}.png`;

    if (diceNum !== 1) {
        currentScore += diceNum;
        currentScoreP1Element.textContent = currentScore;
    }else {
        currentScore = 0;

    }

};

btnRoll.addEventListener(
    'click',
    RollDice
);

