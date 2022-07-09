/**
 * Randomly generates a hand sign.
 * @returns {string} 'Rock', 'Paper', or 'Scissors'
 */
function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

/**
 * Given the player and computer's selections, determines who wins.
 * @param {string} playerSelection The player's selection
 * @param {string} computerSelection The computer's selection
 * @returns A string stating whether the player won or lost and how they won or lost.
 */
function playRound(playerSelection, computerSelection) {
    // Process playerSelection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    // Determine victor
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return 'You Lose! Paper beats Rock'
        } else if (computerSelection === 'Scissors') {
            return 'You Win! Rock beats Scissors'
        } else if (computerSelection === 'Rock') {
            return 'You Tie! Rock meets Rock'
        } else {
            console.error('Invalid computerSelection: ' + computerSelection);
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Paper') {
            return 'You Tie! Paper meets Paper'
        } else if (computerSelection === 'Scissors') {
            return 'You Lose! Scissors beats Paper'
        } else if (computerSelection === 'Rock') {
            return 'You Win! Paper beats Rock'
        } else {
            console.error('Invalid computerSelection: ' + computerSelection);
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return 'You Win! Scissors beats Paper'
        } else if (computerSelection === 'Scissors') {
            return 'You Tie! Scissors meets Scissors'
        } else if (computerSelection === 'Rock') {
            return 'You Lose! Rock beats Scissors'
        } else {
            console.error('Invalid computerSelection: ' + computerSelection);
        }
    } else {
        console.error('Invalid playerSelection: ' + playerSelection);
    }
}

/**
 * Plays a round of RPS then updates the score
 */
function game(e) {
    let fullResult = playRound(e.currentTarget.param, computerPlay());
    console.log(fullResult);
    let result = fullResult.charAt(4);
    if (result === 'W') {
        playerScore++;
        playerScorePara.textContent = playerScore;
    } else if (result === 'L') {
        computerScore++;
        computerScorePara.textContent = computerScore;
    } else if (result === 'T') {
        playerScore++;
        computerScore++;
        playerScorePara.textContent = playerScore;
        computerScorePara.textContent = computerScore;
    }

    checkScore();
}

let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', game);
rockBtn.param = 'Rock';

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', game);
paperBtn.param = 'Paper';

const scisBtn = document.querySelector('.scissors');
scisBtn.addEventListener('click', game);
scisBtn.param = 'Scissors';

const playerScorePara = document.querySelector('.playerScore');
const computerScorePara = document.querySelector('.computerScore');
const winnerText = document.querySelector('.winner');

function checkScore() {
    if (playerScore === 5) {
        winnerText.textContent = 'Player wins!';
    }
    if (computerScore === 5) {
        winnerText.textContent = 'Computer wins!';
    }
}