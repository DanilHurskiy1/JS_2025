// console.log("Hello World");
/**
 * String - " ", ' ', ` `
 * Number - integer (1, 2, 3, 4, 5, 6, 7, 8, 9, 0), float (1.1, 2.2, 3.3, 4.4, 5.5)
 * BigInt - 9007199254740991n
 * Boolean - true, false
* Null - null
* Undefined - undefined
* Symbol - Symbol()
* Object - {}
*
* Array - []
* Function - function(){}
*
* typeof - operator
*
 * = - оператор присвоєння
 * == - оператор порівняння
 * === - оператор порівняння
 *
 * + - оператор додавання
 * - - оператор віднімання
 * * - оператор множення
 * / - оператор ділення
 * % - оператор залишку
 * ** - оператор піднесення до степеня
 *
 * ++ - оператор інкременту
 * -- - оператор декременту
 *
 * && - логічний оператор "і"
 * || - логічний оператор "або"
 * ! - логічний оператор "не"
 *
 * > - оператор більше
 * < - оператор менше
 * >= - оператор більше або дорівнює
 * <= - оператор менше або дорівнює
 *
 * ? - умовний оператор
 *
 * typeof - оператор
 *
 * // - однорядковий коментар
 *  /* *' - багаторядковий коментар

**/

const user1 = {
    name: "John",
    surname: "Doe",
    age: 25,
    isMarried: false,
    sayHello: function(){
        console.log("Zdorov, I am " + this.name + " " + this.surname);
    }
}


const age = prompt("Скільки тобі годіків");
const ageNumber = parseInt(age);

const isAdult = ageNumber > 18;

console.log("age: "+ age + " type: " + typeof age);
console.log("ageNumber: "+ ageNumber + " type: " + typeof ageNumber);


if (isNaN(ageNumber)) {
   // console.log("Ви ввели не число");
    document.getElementById("da").innerText = "Ви ввели не число";
}else if (ageNumber === 18){
  //  console.log("тобі 18 років");
    document.getElementById("da").innerText = "Тобі 18 років";
} else if (isAdult){
 //   console.log("пенсія");
    document.getElementById("da").innerText = "Пенсія";
}else {
    // console.log("малолетка");
    document.getElementById("da").innerText = "Малолетка";
}



// if(age < 18){
//     console.log("You are not adult");
// }else {
//     console.log("You are adult");
// }