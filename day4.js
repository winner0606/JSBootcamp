//topic:callback function

// higher order function(HOF)
// foreach
// map
// reduce
// filter
//only for arrays

// getsomething(function () {}); //callback function

// getsomething(() => {});

// const fruits = ["Mango", "Apple", "Apple"];
// // fruits.forEach(function (fruit) {
// //   console.log(fruit);
// // });

// fruits.map(function (fruit) {
//   console.log(fruit);
// });

// const nums = [1, 2, 3, 4, 5];
// const squares = [];

// nums.forEach(function (num) {
//   squares.push(num * num);
// });
// console.log(squares);

// const data = [
//   {
//     firstname: "Winner",
//     lastname: "Rai",
//     address: "Dharan",
//   },
//   {
//     firstname: "Messi",
//     lastname: "Rai",
//     address: "Argentina",
//   },
//   {
//     firstname: "Nams",
//     lastname: "Rai",
//     address: "Pachthar",
//   },
// ];
// data.forEach((object) => {
//   console.log(object.firstname + " " + object.lastname);
// });

// const nums2 = [2, 4, 6, 8];
// const squared = nums2.map((num) => {
//   return num * num;
// });
// console.log(nums2);
// console.log(squared);

// const data = [
//   {
//     firstname: "Winner",
//     lastname: "Rai",
//     address: "Dharan",
//   },
//   {
//     firstname: "Messi",
//     lastname: "Rai",
//     address: "Argentina",
//   },
//   {
//     firstname: "Nams",
//     lastname: "Rai",
//     address: "Pachthar",
//   },
// ];
// const result = data.map((object) => {
//   return {
//     fullName: object.firstname + " " + object.lastname,
//   };
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((object) => {
//   return {
//     text: "A",
//     Number: object,
//   };
// });
// console.log(result);

//spread operator
// const data = [
//   {
//     firstname: "Winner",
//     lastname: "Rai",
//     address: "Dharan",
//   },
//   {
//     firstname: "Messi",
//     lastname: "Rai",
//     address: "Argentina",
//   },
//   {
//     firstname: "Nams",
//     lastname: "Rai",
//     address: "Pachthar",
//   },
// ];
// data.map((object) => {
//   return {
//     firstname: object.firstname,
//     lastname: object.lastname,
//     address: object.address,
//   };
// });
// console.log(data);

// const output = data.map((object) => {
//   return {
//     ...object,
//     fullname: object.firstname + " " + object.lastname,
//   };
// });
// console.log(output);

// const numberData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numberData.filter((number) => {
//   return number % 2 !== 0;
// });
// console.log(oddNumbers);

// books = [
//   {
//     title: "You can win",
//     author: "shiv khera",
//     publishedAt: 2001,
//   },
//   {
//     title: "Think like a monk",
//     author: "Jay shetty",
//     publishedAt: 2022,
//   },
//   {
//     title: "Cashflow quadrant",
//     author: "Robert T. Kiyosaki",
//     publishedAt: 1909,
//   },
//   {
//     title: "You can win2",
//     author: "shiv khera",
//     publishedAt: 1990,
//   },
//   {
//     title: "Think like a monk2",
//     author: "Jay shetty",
//     publishedAt: 1999,
//   },
//   {
//     title: "Cashflow quadrant2",
//     author: "Robert T. Kiyosaki",
//     publishedAt: 2010,
//   },
// ];
// const bookAbove2000 = books.filter((object) => {
//   return object.publishedAt > 2000;
// });
// console.log(bookAbove2000);

// const files = ["index.html", "app.js", "app.java", "style.css", "test.js"];
// const JSFiles = files.filter((file) => {
//   return file.endsWith(".js");
// });
// console.log(JSFiles);

// const lastTask = [1, 2, null, undefined, "Winner", "haha", "hehe"];
// //output--> [1,2,"WInner","haha","hehe"]
// const result = lastTask.filter((task) => {
//   return task !== null && task !== undefined;
// });
// console.log(result);

//marks > 500,status = pass, name ko last ma sh hunu paro
const lastData = [
  {
    name: "Manish",
    marks: 800,
    status: "pass",
  },
  {
    name: "Anish",
    marks: 500,
    status: "fail",
  },
  {
    name: "Pranjal",
    marks: 900,
    status: "pass",
  },
  {
    name: "Bob",
    marks: 100,
    status: "fail",
  },
  {
    name: "Hari",
    marks: 550,
    status: "fail",
  },
  {
    name: "Shyam",
    marks: 600,
    status: "pass",
  },
  {
    name: "Laxman",
    marks: 300,
    status: "fail",
  },
];
const result = lastData.filter((data) => {
  return data.marks > 500 && data.name.endsWith("sh") && data.status == "pass";
});
console.log(result);
