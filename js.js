// Tic-Tac-Toe
let boxes = document.querySelectorAll(".box");
let button = document.querySelector("#resetB");

let turn0 = true;
let gameOver = false;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (gameOver || box.innerText !== "") return;

        console.log("box was clicked");

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }

        box.disabled = true;

        if (checkWinner()) {
            gameOver = true;
            console.log("Game Over");
        }
    });
});

const checkWinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("winner", pos1val);
            msg.innerText = `Player ${pos1val} wins!`;
            msgContainer.style.display = "block";
            return true;
        }
    }
    return false;
};

button.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    gameOver = false;
    console.log("Game Reset");
});
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-can");
button.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turn0 = true;
    gameOver = false;
    msgContainer.style.display = "none"; 
    msg.innerText = ""; 
    console.log("Game Reset");
});
