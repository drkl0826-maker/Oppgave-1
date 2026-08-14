/******************************************************************************
OPPGAVE 1
******************************************************************************/

// Løs denne oppgaven i index.html


/******************************************************************************
OPPGAVE 2
******************************************************************************/

const myName = "Daria";
let myAge = 22;
const likesProgramming = true;
let hobbies = ["programmering", "kunstløp", "musikk"];

console.log(myName);
console.log(myAge);
console.log(likesProgramming);
console.log(hobbies);


/******************************************************************************
OPPGAVE 3
******************************************************************************/

let number1 = 10;
let number2 = 5;

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);

number1++;
console.log(number1);

number1--;
console.log(number1);

number1 += 5;
console.log(number1);

number1 -= 3;
console.log(number1);


/******************************************************************************
OPPGAVE 4
******************************************************************************/

let userName = "Eshley";
let userAge = 22;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
    userIsLoggedIn = true;
    goToPage = "/home";

    console.log("Velkommen, " + userName + "!");
} else {
    console.log("Feil: Brukeren kan ikke logge inn.");
}


/******************************************************************************
OPPGAVE 5
******************************************************************************/

const userMale = false;

const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);