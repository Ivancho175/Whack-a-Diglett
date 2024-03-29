const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for use to use later
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result ++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        Swal.fire({
            icon: 'success',
            title: 'Game finished',
            text: 'Your final score is' + ' ' + result,
            allowOutsideClick: false,
            showConfirmButton: false,
            timer: 5000,
        })
        window.setTimeout(function() {
            location.reload();
        }, 5000)
    }
}
let countDownTimerId = setInterval(countDown, 1000)