// ********** Synchronous Code
function myFunc() {
  console.log("Inside function");
}

// console.log("Start");
// myFunc();
// console.log("End");

// ********** Asynchronous Code
console.log("Start");


console.log("End");

setTimeout(myFunc, 3000);

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);