console.log('Скрипт працює2!');

document.getElementById("hello-button").addEventListener("click", function() {
    const userName = prompt("Введіть ваше ім'я:");
    const userAge = prompt("Введіть ваш вік:");
    const userHobby = prompt("Введіть ваше улюблене хобі:");

    alert("Привіт, " + userName + "! Тобі " + userAge + " років, і ти любиш " + userHobby + ". Чудово!");

    console.log("Новий користувач: " + userName + ", " + userAge + " років, хобі: " + userHobby);
});