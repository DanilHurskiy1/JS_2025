// Завдання 1: "Вгадай число"
function generateRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;

    return random;
}

let attempts = [];

function askUser() {
    let userNumber;
    do {
        userNumber = prompt('Введіть число');
        if (isNaN(parseInt(userNumber))) {
            console.log('Введіть число!');
        }
    } while (isNaN(parseInt(userNumber)));
    attempts.push(userNumber);
    return parseInt(userNumber);
}

function consoleWhileLoop() {
    const randomNumber = generateRandomNumber(1, 100);
    console.log('Випадкове число: ' + randomNumber);
    let guess;
    do {
        guess = askUser();
        if (guess > randomNumber) {
            console.log("Загадане число менше");
        } else if (guess < randomNumber) {
            console.log("Загадане число більше");
        }
    } while (guess !== randomNumber)
    console.log("Вітаю! Ви вгадали число!");
    console.log('Кількість попиток: ' + attempts.length);
    console.log("Ваші попитки: " + attempts.join(', '));
}

document.getElementById('startGameButton').addEventListener('click', function() {
    attempts = [];
    consoleWhileLoop();
});