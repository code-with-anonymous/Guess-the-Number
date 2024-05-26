'use strict';
/*
console.log(document.querySelector('.message').contenttext

document.querySelector('.message').textContent = 'Correct Answer!'
document.querySelector('.number').textContent= 13
document.querySelector('.score').textContent= 10


console.log(document.querySelector('.guess').value= 12

const sceret = Math.trunc(Math.random()*20)
document.querySelector('.sceret').textContent= sceret;
*/
let number = Math.trunc(Math.random() * 20 + 1)
let score = 20
let highscore = 0;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // when there is no input
    if (!guess || guess<0) {
        document.querySelector('.message').textContent = '⛔ Invalid Number!'
        console.log(guess, typeof guess)
    }

    // when there is a correct answer
    else if (guess === number) {
        document.querySelector('.message').textContent = ' 😎 Correct Answer!'
        document.querySelector('body').style.backgroundColor = ' #60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;
        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }
    // When Answer is Wrong

    else if (guess !== number) {
        if (score > 1) {
            score--
            document.querySelector('.message').textContent = guess > number ? '📈 Too High!' : '📈 Too low!'
            document.querySelector('.score').textContent = score;
        }

        else {
            document.querySelector('.message').textContent = '😪 You lost The Game!'
            document.querySelector('.score').textContent = 0;
        }

    }


    // }

    // // when it is too low
    // else if (guess < number) {
    //     if (score > 1) {
    //         score--
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '📈 Too low!'
    //     }

    //     // when it is too High
    //     else {
    //         document.querySelector('.message').textContent = '😪 You lost The Game!'
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = 'red'
    //     }


    // }

    // else if (guess > number) {

    //     if (score > 1) {
    //         score--
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('.message').textContent = '📈 Too High!'
    //     }

    //     else {
    //         document.querySelector('.message').textContent = '😪 You lost The Game!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
})


document.querySelector('.again').addEventListener('click',
    function () {
        score = 20
        number = Math.trunc(Math.random() * 20 + 1)
        document.querySelector('.message').textContent = 'Start guessing...'
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = ' #222';
        document.querySelector('.number').style.width = '15rem'
    })














