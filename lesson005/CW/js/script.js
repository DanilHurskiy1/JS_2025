function printMessage(message, secondMessage = "gfgf") {
   // alert("Ведено повідомлення " + message + ", друге повідомлення " + secondMessage);
    if (typeof secondMessage === "undefined") {
        alert("Ведено повідомлення " + message);
    } else {
        alert("Ведено повідомлення " + message + ", друге повідомлення " + secondMessage);
    }
}

const userAlex = {
    name: "Alex",
    age: 25,
    email: "danjndij@gmail.com"
}

const userPavlik = {
    name: "Pavlik",
    age: 45,
    email: "eqwdrrw@gmail.com"
}

function getUserDetails(user) {
    if (typeof user !== "object") {
        return "Ви ввели не об'єкт!";
    }
    const details = "Користувач: " + user.name + ", вік: " + user.age + ", email: " + user.email
    return details;
}


console.log(getUserDetails());
console.log(getUserDetails(userPavlik));


// printUser(userAlex);

// printMessage("Привіт, JavaScript!", "Я вивчаю JavaScript!");