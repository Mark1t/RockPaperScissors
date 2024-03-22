function getComputerChoice() {
    let options = ["Rock","Paper","Scissors"];
    return options[(Math.floor(Math.random() * options.length))]
}

function round(playerSelection, computerSelection) {
    pl = playerSelection.toLowerCase();
    comp = computerSelection.toLowerCase();
    
    if(pl == comp) return ("It's a tie!Both sides chose "+pl)
    else if ((pl == "rock" && comp == "scissors") || (pl == "paper" && comp == "rock") || (pl == "scissors" && comp == "paper")) {
        return ("You won! "+pl+" beats "+comp)
    }
    else {
        return ("You lost! "+comp+" beats "+pl)
    }
}

function playGame() {
    for(let i=0;i<5;i++) {
        let choice = prompt("What do you pick?");
        console.log(round(choice, getComputerChoice()));
    }
}

playGame();