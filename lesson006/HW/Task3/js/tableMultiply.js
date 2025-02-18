function tableMultiply() {
    console.clear();
    const userNumber = prompt('Введіть число');
    if (isNaN(parseInt(userNumber))) {
        console.log('Введіть число!');
        return tableMultiply();
    } else {
        console.clear();
        number = parseInt(userNumber);
        console.log(`Таблиця множення на ${number}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} * ${i} = ${number * i}`);
        }
    }
}

document.getElementById('startMultiply').addEventListener('click', tableMultiply);
