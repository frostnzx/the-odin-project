const gameBoard = (function() {
    return ['-','-','-','-','-','-','-','-','-','-'];
})();
const gameBoardContainer = document.querySelector(".game-board-container");
let round = 0 ; 

function init() {
    let i = 1 ; 
    while(i <= 9) {
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.setAttribute("data-value" , i);
        newCell.addEventListener("click" , (e) => {
            const value = e.target.getAttribute("data-value");
            registerNewClick(value);
        });

        gameBoardContainer.appendChild(newCell);
        i++; 
    }
};

function updateScreen() {
    document.querySelectorAll(".cell").forEach((e) => {
        const i = e.getAttribute("data-value");
        if(gameBoard[i] != '-') {
            e.innerHTML = gameBoard[i] ; 
        } else e.innerHTML = " " ; 
    });
}
function registerNewClick(cellNumber) {
    round++;
    if(round%2 == 0) {
        gameBoard[cellNumber] = 'o' ; 
    } else gameBoard[cellNumber] = 'x' ; 
    updateScreen();
    checkGameEnding();
}

function checkGameEnding() {
    const gb = gameBoard ; 
    // if x won
    if((gb[1] == 'x' && gb[2] == 'x' && gb[3] == 'x') ||
       (gb[4] == 'x' && gb[5] == 'x' && gb[6] == 'x') ||
       (gb[7] == 'x' && gb[7] == 'x' && gb[8] == 'x') ||
       (gb[1] == 'x' && gb[4] == 'x' && gb[7] == 'x') ||
       (gb[2] == 'x' && gb[5] == 'x' && gb[8] == 'x') ||
       (gb[3] == 'x' && gb[6] == 'x' && gb[9] == 'x') ||
       (gb[1] == 'x' && gb[5] == 'x' && gb[9] == 'x') ||
       (gb[3] == 'x' && gb[5] == 'x' && gb[7] == 'x')
    ) {
        handleGameEnded('X');
        return; 
    }


    // if o won
    if((gb[1] == 'o' && gb[2] == 'o' && gb[3] == 'o') ||
       (gb[4] == 'o' && gb[5] == 'o' && gb[6] == 'o') ||
       (gb[7] == 'o' && gb[7] == 'o' && gb[8] == 'o') ||
       (gb[1] == 'o' && gb[4] == 'o' && gb[7] == 'o') ||
       (gb[2] == 'o' && gb[5] == 'o' && gb[8] == 'o') ||
       (gb[3] == 'o' && gb[6] == 'o' && gb[9] == 'o') ||
       (gb[1] == 'o' && gb[5] == 'o' && gb[9] == 'o') ||
       (gb[3] == 'o' && gb[5] == 'o' && gb[7] == 'o')
    ) {
        handleGameEnded('O');
        return;
    }

    // if draw
    let i = 1 , placedCount = 0 ; 
    while(i <= 9) {
        if(gb[i] != '-') {
            placedCount++;
        }
        i++;
    }
    if(placedCount == 9) {
        handleGameEnded('d');
    }
}

function handleGameEnded(winner) {
    const modalHeader = document.querySelector(".modal-header");
    const gameEndedModal = document.querySelector("[data-modal]");
    if(winner == 'd') {
        modalHeader.innerHTML = "The Game Has Ended In A Draw"
    } else modalHeader.innerHTML = winner + " Has Won The Game" ; 
    const restartButton = document.querySelector(".restartButton");
    const closeButton = document.querySelector(".closeButton");
    restartButton.addEventListener("click" , () => {
        resetGameBoard();
        gameEndedModal.close();
    });
    closeButton.addEventListener("click" , () => {
        gameEndedModal.close();
    });

    gameEndedModal.showModal();
}

function resetGameBoard() {
    let i = 1 ; 
    while(i <= 9) {
        gameBoard[i] = '-' ; 
        i++;
    }
    updateScreen();
}

init();
