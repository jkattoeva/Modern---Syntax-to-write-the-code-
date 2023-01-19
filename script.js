// What the difrence between let & var & const
// const cannot changed , thats better to use for arrays and objects

// let is even more like var , modern web developers usually use let when a vatiable value should allow updates

for (var x = 0; x < 3; x++) {
  setTimeout(() => {
    console.log(x);
  }, 1000); // 3 3
}
for (let y = 0; y < 3; y++) {
  setTimeout(() => {
    console.log(y);
  }, 2000); // 0 1 2
}
