const resultMessage = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const actionButtons = document.querySelectorAll('button');
const gameScores = [0, 0, 0]; 
const choices = ['Rock', 'Paper', 'Scissors'];

actionButtons.forEach(button => {
    button.addEventListener('click', startGame);
});

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function startGame(e) {
    const userChoice = e.target.getAttribute('data-choice');
    const computerSelection = computerChoice();

    const gameResult = determineWinner(userChoice, computerSelection);

    if (gameResult === 'Player wins!') {
        gameScores[0]++;
    } else if (gameResult === 'Computer wins!') {
        gameScores[1]++;
    } else if (gameResult === 'Draw!') {
        gameScores[2]++;
    }

    document.getElementById('player-score').textContent = gameScores[0];
    document.getElementById('computer-score').textContent = gameScores[1];
    document.getElementById('draw-score').textContent = gameScores[2];

    displayResult(`Player: <strong>${userChoice}</strong> Computer: <strong>${computerSelection}</strong><br>${gameResult}`);
}

function displayResult(result) {
    resultMessage.innerHTML = result;
}

function determineWinner(userChoice, computerSelection) {
    if (userChoice === computerSelection) {
        return 'Draw!';
    }

    if (
        (userChoice === 'Rock' && computerSelection === 'Scissors') ||
        (userChoice === 'Paper' && computerSelection === 'Rock') ||
        (userChoice === 'Scissors' && computerSelection === 'Paper')
    ) {
        return 'Player wins!';
    }

    return 'Computer wins!';
}
