let arr = [" injustice", " SuperMan", "Batman ", " flash "];
function clean(array) {
  return array.map((arr) => arr.trim());
}
console.log(clean(arr));
// ##################################
// task 2
let arr1 = [10, 20, 30, 40];
function km(array) {
  return array.map((element) => element * 1.60934);
}
console.log(km(arr1));
// ##################################
// task 3
function average(array) {
  let arr2 = array
    .map((element) => element ** 2)
    .reduce((total, square) => total + square, 0);
  let arr3 = arr2 / array.length;
  return arr3;
}

console.log(average([1, 2, 3, 4, 5]));
// ##################################
// task 4
let arr4 = [1, 2, 3, 4, 5];
function kms(array) {
  return array.map((element) => element + 4);
}
console.log(kms(arr4));
// ##################################
// task 5
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even(array) {
  let arr6 = array.filter((element) => element % 2 === 0);
  let arr7 = arr6
    .map((element) => element * 2)
    .reduce((total, square) => total + square, 0);
  return arr7;
}
console.log(even(arr5));
// ##################################
// task 6
let arr8 = ["apple", "banana", "cherry", "date"];
let arrNew = arr8.map((element) => element.toUpperCase());
console.log(arrNew);
// ##################################
// task 7
const heros = [
  { name: "Iron Man", power: "Tech" },
  { name: "Spider-Man", power: "Spider abilities" },
  { name: "Thor", power: "Godly powers" },
  { name: "Hulk", power: "Super strength" },
];
let arrNew1 = heros.map((hero, index) => ({
  hero: hero.name,
  power: hero.power,
  id: index,
}));
console.log(arrNew1);
// ##################################
// task 8
let arr9 = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function filteredArr(array) {
  return array.filter((element) => element.length >= 7);
}
console.log(filteredArr(arr9));
// ##################################
// task 9
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr11 = arr10.filter((element) => element % 2 !== 0);
console.log(arr11);
let arr12 = arr10.filter((element) => element % 2 === 0 || element % 5 === 0);
console.log(arr12);
let arr13 = arr10.filter((element) => element % 3 === 0);
let arr14 = arr13.map((element) => element * element);
console.log(arr14);
let arr15 = arr10.filter((element) => element % 5 === 0);
let arr16 = arr15
  .map((element) => element * element)
  .reduce((total, square) => total + square, 0);
console.log(arr16);
// ##################################
// task 10
let arr21 = [11, 22, 33, 46, 75, 86, 97, 98];
let arr22 = arr21.filter((element) => element % 2 === 0);
let arr23 = arr22.map((element) => element * element);
console.log(arr23);
let arr24 = arr21.reduce((total, square) => total + square, 0);
console.log(arr24);
// ##################################
// task 11
let arr17 = ["India", "United States", "Russia", "Japan", "China"];
let arr18 = arr17.filter(
  (element) => !element.startsWith("U") && !element.startsWith("R")
);
console.log(arr18);
let arr19 = arr18.map((element) => element.toUpperCase());
console.log(arr19);
let arr20 = arr19.reduce((total, element) => total + element.length, 0);
console.log(arr20);
// ##################################
// task 12
let arr25 = [12, 45, 67, 89, 23, 56, 73, 99, 100];
let arr26 = arr25.filter((element) => element > 50);
console.log(arr26);