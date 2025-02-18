// loop - цикл

// game loop - игровой цикл

// for (начало; условие; шаг) {
// while (условие) {
// do { } while (условие);
// increment - увеличение
// decrement - уменьшение

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1;


// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);


// for (i = 1; i <=10; i++) {
//     for (j = 1; j <= 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + i * j);
//     }
// }


function consoleWhileLoop(iterator){
    const randomNumber = generateRandomNumber();
    console.log('Случайное число: ' + randomNumber);
    let guess;
    do {
        guess = askUser();
        console.log('Ваше число: ' + guess);
    } while (guess !== randomNumber)
    console.log('Поздравляем! Вы угадали!');
}

function askUser () {
    const userNumber = prompt('Введите число');
    return parseInt(userNumber);
}

function generateRandomNumber() {
    const min = 1;
    const max = 6;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}

consoleWhileLoop();