'use strict';

// Elements Selection
// P - player
// P1
const scoreP1Element = document.querySelector('#score--0');
const currentScoreP1Element = document.querySelector('#current--0');
// P2
const scoreP2Element = document.querySelector('#score--1');
const currentScoreP2Element = document.querySelector('#current--1');

const diceElement = document.querySelector('.dice');
const hiddenDiceElement = document.querySelector('.hidden');
const player1Element = document.querySelector('.player--0');
const player2Element = document.querySelector('.player--1');


//Buttons
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Game initial conditions
let totalScores, currentScore, activePlayer, isPlaying;
function initGame () {
    totalScores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isPlaying = true;
    scoreP1Element.textContent = 0;
    currentScoreP1Element.textContent = 0
    scoreP2Element.textContent = 0;
    currentScoreP2Element.textContent = 0
    player1Element.classList.remove('player--winner');
    player2Element.classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.remove('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');
    diceElement.style.display = 'none';

}

initGame();

// Roll Dice

function switchActivePlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1Element.classList.toggle('player--active');
    player2Element.classList.toggle('player--active');
}

const RollDice = function () {
    if (isPlaying){
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        diceElement.style.display = 'block';
        diceElement.src = `dice${diceNum}.png`;

        if (diceNum !== 1) {
            currentScore += diceNum;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        }else {
            switchActivePlayer()
        }
    }
};

const holdScore = function (){
    if (currentScore !== 0) {
        if (isPlaying) {
            totalScores[activePlayer] += currentScore;
            document.querySelector(`#score--${activePlayer}`)
                .textContent = totalScores[activePlayer];
            if (totalScores[activePlayer] >= 20) {
                isPlaying = false;
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
            }else{
                switchActivePlayer();
            }
        }
    }

};


btnRoll.addEventListener(
    'click',
    RollDice
);

btnHold.addEventListener(
  'click',
  holdScore,
);

btnNew.addEventListener(
    'click',
    initGame,
)

