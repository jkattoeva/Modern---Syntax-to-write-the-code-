// What the difrence between let & var & const
// const cannot changed , thats better to use for arrays and objects

// let is even more like var , modern web developers usually use let when a vatiable value should allow updates

// for (var x = 0; x < 3; x++) {
//   setTimeout(() => {
//     console.log(x);
//   }, 1000); // 3 3
// }
// for (let y = 0; y < 3; y++) {
//   setTimeout(() => {
//     console.log(y);
//   }, 2000); // 0 1 2
// }

// Spread operator ...

// var arr = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];

// var bothArr = [...arr, ...arr2];

// var obj = {
//   name: "Janetta",
//   role: "Mentor",
// };
// var obj2 = {
//   location: "Kyrgyzstan",
//   students: ["jk", "kg", "etc"],
// };
// var bothObj = {
//   ...obj,
//   ...obj2,
// };
// console.log(bothArr, bothObj);

// function with spread operator
// total add x / y
// function addAll(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//     console.log(num, total);
//   }
//   return total;
// }
// addAll(6, 5, 4);

// Exercise
// add some eg with spread operator

// var fruit = ["Banana", "Pineapple", "Apple"];
// var berries = ["grape", "strawberry", "watermelon", "raspberry"];
// var fruitJuiceFlavor = [...fruit, ...berries];
// console.log(fruitJuiceFlavor);

// var vegetables = ["celery", "potato", "onion"];
// var meat = ["chicken", "beef", "pork"];
// var spices = ["garlic", "cimmin", "peper"];
// var ingredientForDinner = [...vegetables, ...meat, ...spices];
// console.log(ingredientForDinner);

// Spread operator with functions
// function manyArgs(...args) {
//   console.log(args);
// }
// manyArgs(1, 2, 3, 1, 2, 3); // [1,2,3,1,2,3]

// function makeAClass(newPerson, ...students) {
//   console.log(`${newPerson} say hi to ${students.join(" and ")}`);
// }
// makeAClass("Janetta", "Sam", "Bob", "Sally"); // Janetta say hi to Samand Bob and Sally

// Shorthand methods to write code with a lot of ways

// // first eg
// var x = 5;
// var y = 6;
// if (x < y) {
//   console.log("That's true");
// }
// // Shorter eg
// var a = 5,
//   b = 6;
// if (a < 6) console.log("That's True");

// Arrow functions
// firat eg
// function double(x) {
//   return x * 2;
// }
// //second eg
// var double = function (x) {
//   return x * 2;
// };
// // third eg
// var double = (x) => {
//   return x * 2;
// };
// // fourth eg
// var double = (x) => x * 2;

// console.log(double(5));

// Arrow Example
// var names = ["Zintis May", "Will Smith", "Jackie Chan"];
// var lastName = names.map((n) => n.split(" ").pop());
// console.log(lastName); // thats show us only surname

// // second eg
// var testScores = [12, 5, 45, 55, 88, 66, 78, 100];
// var passingScores = testScores.filter((s) => s < 50);
// console.log(passingScores); //12,5,45
// // third eg
// var combineWords = (...words) => words.join(" "); // thats method add space into this words
// console.log(combineWords("Hello", "my", "name", "is", "Janeta"));

// declaration funcution
// isWasTheBest("James Smith");
// function isWasTheBest(name) {
//   console.log(`${name} is was the famous man`);
// }
// // expression function
// var isTheBest = function (name) {
//   console.log(`${name}  is the famous man`);
// };
// isTheBest("Will Smith");

// var fruit = "apple";
// function sayFruit() {
//   console.log(this.fruit);
// }
// var obj = {
//   fruit: "banana",
//   sayFruit: sayFruit,
// };
// obj.sayFruit(); // this method work to deafault function

// var yellFruit = () => {
//   console.log(this.fruit);
// };
// var obj2 = {
//   fruit: "peach",
//   yellFruit: yellFruit,
// };
// obj2.yellFruit(); // array function locked 'this' method

// AND / OR
// var t = true;
// var p = false;
// if (p && t) {
//   // false
//   console.log("is true");
// } else if (t || p) {
//   console.log("thats true"); // true
// }
// var qqq = true && 1 && "hey" && {} && []; // []
// var qqq = true && 0 && "hey" && {} && []; // 0
// var qqq = true && 5 && "" && {} && []; //nothing

// console.log(qqq);

// var yyy = true || 1 || "word" || {} || []; // true
// var yyy = false || 1 || "word" || {} || []; // 1
// var yyy = false || 0 || "word" || {} || []; // word
// var yyy = false || 1 || "" || {} || []; // 1
// var yyy = 0 || null || false || "" || "lastValue"; // lastValue

// console.log(yyy);
