let gameSeq = [];
let userSeq = [];
let scoreArr = [];

let started = false;

let level = 0;



let h2 = document.querySelector('h2');

let h3 = document.querySelector('h3');

let btns = document.querySelectorAll('.btn');
     



document.addEventListener('keypress',function () {
    if(started === false){
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(() => {
    btn.classList.remove('flash');
    }, 300);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(() => {
    btn.classList.remove('userflash');
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randBtn = btns[randomIndex];
    gameSeq.push(randomIndex);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
        setTimeout(() => {
            levelUp();
        }, 1000);
        }
        
    }
    else{
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b> <br> Press any key to start`;
        highScore();
        reset();
    }
}

function btnPress(event) {
    let btn = this;
    let index = event.target.id;
    userSeq.push(index);
    userFlash(btn);

    checkAns(userSeq.length-1);
}

for (btn of btns) {
    btn.addEventListener('click', btnPress);
}


    

function highScore() {
    scoreArr.push(level);
    let highScore = scoreArr.reduce( (max,el) => {
        if(max<el){
            return el;
        }
        else{
            return max;
        }
})

        h3.innerText = `High Score : ${highScore}`;
}


function reset() {
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}





// let body = document.querySelector('body');
// body.addEventListener('keypress', function () {
//     let btns = document.querySelectorAll('.btn');
//     let randomIndex = Math.floor(Math.random()*4);
//     let bgcolor = btns[randomIndex].style.backgroundColor;

//     gameSequence.push(randomIndex);

//     btns[randomIndex].style.backgroundColor = 'white';
//     setTimeout(() => {
//         btns[randomIndex].style.backgroundColor = bgcolor;
//     }, 50);

//     let Level = document.querySelector('h2');
//     Level.innerText = 'Level 1'
// })
