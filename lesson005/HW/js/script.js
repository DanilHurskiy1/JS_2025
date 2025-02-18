// Калькулятор залишку від ділення
function getRemainder(a, b) {
    return a % b;
}

console.log(getRemainder(10, 3));
console.log(getRemainder(15, 5));
///////////////////////////////////////////////////////////
// Перевірка на число
function isNumber(value) {
    if (isNaN(value)) {
        parseInt(value);
        if (!isNaN(value)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

console.log(isNumber(111));
///////////////////////////////////////////////////////////
// Парне чи непарне
function isEven(num) {
    if (num % 2 === 0) {
        return "парне";
    } else {
        return "непарне";
    }
}

console.log(isEven(10));
///////////////////////////////////////////////////////////
// Вивід чисел від 1 до N
masiv = [];
function printNumbers(n) {
    for (i=1; i<=n; i++){
        masiv.push(i);
    }
    console.log(masiv.join(', '));
}

printNumbers(5);
///////////////////////////////////////////////////////////