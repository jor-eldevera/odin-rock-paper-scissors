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