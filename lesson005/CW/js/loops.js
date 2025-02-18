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

function printIterator(iterator) {
    if (iterator % 2 === 0) {
        console.log("Здоров " + iterator)
    }
}

for (let i = 1; i <= 100; i++) {
    if (i === 10){
        continue;
    }
    if (i === 96){
        break;
    }
    printIterator(i);
}