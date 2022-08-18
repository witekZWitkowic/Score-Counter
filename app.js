const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const reset = document.querySelector('#reset');
const pOneScore = document.querySelector('#pOneScore');
const pTwoScore = document.querySelector('#pTwoScore');
const playTo = document.querySelector("#playTo");

let maxScoreValue = 4;

playTo.addEventListener('change', function(){
   maxScoreValue = parseInt(this.value);
   resetGame();
})

function winner(firstScore, secondScore, firstScoreOnPage, secondScoreOnPage, playerOne, playerTwo) {
    if (firstScoreOnPage === maxScoreValue) {
        playerOne.disabled = true;
        playerTwo.disabled = true;
        playerOne.style.backgroundColor = "#00774455"
        playerTwo.style.backgroundColor = '#0e5e9a55'
        firstScore.style.color = "green";
        secondScore.style.color = "red";
    } else if (secondScoreOnPage === maxScoreValue){
        playerOne.disabled = true;
        playerTwo.disabled = true;
        playerOne.style.backgroundColor = "#00774455"
        playerTwo.style.backgroundColor = '#0e5e9a55'
        firstScore.style.color = "red";
        secondScore.style.color = "green";
    }
}
let pOneScoreOnPage = 0;
let pTwoScoreOnPage = 0;
playerOne.addEventListener('click', () => {
    pOneScoreOnPage += 1;
    pOneScore.innerText = pOneScoreOnPage;
    winner(pOneScore, pTwoScore, pOneScoreOnPage, pTwoScoreOnPage, playerOne, playerTwo);
})
playerTwo.addEventListener('click', () => {
    pTwoScoreOnPage += 1;
    pTwoScore.innerText = pTwoScoreOnPage;
    winner(pOneScore, pTwoScore, pOneScoreOnPage, pTwoScoreOnPage, playerOne, playerTwo);
})
reset.addEventListener('click', resetGame);

function resetGame() {
    pTwoScoreOnPage = 0;
    pOneScoreOnPage = 0;
    pTwoScore.innerText = 0;
    pOneScore.innerText = 0;
    pOneScore.style.color = "black";
    pTwoScore.style.color = "black";
    playerOne.disabled = false;
    playerTwo.disabled = false;
    playerOne.style.backgroundColor = "#00774499"
    playerTwo.style.backgroundColor = '#0e5e9a99'
}

