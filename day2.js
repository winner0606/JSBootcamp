const days = ["Sunday", "Monday", "Tuesday", "Wednesday"];
console.log(days[2]);
days.push("Thursday");
console.log(days);
days.pop();
console.log(days);
days.unshift("Week");
console.log(days);
days.shift();
console.log(days);
//const data = days.slice(1, 3);
//console.log();
days.splice(2, 2, "Baisakh");
console.log(days);
const data = [1, 2, 3, 4, 5, 6];
data.splice(1, 3, "hello", "bye", "world");
console.log(data);
const vowels = ["w", "i", "n", "n", "e", "r"];
console.log(vowels);
vowels.splice(0, 6, "23", "9", "14", "14", "5", "18");
console.log(vowels);
const text = "I am from Nepal";
const splittedData = text.split("");
console.log(splittedData);
const language = ["js", "php", "c"];
language.splice(1, 0, "html");
console.log(language);

const person = Object.freeze({
  name: "Winner",
  address: "Dharan",
  natonality: "Nepali",
});
console.log(person);

const country = ["Nepal", "Argentina"];
console.log(country);
country.push("Spain");
console.log(country);

const datas = {
  name: ["winner", "Puma"],
};
datas.name.push("Rai");
console.log(datas);
const test2 = {
  name: ["winner", "Puma", "Rai"],
};
test2.name.splice(0, 3, 1, 2, 3);
console.log(test2);
