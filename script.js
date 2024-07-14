function getComputerChoice() {
    let options = ["Rock","Paper","Scissors"];
    return options[(Math.floor(Math.random() * options.length))]
}

function round(playerSelection, computerSelection) {
    
    pl = playerSelection.toLowerCase();
    comp = computerSelection.toLowerCase();

    const pld = document.getElementById("pl");
    const pcd = document.getElementById("pc");

    const result = document.getElementById("result");

    if(pl == comp){
        result.innerHTML = "It's a tie!Both sides chose "+pl;
    } 
    else if ((pl == "rock" && comp == "scissors") || (pl == "paper" && comp == "rock") || (pl == "scissors" && comp == "paper")) {
        //
        var number = pld.innerHTML;
        number++;
        pld.innerHTML = number;
        result.innerHTML = "You won! "+pl+" beats "+comp;
        end();
    }
    else {
        //
        var number = pcd.innerHTML;
        number++;
        pcd.innerHTML = number;
        result.innerHTML = "You lost! "+comp+" beats "+pl;
        end();
    }
}

const btnrock = document.querySelector("#b1");
const btnpaper = document.querySelector("#b2");
const btnscis = document.querySelector("#b3");

btnrock.onclick = () => round("Rock", getComputerChoice());
btnpaper.onclick = () => round("Paper", getComputerChoice());
btnscis.onclick = () => round("Scissors", getComputerChoice());

function end(){
    const play = document.getElementById("pl");
    const comp = document.getElementById("pc");

    playerScore = document.getElementById("pl").innerHTML;
    compScore = document.getElementById("pc").innerHTML;
    final = document.getElementById("final");

    if(playerScore == 3){
        console.log("Player wins");
        final.innerHTML = "You won the game, with a score of "+playerScore+"-"+compScore;
        play.textContent = 0;
        comp.textContent = 0;        
    }
    if(compScore == 3){
        console.log("Computer wins");
        final.innerHTML = "You lost the gane, with a score of "+playerScore+"-"+compScore;
        play.textContent = 0;
        comp.textContent = 0;
    }
    console.log(playerScore,compScore);
}
