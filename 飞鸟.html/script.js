const bird = document.getElementById('bird');
const gameContainer = document.getElementById('gameContainer');
let birdTop = 50;
let isGameOver = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        jump();
    }
});

function jump() {
    birdTop -= 60;
    bird.style.top = birdTop + 'px';
}

function gravity() {
    if (isGameOver) return;
    birdTop += 2;
    bird.style.top = birdTop + 'px';

    if (birdTop > gameContainer.clientHeight - bird.clientHeight || birdTop < 0) {
        gameOver();
    }

    requestAnimationFrame(gravity);
}

function gameOver() {
    isGameOver = true;
    alert('Game Over!');
    document.location.reload();
}

gravity();
