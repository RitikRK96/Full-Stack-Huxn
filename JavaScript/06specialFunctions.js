// // For ...in Loop

// let person = {
//     name: "Ritik",
//     age: 19,
//     gender: "male"
// }

// for(let keys in person){
//     console.log(keys,":",  person[keys]);
// }

// let list = ["zero","one", "two", "three", "four"]
// for(let i in list){
//     console.log(`${i}: ${list[i]}`);

// }

// // For ...of Loop
// for (const i of list) {
//     console.log(i);
// }

// // For each Loop
// list.forEach((num) => console.log(num))

// // Map() Method: calls functions for every element in the calling array

// let numbers = [1,2,3,4,5,6,7]
// let double = numbers.map(num=> num*2)
// console.log(double);

// let peoples = [
//     {firstName: "Virat", lastName: "kohli"},
//     {firstName: "Sachin", lastName: "Tendulkar"},
//     {firstName: "Mahendra Singh", lastName: "Dhoni"},
//     {firstName: "Ravindra", lastName: "Jadeja"}
// ]

// const results = peoples.map(p=>{
//     return [p.firstName, p.lastName]
// });
// console.log(results);

// const nums = [23, 53, 18, 62]
// function myFunc(num){
//     return num *10;
// }

// const newArr = nums.map(myFunc);
// console.log(newArr);

// Filter() Method: it filters out only the elements that satisty the condition
// const songs = [
//   { name: "Shape of You", duration: 4 },
//   { name: "Blinding Lights", duration: 3 },
//   { name: "Believer", duration: 3 },
//   { name: "Levitating", duration: 3 },
//   { name: "Peaches", duration: 6 },
//   { name: "Closer", duration: 4 }
// ];

// console.log(songs.filter(song => song.duration > 3));

// const ages = [32, 23, 16, 82, 43]
// function checkEligible(age){
//     return age>= 18 && age<70;
// }

// const result = ages.filter(checkEligible);
// console.log(result);

// // Find() Method: It returns the value of first element that satisfires the given testing function
// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 40 },
//   { name: "David", age: 22 },
//   { name: "Eve", age: 35 },
//   { name: "Frank", age: 28 }
// ];

// const res = people.find(person => person.name == "Alice")
// console.log(res);

// const ages = [34, 56, 82, 16, 45, 39]
// function checkAge(age){
//     return age > 18
// }
// const res = ages.filter(checkAge)
// console.log(res);

// let products = [
//   { name: "Alice", category: "toys" },
//   { name: "Bob", category: "books" },
//   { name: "Charlie", category: "books" },
//   { name: "David", category: "toys" },
//   { name: "Eve", category: "electronics" },
//   { name: "Frank", category: "books" }
// ];

// const foundProduct = products.find((product) => product.category == "books");
// const filterProduct = products.filter((product) => product.category == "books");
// console.log(foundProduct);
// console.log(filterProduct);

// // every() Method: Check if all elements follow the condition then return true else false
// const countPeople = ["Ritiks", "Trampo", "Mouses"]

// const res1 = countPeople.every((People) => People.length === 6);
// console.log(res1);

// // some() Method: Check if any element follow the condition then return true else false

// const countPeople2 = ["Ritik", "Trampo", "Mouse"]

// const res2 = countPeople2.some((People) => People.length === 6);
// console.log(res2);                           

// const numbers = [1,2,3,4,5,6,7]
// const sum = numbers.reduce((p,c)=>{
//     return p+c;
// })
// console.log(sum);

// Map: just like objects but you can use any data type in this