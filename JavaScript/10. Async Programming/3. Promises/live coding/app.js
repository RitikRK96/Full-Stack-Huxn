// function checkNumber(number){
//   return new Promise((resolve, reject)=>{
//     if(number%2 == 0){
//       resolve(`${number} is an even Number.`)
//     }
//     else{
//       reject(`${number} is an odd Number`)
//     }
//   })
// }

// // let number = 7;
// let number = 6;
// checkNumber(number).then((message)=>{
//   console.log(`Success: ` + message);
// }).catch((error)=>{
//   console.log("Error: " + error);
  
// })

// ---------------------------
// Refactoring the previous example to use (Promises)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callbackHell) Function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed First`;
      console.log("Inside (firstFunc) Function");
      resolve(processedData);
    }, 1000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`;
      console.log("Inside (secondFunc) Function.");
      resolve(processedData);
    }, 1500);
  });
}

fetchData()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) => {
    console.log(
      `Final result of all functions with Promises: ${processedData2}`
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });
// ---------------------------
