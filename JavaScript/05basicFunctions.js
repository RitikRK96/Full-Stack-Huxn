// // Spread Operator: It creates shallow copy of variables
// function giveme4(a,b,c,d){
//     console.log("a", a);
//     console.log("b", b);
//     console.log("c", c);
//     console.log("d", d);
// }

// const colors = ["red", "yellow", "green", "teal"]
// giveme4(...colors)

// const strNums = ['one', 'two', 'three']
// const strmoreNums = ['four', 'five', 'six']
// const concat = [...strNums, ...strmoreNums]

// console.log(concat);

// const object1 = {x: 1, y: 2}
// const object2 = {z: 3, a: 5}
// const object3 = {...object1, ...object2}
// console.log(object3);

// // Rest Operator: It is used to paas infinite values as arguments
// function user (something, ...rest){
//     console.log(something);
//     console.log(rest);
// }

// user("hello", "byre", 5, 6,)

// Destructuring: It allows us to "unpack" values from data-structures into separate distict values.

// const foo = ["one", "two"]

// const [ritik, yellw, green, blue] = foo

// console.log(ritik);
// console.log(yellw);
// console.log(green);
// console.log(blue);

// // default values in destructure
// let a, b;
// [a = 5, b = 8] = ["one"]
// console.log(a);
// console.log(b);

// // as functions
// function f(){
//     return [1,2]
// }

// let a, b;
// [a,b] = f();
// console.log(a);
// console.log(b);

// const person1 = {
//     name: "Ritik Kumar",
//     age: 22,
//     gender: "male",
//     country: "India"
// }

// const {gender, ritik,name, age,  country} = person1;

// console.log(gender);
// console.log(ritik);
// console.log(name);
// console.log(age);
// console.log(country);

// // Function Destructuring

// const personf = {
//     name: "Ritik kumar",
//     age: 22,
//     country: "India"
// }

// function printPersonInfo({name, age, country}) {
//     console.log(`Name: ${name || "N/A"}`);
//     console.log(`Age: ${age || "N/A"}`);
//     console.log(`Country: ${country || "N/A"}`);
// }
// printPersonInfo(personf);

// // Ternary Operator: (condition) ? (iftrue do this) : (if false do this)
// let paas = 8;
// paas == 8 ? console.log("Paas is strong") : console.log("Paasword is Weak");
