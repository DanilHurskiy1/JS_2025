let history = [];

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Ділення на нуль неможливе';
    }
    return a / b;
}

function askUser() {
    console.clear();
    let num1 = prompt('Введіть перше число');
    let num2 = prompt('Введіть друге число');
    let operation = prompt('Введіть операцію (+, -, *, /)');

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Введіть коректні числа!');
        return;
    }

    let result;
    if (operation === '+') {
        result = add(num1, num2);
    } else if (operation === '-') {
        result = subtract(num1, num2);
    } else if (operation === '*') {
        result = multiply(num1, num2);
    } else if (operation === '/') {
        result = divide(num1, num2);
    } else {
        console.log('Невідома операція!');
        return;
    }

    const historyEntry = `${num1} ${operation} ${num2} = ${result}`;
    history.push(historyEntry);

    console.log('Історія операцій:');
    for (let entry of history) {
        console.log(entry);
    }
}

document.getElementById('startNewKalculytar').addEventListener('click', askUser);
