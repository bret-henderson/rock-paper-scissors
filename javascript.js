function getComputerChoice() {
    let ranNum = Math.floor(Math.random()*3)
    if (ranNum == 0)
        return 'Rock'
    else if (ranNum == 1)
        return 'Paper'
    else
        return 'Scissors'
}


function getPlayerInput(e){
    console.log(e.target)
    let playerSelection = prompt('Please enter Rock, Paper, or Scissors:')
    if (playerSelection === ' ' || playerSelection === null) {
        alert('Canceled')
        return null
    }
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase()

    if (playerSelection == 'Rock' || playerSelection == 'Paper' || playerSelection == 'Scissors')
        return playerSelection
    else {
        alert('Not a valid selection')
        return playerSelection = getPlayerInput()
    }
        
}


function playRound(playerSelection, computerSelection = getComputerChoice()) {
    //playerSelection = playerSelection.target.textContent
    playerSelection = playerSelection.target.alt
// console.log(`computerSelection: ${computerSelection}`)
// console.log(`playerSelection: ${playerSelection}`)
// console.log(playerSelection.target.alt)
    if (playerSelection === 'Rock')
        if (computerSelection === 'Rock') {
            results.textContent = `${playerSelection} ties ${computerSelection}`
            updateScore('Tie')
        }
        else if (computerSelection === 'Paper') {
            results.textContent = `${playerSelection} loses to ${computerSelection}`
            updateScore('Lose')
        }
        else {
            results.textContent = `${playerSelection} beats ${computerSelection}`
            updateScore('Win')
        }
    else if (playerSelection === 'Paper')
        if (computerSelection === 'Rock') {
            results.textContent = `${playerSelection} beats ${computerSelection}`
            updateScore('Win')
        }
        else if (computerSelection === 'Paper') {
            results.textContent = `${playerSelection} ties ${computerSelection}`
            updateScore('Tie')
        }
        else {
            results.textContent = `${playerSelection} loses to ${computerSelection}`
            updateScore('Lose')
        }
    else if (playerSelection === 'Scissors')
        if (computerSelection === 'Rock') {
            results.textContent = `${playerSelection} loses to ${computerSelection}`
            updateScore('Lose')
        }
        else if (computerSelection === 'Paper') {
            results.textContent = `${playerSelection} beats ${computerSelection}`
            updateScore('Win')
        }
        else {
            results.textContent = `${playerSelection} ties ${computerSelection}`
            updateScore('Tie')
        }
}


function updateScore(roundResult){

        if (roundResult == 'Lose') {
            computerScore++
            round++
            displayComputerScore.textContent = `Computer: ${computerScore}`
            console.log(`Round ${round}: ${roundResult}  |  Computer: ${computerScore}, Player: ${playerScore}`)
        }
        else if (roundResult == 'Win') {
            playerScore++
            round++
            displayPlayerScore.textContent = `Player: ${playerScore}`

            console.log(`Round ${round}: ${roundResult}  |  Computer: ${computerScore}, Player: ${playerScore}`)
        }
        else {
            round++
            console.log(`Round ${round}: ${roundResult}  |  Computer: ${computerScore}, Player: ${playerScore}`)
        }
    score.textContent = `Round ${round}: ${roundResult}`
    //console.log('')
    if (computerScore >= 3) {
        console.log(`You Lose!  |  Final Score -> Computer: ${computerScore}, Player: ${playerScore}`)
        score.textContent = `You lose after ${round} rounds!`
        endGame()
    }
    else if (playerScore >= 3) {
        console.log(`You win!  |  Final Score -> Computer: ${computerScore}, Player: ${playerScore}`)
        score.textContent = `You win after ${round} rounds!`
        endGame()
    }
}

let computerScore = 0;
let playerScore = 0;
let round = 0;

function endGame() {
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again';
    body.appendChild(resetButton);
    resetButton.addEventListener('click', resetScore);
    imgs.forEach(img => img.removeEventListener('click', playRound));
}

function resetScore() {
    window.location.reload();
    computerScore = 0;
    displayComputerScore.textContent = `Computer: ${computerScore}`;

    playerScore = 0;
    displayPlayerScore.textContent = `Player: ${playerScore}`;

    round = 0;
}

function animate () {
    this.classList.add('clicked');
}

function removeTransition() {
    //if (e.propertyName !== 'transform') return;
    if (this.classList.contains('clicked'))
    this.classList.remove('clicked'); //this = key | key.addEventListener was called to get here so this = key
}

const imgs = document.querySelectorAll('img');
imgs.forEach(img => img.addEventListener('click', playRound));
imgs.forEach(img => img.addEventListener('click', animate));
imgs.forEach(img => img.addEventListener('transitionend', removeTransition));


const results = document.querySelector('#results');
const score = document.querySelector('#score');

const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');

const body = document.querySelector('body');

// results.textContent = 'yeehaw'
//game()