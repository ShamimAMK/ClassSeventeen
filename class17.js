"use strict";
// usage of if else
// if there is a single line in a block, can write the code in one line.

const isRaining = true;
// if (isRaining) console.log("Bring Umbrella");
// else console.log("Don't bring Umbrella");

//Can use ternary operator

const rainStatus = isRaining ? "Bing Umbrella" : "Don't bring Umbrella";
console.log(rainStatus);

// Function
// Hoisting (If result sow before declaration it's called hoisting)

function doSome(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const result = doSome(10, 20);
console.log(result);

const result1 = doSome(35, 25);
console.log(result1);

//Function declaration

function greet(personName) {
  const message = `Hello, ${personName}`;
  return message;
}
console.log(greet("Mim"));
console.log(greet("Moni"));
console.log(greet("Munna"));

// Mathematical functions

//function expression

function doMath(a, b, c, d) {
  const sum = a + b + c + d;
  const diff = sum * d;
  const prod = diff + a;
  return prod;
}
console.log(doMath(1, 2, 3, 4));

//Create a Greeting massage depend on time
function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

const greeting = getGreeting();
console.log(greeting);

//arrow function
const doMaths = (num1, num2) => num1 % num2;
console.log(doMaths(10, 5));

//age calculator
const ageCalculator = (birthyear) => 2023 - birthyear;
console.log(ageCalculator(2000));

// Calculate the duration while journey by a Train from Dhaka  to Rajshahi. Distance is 250 Kilo  speed 80 kilo, and there are break times between saperal stations about 20 minutes

function duration(distance, speed) {
  const timeDuration = distance / speed + " Hours";
  return timeDuration;
}
const tDuration = duration;
console.log(tDuration(250, 80));

// Function calling another Function
// When we reach in Rajshahi from the station greet us

function greetOnStation() {
  const greets =
    greeting +
    " After the journey of " +
    tDuration(250, 80) +
    " you have reach in the city of Rajshahi. Thank you for being with Bangladesh Railway.";
  return greets;
}
const fGreets = greetOnStation;
console.log(fGreets(249, 80));

//arrays
const myNumbers = [45, 55, 85, 95, 125, 210];

//access an element by index
console.log(myNumbers[2]);

//access index by an element.
console.log(myNumbers.indexOf(210)); // 5
console.log(myNumbers.indexOf(95)); // 3
console.log(myNumbers.indexOf(510)); // -1

//length
console.log(myNumbers.length); // 6

//add an element at the end of arrays -- push()
myNumbers.push(550);
console.log(myNumbers);

//add an element at the beginning of arrays -- unshift()
myNumbers.unshift(50);

//remove an element from the end of arrays -- pop()

myNumbers.pop();
console.log(myNumbers);

//remove an element from the beginning of arrays -- pop()
myNumbers.shift();
console.log(myNumbers);

//include ( to check availability of element in array ) // true or false //
console.log(myNumbers.includes(500));
console.log(myNumbers.includes(95));
