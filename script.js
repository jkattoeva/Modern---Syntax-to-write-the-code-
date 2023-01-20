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
function addAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
    console.log(num, total);
  }
  return total;
}
addAll(6, 5, 4);
