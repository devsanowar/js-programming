let i = 1;
let numOfWon = 0;
let numOfLost = 0;

for(i; i <= 5; i++){
    let guessNumber = parseInt(prompt('Enter a guess number of 1 to 5 :'));
    let randomNum = Math.floor(Math.random() * 5 ) + 1;

    if(guessNumber === randomNum){
        console.log("You have won");
        numOfWon++;
    } else {
        console.log("You have lost. Random was " + randomNum);
        numOfLost++;
    }
}

document.writeln(`Total Number of won: ${numOfWon} <br/>`);
document.writeln(`Total Number of lost: ${numOfLost} <br/>`);
