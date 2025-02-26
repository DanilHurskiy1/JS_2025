// let, const, var
// let - змінна, яку можна змінювати
// const - змінна, яку не можна змінювати
// var - змінна, яку можна змінювати, але вона вже застаріла

// const age = prompt('Скільки вам років?');
// const ageNumber = parseInt(age);
//
// switch (ageNumber) {
//     case 16:
//         console.log('16 років');
//         break;
//     case 17:
//         console.log('17 років');
//         break;
//     case 18:
//         console.log('18 років');
//         break;
//     default:
//         console.log('Не відомо скільки вам років');
//         break;
// }

const yourName = ["Петро", "Петрович"]
const message = `Ваше імя, ${yourName}!`;
const obj = {
    name: 'Петро',
    age: 20
}

console.log(`${obj.name}`);