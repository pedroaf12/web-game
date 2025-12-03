const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const reset = document.querySelector('.reset')

let points = 0;
let canCount = true;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}
function addPoints() {
    points += 1;
    attScore();
}

function attScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent =  "Pontos: " + points
}

function characterDie() {
            const buttomReset = document.getElementById("reset")
            buttomReset.style.display = "block"
        }

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition < 0 && canCount) {
        addPoints();
        canCount = false;
    }

    if (pipePosition > 120) {
        canCount = true;
    }

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src ="images/mario-jump-images/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        characterDie()
        
        clearInterval(loop)
    }

}, 10)



function reiniciarGame() {

    location.reload();
}



document.addEventListener("keydown", jump)

