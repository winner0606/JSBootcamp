// const isRaining = true;
// if (isRaining) {
//   console.log("carry umbrella");
// } else {
//   console.log("don,t carry umbrella");
// }

// const age = 23;
// if ((age) => 23) {
//   console.log("you can cast vote");
// } else {
//   console.log("you cannot cast vote");
// }

// const age = "23";
// if (age == 23) {
//   console.log("age is equals to 23");
// } else {
//   console.log("age is not equals to 23");
// }

// const age = "22";
// if (age === 22) {
//   console.log("age is equals to 22");
// } else {
//   console.log("age is not equals to 22");
// }

//ternary operator
// const result = isRaining ? "carry umbrella" : "don't carry umbrella";
// console.log(result);

// //short circuit
// isRaining && console.log("don't carry umbrella");

// const grade = "80.5";
// if (grade > 90) {
//   console.log("A+");
// } else if (grade > 80) {
//   console.log("A");
// } else if (grade > 70) {
//   console.log("B+");
// } else if (grade > 60) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
for (let day of days) {
  console.log(day);
}

const data = {
  name: "winner",
  age: "23",
  address: "Dharan",
};
for (let key in data) {
  console.log(key);
}

// const data = {
//   name: "winner",
//   age: "23",
//   address: "Dharan",
// };
// for (let key in data) {
//   console.log(key + " is " + data[key]);
// }
