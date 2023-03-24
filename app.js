let workTime = 2;
let shortBreak = 5;
let longBreak = 15;
let seconds = 60;

let startButton = document.querySelector('#start-button');
let timer = document.querySelector('.timer');

// Esta função é responsável pela formatação dos minutos e segundos para garantir
// que quando chegue em um número menor que 10 não apareça apenas um digito na tela no mostrador
const formateChars = (char) => `${char > 9 ? char : '0' + char}`;
const checkIsFinished = (minutes, seconds, intervalId) => {
    if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
    }
};

startButton.addEventListener('click', () => {
    timer.innerHTML = `${formateChars(workTime)}:00`
    workTime -= 1

    const id = setInterval(function () {
        seconds -= 1
        timer.innerHTML = `${formateChars(workTime)}:${formateChars(seconds)}`
        if (seconds === 0) {
            checkIsFinished(workTime, seconds, id)
            workTime -= 1
            seconds = 60
        }
    }, 1000)
});
