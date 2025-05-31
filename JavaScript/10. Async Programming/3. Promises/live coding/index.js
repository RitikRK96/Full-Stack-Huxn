// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("success")
//     // reject("some error")
// })

// console.log(promise);

// function getData (dataId, getNextData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success")
//             // reject("error")
//             if(getNextData){
//                 getNextData()
//             }
//         }, 2000);
//     })
// }

// getData(5, ()=>{
//     getData(6)
// })

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve("Success");
//     reject("Failure");
//   });
// };

// let promise = getPromise();
// promise.then((e) => {
//   setTimeout(() => {
//     console.log(e);
//   }, 2000);
// }).catch((e)=>{
//     console.log(e);

// })

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data1");
//       reject("Reject");
//     }, 3000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("some data in Func2");
//       resolve("Resolve")
//     }, 3000);
//   });
// }

// console.log("Fetching data1...");
// asyncFunc().then((res) => {
//   console.log(res);
//   console.log("fetching Data2...");
//   asyncFunc2().then((res2) => {
//     console.log(res2);
//   })
// })

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("Success");
//     }, 2000);
//   });
// }

// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//   });
// });

// getData(1)
//   .then((res) => {
//     console.log("Data1");
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(5);
//   })
//   .then((res) => {
//     console.log(res);
//   });

function getData(dataId){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log("Data:- ", dataId);
      resolve("Success")      
    }, 2000);
  })
}

// (async () => {})();

(async function() {
  console.log("getting data1"); 
  await getData(1)
  console.log("getting data21");
  await getData(21)
  console.log("getting data3");
  await getData(3)
  console.log("getting data5");
  await getData(5)
})()

