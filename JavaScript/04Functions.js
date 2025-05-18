console.log("Functions");
console.log();

// function greet(){
//     console.log("Hello from a function");
// };
// greet();

// function sayHello(name = "Unknown"){
//     console.log("Hello, " + name);
//     console.log(`Hello, ${name}`);
// }

// sayHello("Ritik");
// sayHello();

// function greet(name, cb){
//     console.log(`Hello ${name}`);
//     cb;
// }

// function cb() {
//     console.log("I am a callback function! \n");
// }
// greet("Ritik-TheGreat", cb)

// greet("Ritik", function cb() {
//     console.log("I am a callback function!");
// })

// const person1 = {
//     name: "Ritik",
//     age: 21,
//     greet: function () {
//         return `Hello, My name is: ${person1.name} & I am ${person1.age} year old`
//     }
// }

// console.log(person1.greet());

// const person = {
//   name: "Ritik Kumar",
//   age: 21,
//   email: "ritikrk008@gmail.com",
//   isSubscribed: true,
//   hobbies: ["Reading", "Running", "Cooking"],
//   address: {
//     city: "Patna",
//     state: "Bihar",
//     country: "India",
//   }
// };

// console.log(person);
// console.log();

// const jsonString = JSON.stringify(person);
// console.log(jsonString);
// console.log();

// const parsedObject = JSON.parse(jsonString)
// console.log(parsedObject);

// // Year, month, day, hours, minutes, seconds, miliseconds

// const currentDate = new Date(2025, 5, 18, 12, 30, 0, 0);
// console.log(currentDate);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const dayName = date.toLocaleString('default', { weekday: 'long' });
// const day = date.getDate();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const milliseconds = date.getMilliseconds();



// console.log(`Year:- ${year}`);
// console.log(`month:- ${month+1}`);
// console.log(`Day Name:- ${dayName}`);
// console.log(`day:- ${day}`);
// console.log(`hours:- ${hours}`);
// console.log(`minutes:- ${minutes}`);
// console.log(`seconds:- ${seconds}`);
// console.log(`milliseconds:- ${milliseconds}`);
// console.log();

// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString());

// // setInterval and setTimeout Function
// // setInterva: the function will re-excecute after given time
// // setTimeOut: the function will excecute after given time

// console.log();

// const interval = setInterval(() => {
//     console.log("Ritik is Great");
    
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval);
//     console.log("Interval Stopped");
// }, 10000);

// // Arrow Function

// greet = username =>console.log(`Hello, ${username}`);
// greet("Ritik");

// user = (name, age, work)=>{
//     // return{
//     //     name: name,
//     //     age: age,
//     //     work: work
//     // }
//     return{
//         name,
//         age,
//         work,
//         intro (){
//             console.log(`My name is: ${name}, age: ${age}, i work at: ${work}`);
//         }
//     }
// }

// const ritik = user("Ritik", 22, "SastaProgrammer")
// console.log(ritik);
// console.log(ritik.intro());

// const alex = user("Alex Yadav", 18, "Ghumna")

// console.log(alex.intro());

// var lib = {
//     sum: function (a,b) {
//         return a+b;
//     },
//     mult: function(a,b){
//         return a*b;
//     }
// }

// console.log(lib.sum(2,3));
// console.log(lib.mult(7,3));

// var lib = {
//     sum: (a,b) => a+b,
//     mult: (a,b) => a*b    
// }

// console.log(lib.sum(2,3));
// console.log(lib.mult(7,3));

