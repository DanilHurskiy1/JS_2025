document.getElementById("enterClub").addEventListener("click", function () {
    const correctPassword = "js2025";
    const perevirkaPassword = prompt("Введіть пароль");

    if (perevirkaPassword === correctPassword) {
        const perevirkaAge = prompt("Введіть ваш вік");
        const perevirkaAgeNumber = parseInt(perevirkaAge);
        console.log("age: " + perevirkaAgeNumber + " type: " + typeof perevirkaAgeNumber);
        if (isNaN(perevirkaAgeNumber)) {
            alert("Ви ввели не число");
        } else if (perevirkaAgeNumber < 10) {
            alert("Ви ще маленький");
        } else if (10 <= perevirkaAgeNumber && perevirkaAgeNumber < 18) {
            alert("Є обмеження на вхід");
        } else if (perevirkaAgeNumber >= 18) {
            const perevirkaChlenClub = confirm("Ви є членом клубу?");
            if (perevirkaChlenClub) {
                alert("Вітаємо, ви у клубі");
                console.log("password: " + perevirkaPassword);
                console.log("age: " + perevirkaAgeNumber);
                console.log("member: " + perevirkaChlenClub);
            } else {
                alert("Давайте зареєструємо вас");
            }
        }
    } else if (perevirkaPassword === "") {
        alert("Пусто")
    } else {
        alert("Ви ввели неправильний пароль");
        return;
    }
});