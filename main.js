
const arr = [13, 5, 7, 8, 91, 02, 2, 01, 4];
console.log("before sorting---", arr);
arr.sort((a, b) => {
  return a - b;
});
console.log(arr);
