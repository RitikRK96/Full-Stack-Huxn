console.log("Arrays\n");

const myList = [1,2,4, 'Ritik'];
console.log(myList);

const stringArr = ["Eat", "Sleep", "Code", "Repeat"];
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);

// Nested Array
const nestedArray = ["One", ["two", "Three"], 1, true, false];
console.log(nestedArray[1][0]);

// Methods
const fruits = [
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
  "strawberry",
  "blueberry",
  "kiwi",
  "pineapple",
  "watermelon",
];
console.log(fruits.length);

fruits.push("Pears"); // Insert the element at last
console.log(fruits);
console.log(fruits.length);
console.log(fruits.pop()); // Remove the last element
console.log(fruits.length);
fruits.shift(); // Remove the element at first index
console.log(fruits);
fruits.unshift('Blue Lilies'); // Insert at the beginning
console.log(fruits);

const moreFruits = [
    "Fruit-1",
    "Fruit-2",
    "Fruit-3"
];

const totalFruit = fruits.concat(moreFruits);
console.log(totalFruit);

console.log(fruits.includes("apple"));
console.log(fruits.join(" - "));
console.log(fruits.reverse());
console.log();

let hel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(hel.slice(0,2)); // it returns a new Array
console.log(hel);
console.log(hel.splice(1, 7)); // It removes the elements in that array
console.log(hel);

console.log("Objects");
console.log();

const person = {
    firstName: "Ritik",
    lastName: "Kumar",
    age: 21,
    location: ["Planet", "Earth"],
    isSastaProgrammer: true
};
console.log(typeof person);

console.log(`Programmer's name is : ${person["firstName"] + " " + person["lastName"]}`);
console.log(`Age is: ${person["age"]}`);
console.log(`Programmer lives on: ${person["location"]}`);
console.log(`Programmer is sastaProgrammer: ${person["isSastaProgrammer"]}`);
console.log(person);

delete person.firstName;
console.log(person);

person.firstName = "Ritik"; // added a new object
console.log(person);


