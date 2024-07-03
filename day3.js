// const isRaining = true;
// if (isRaining) {
//   console.log("carry umbrella");
// } else {
//   console.log("dont carry umbrella");
// }

// // const age = 23;
// // if (age > 18) {
// //   console.log("you can cast vote");
// // } else {
// //   console.log("you cannot cast vote");
// // }

// // const age = "21";
// // if (age == 21) {
// //   console.log("age equals 21");
// // } else {
// //   console.log("age doesn't equals 21");
// // }

// const age = "21";
// if (age === 21) {
//   console.log("age equals 21");
// } else {
//   console.log("age doesn't equals 21");
// }

// //ternary operator
// const result = isRaining ? "carry umbrella" : "dont carry umbrella";
// console.log(result);

// //short circuit
// isRaining && console.log("carry umbrella");

// const temperature = 27;
// if (temperature > 30) {
//   console.log("hot");
// } else if (temperature > 20) {
//   console.log("moderate");
// } else {
//   console.log("cool");
// }

// const grade = 33;
// // Grade
// // 80-90 --> console.log("A")
// // 70-80 --> console.log("B+")
// // 60-70 --> console.log("B")
// // 0-60 --> console.log("Fail")
// if (grade > 80) {
//   console.log("A");
// } else if (grade > 70) {
//   console.log("B+");
// } else if (grade > 60) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// for (var i = 0; i < days.length; i++) {
//   console.log(days[i]);
// }

// //easy way
// for (let aaa of days) {
//   console.log(aaa);
// }

// const data = {
//   name: "Winner",
//   age: "23",
//   address: "Dharan",
// };
// for (let key in data) {
//   console.log(key + " is " + data[key]);
// }

// console.log(1+2)
// console.log(2+3)
// console.log(5+6)

//regular function
// function add(a, b) {
//   console.log(a + b);
// }

// add(1, 2);

//named regular function
// const add = function (a, b) {
//   console.log(a + b);
// };

// const add = (a, b) => {
//   console.log(a + b);
// };

//anonymous function
// () => {
//   console.log("Hello World");
// };

// // add(2,5,7)
// const numbers = [1, 2, 3, 4, 5];
// function winner(numbers) {
//   for (num of numbers) {
//     console.log(num * num);
//   }
// }
// winner(numbers);

//Write a function that accepts above data and console.log userID
const data = {
  status: 200,
  message: "Code found",
  code: [
    {
      _id: "668510da18d90581711b6292",
      text: "test\n",
      userId: "f959757",
      title: "test",
      ipAddress: "49.244.110.12",
      createdAt: "2024-07-03T08:50:34.704Z",
    },
  ],
};
function winner(data) {
  console.log(data.code[0]._id);
  console.log(data.code[0].title);
  console.log(data.code[0].ipAddress);
}
winner(data);
