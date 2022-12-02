function getComputerChoice() {
    let ranNum = Math.floor(Math.random()*3)
    if (ranNum == 0)
        return 'Rock'
    else if (ranNum == 1)
        return 'Paper'
    else
        return 'Scissors'
}


function playerInput(){
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
        return playerSelection = playerInput()
    }
        
}


function playRound(playerSelection, computerSelection) {
    // console.log(`computerSelection: ${computerSelection}`)
    // console.log(`playerSelection: ${playerSelection}`)
    if (playerSelection === 'Rock')
        if (computerSelection === 'Rock')
            return `Tie! ${computerSelection} ties ${playerSelection}`
        else if (computerSelection === 'Paper')
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        else
            return `You Win! ${playerSelection} beats ${computerSelection}`
    else if (playerSelection === 'Paper')
        if (computerSelection === 'Rock')
            return `You Win! ${playerSelection} beats ${computerSelection}`
        else if (computerSelection === 'Paper')
            return `Tie! ${computerSelection} ties ${playerSelection}`
        else
            return `You Lose! ${computerSelection} beats ${playerSelection}`
    else if (playerSelection === 'Scissors')
        if (computerSelection === 'Rock')
            return `You Lose! ${computerSelection} beats ${playerSelection}`
        else if (computerSelection === 'Paper')
            return `You Win! ${playerSelection} beats ${computerSelection}`
        else
            return `Tie! ${computerSelection} ties ${playerSelection}`
}


function game(){
    let computerScore = 0
    let playerScore = 0
    
    for (let i = 0; i < 5; i++) {
        let playerInputSafe = playerInput()
        if (playerInputSafe === null) {
            console.log('')
            console.log("Game canceled.")
            return null
        }
        let result = playRound(playerInputSafe, getComputerChoice())
        if (result.includes('Lose')) {
            computerScore++
            console.log(`Round ${i+1}: ${result}  |  Computer: ${computerScore}, Player: ${playerScore}`)
        }
        else if (result.includes('Win')) {
            playerScore++
            console.log(`Round ${i+1}: ${result}  |  Computer: ${computerScore}, Player: ${playerScore}`)
        }
        else
            console.log(`Round ${i+1}: ${result}  |  Computer: ${computerScore}, Player: ${playerScore}`)
    }

    console.log('')
    if (computerScore > playerScore)
        console.log(`You Lose!  |  Final Score -> Computer: ${computerScore}, Player: ${playerScore}`)
    else if (playerScore > computerScore)
        console.log(`You win!  |  Final Score -> Computer: ${computerScore}, Player: ${playerScore}`)
    else
        console.log(`Tie!  |  Final Score -> Computer: ${computerScore}, Player: ${playerScore}`)
}

game()