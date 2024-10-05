let music = new Audio("tic tac toe/music.mp3");
let audioTurn = new Audio("tic tac toe/ting.mp3");
let gameover = new Audio("tic tac toe/gameover.mp3");
let turn = "X";
let isgameover = false;

const changeTurn = () => {
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }
    return turn;

}

//function to check for a win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[1]].innerText === boxtexts[e[2]].innerText && boxtexts[e[1]].innerText !== '') {
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset
reset.addEventListener('click',()=>{
    boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0";
})