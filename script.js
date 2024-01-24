const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const wintext = document.getElementById('win-text');


document.addEventListener("DOMContentLoaded", function () {
    const options = document.getElementById("options");
    const buttons = options.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const playerChoice = this.classList[0]; // Rock, Paper, or Scissors
            const computerChoice = getComputerChoice();
            const result = determineWinner(playerChoice, computerChoice);

            wintext.innerHTML=`Player: ${playerChoice}\nComputer: ${computerChoice}\nResult: ${result}`;
        });
    });

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            return "Player wins!";
        } else {
            return "Computer wins!";
        }
    }
});
