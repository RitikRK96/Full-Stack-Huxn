// type Person = {
//     name: string;
// };

// const person: Person = {
//     name: "John",
// };
// console.log(person.name);

// let myName: string = "Ritik-TheGreat"
// myName = "Ritik-ISGreat"
// console.log(myName);

// let favNumber: number = 7;
// favNumber += 2;
// console.log(favNumber);

// let hello: boolean = true;
// hello = false;
// console.log(hello);

// let tech = "Typescript"
// let num = 2
// let ISGreat = true
// console.log(tech, num, ISGreat);
// console.log(typeof(tech), typeof(num), typeof(ISGreat));

// let tech: any = "Typescript";
// console.log(typeof tech);
// console.log(tech);
// tech = 2;
// console.log(tech);
// console.log(typeof tech);
// tech = true;
// console.log(tech);
// console.log(typeof tech);

// function addOne(num: number){
//     return num+1;
// }
// const result = addOne(10)
// console.log(result);

// const double = (x: number, y:number)=> x*y;
// const res = double(2,10)
// console.log(res);

// function sqr(x: number): number {
//   return x * x;
// }
// const sqr2 = (x: number): number => x * x;

// console.log(sqr(5));
// console.log(sqr2(10));

// function greet(gre:string):void{

//     console.log(`This is ${gre}`);
// }

// Never Keyword: used when function throw an error or to have to run infinitely
// function throwError(msg:string):never{
//     throw new Error(msg)
// }

// function infiLoop(): never{
//     while(true){ }
// }

// let x: never;
// function neverReturns(): never{
//     while(true){}
// }

// x = neverReturns();

// // Arrays in Typescript
// const nums = [1,2,3,4.4,true, "hello"]
// nums.push("Ritik")
// console.log("All: " + nums);

// const items: Array<Number> = [1,2,3,4,5]
// console.log("Items Array: " + items);

// const items2: Array<any> = [1,2,3,4,true, "hello"]
// console.log("Items Any: " + items2);

// Objects
// const Person: {firstName: string; lastName: string; age: number} ={
//     firstName: "Ritik",
//     lastName: "Kumar",
//     age: 21
// }

// console.log(`Name: ${Person.firstName} ${Person.lastName}\nAge: ${Person.age}`);

// function printUser(): {name:string; age: number; location:string}{
//     return{
//         name: "Ritik",
//         age: 21,
//         location: "India"
//     }
// }

// console.log(printUser());

 