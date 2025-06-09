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
//     while(true){ console.log("hello");
//     }
// }
// infiLoop()

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

// const nums: any[] = [1,2,3,4,5, true, "Hello"]
// console.log(nums);
// Type Aias
// :-  ? allows us to write any object literal to be optional

// type Person = {
//     name: string,
//     age: number,
//     readonly email?: string
// }

// function printPerson(person: Person){
//     console.log(`Name: ${person.name}, Age: ${person.age}, Email: ${person.email}`);

// }

// const myPerson: Person = {name: "Ritik", age: 21, email: "ritikrk008@gmail.com"}
// // myPerson.email = "hello"
// console.log(myPerson);

// type UserInfo = {
//     first: string,
//     last: string,
//     age: number
// }

// type AccountDetails ={
//     email: string,
//     password: string
// }

// type User = UserInfo & AccountDetails;

// const newUser:User = {first: "Ritik", last: "Kumar", age: 21, email: "ritikrk008@gmail.com", password: "hello@123"}
// console.log(newUser);
//  & for intersection and | for union

// let myVar : number | string;
// myVar = "Ritik"
// console.log(myVar);
// console.log(typeof(myVar));

// myVar = 21
// console.log(myVar);
// console.log(typeof(myVar));

// let color: "red" | "Blue" | "green";

// color = "red";
// console.log(color);

// let numbers : 1|2|3|4 = 3;
// console.log(numbers);

// Tuples
// let user: [string, number?, ...boolean[]];

// user = ["John"];                  // ✅
// user = ["John", 30];              // ✅
// user = ["John", 30, true, false]; // ✅

// const products : (number | string)[] = [1, "Hello"];
// console.log(products);

// enum Color {
//   Red = 1,
//   Green = 2,
//   Blue = 3
// }

// let c: Color = Color.Green;
// console.log(c); // GREEN
// console.log(Color[2]);

// class Person {
//   name: string;
//   age: number;
//   readonly mail: string;

//   constructor(name: string, age: number, mail:string) {
//     this.name = name;
//     this.age = age;
//     this.mail = mail;
//   }
// }

// const person1 = new Person("Ritik", 21, "ritikrk008@gmail.com");
// person1.mail = "hello";
// console.log(person1);

// Access Modifiers: Public, Private, Protected
// private: Accessible only within the class.
// protected: Accessible within the class and its subclasses.
// public: Accessible everywhere.

// class Person {
//   private name: string;
//   public age: number;
//   protected mail: string;

//   constructor(name: string, age: number, mail: string) {
//     this.name = name;
//     this.age = age;
//     this.mail = mail;
//   }

//   getName(): string {
//     return `My name is: ${this.name}, my age is: ${this.age}, and email is: ${this.mail}`;
//   }
// }

// class Human extends Person {
//   hello: string;

//   constructor(name: string, age: number, mail: string, hello: string) {
//     super(name, age, mail);
//     this.hello = hello;
//   }

//   getProtected(): string {
//     return `Accessing protected mail: ${this.mail}`;
//   }
// }

// // Creating an instance
// let p1 = new Person("Ritik", 21, "ritikrk@gmail.com");
// console.log(p1.getName());

// // Creating a Human instance and calling the protected method
// let h1 = new Human("Ritik", 21, "ritikrk@gmail.com", "Hello World");
// console.log(h1.getProtected());

// // console.log(p1.name); Can't acces as name is private
// // console.log(p1.mail); also can't access as mail is protected

// class MyClass{
//   private myPropertyi: number = 0;

//   get myProperty(): number{
//     return this.myPropertyi
//   }

//   set myProperty(num: number){
//     this.myPropertyi = num
//   }
// }

// const m1 = new MyClass()
// console.log(`Current Value: ${m1.myProperty}`);
// m1.myProperty = 10
// console.log(`Current Value: ${m1.myProperty}`);

// interface: An interface defines the shape of an object, including the properties and method signatures it must have — without providing implementations.
// It's like a contract for your code.

// interface Person {
//   name: string;
//   age: number;
//   greet(): string;
// }

// class Student implements Person {
//   constructor(public name: string, public age: number) {}

//   greet(): string {
//     return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//   }
// }

// const s1 = new Student("Ritik", 21);
// console.log(s1.greet());

// interface Computer{
//   name: string
//   ram: number
//   hdd: boolean
// }

// const ComputerExample: Computer = {
//   name: 'Ryzen 7',
//   ram: 16,
//   hdd: false
// }

// console.log(ComputerExample);

// interface MathOperation{
//   (x: number, y: number): number;
// }

// const add : MathOperation = (a,y) => a + y;
// const subs : MathOperation = (a,y) => a - y;
// console.log(add(20,10));
// console.log(subs(20,10));

// interface Car{
//   brand: string
//   start(): void;
// }

// interface Car{
//   model: string
//   stop(): void
// }

// const myCar : Car = {
//   brand: "BMW",
//   model: "M3",
//   start() {
//       console.log(`${this.brand} started`);
//     },
//     stop() {
//       console.log(`${this.brand} Stopped`);
//   },
// }
// myCar.start()
// console.log();
// myCar.stop()

// Generic Functions
// function printInfo<T>(x:T): T{
//   return x;
// }

// console.log(printInfo<string>("Hello"));
// console.log(printInfo<number>(6));
// console.log(printInfo<boolean>(true));

// function getRandomKeyValuePair<T>(obj:{[key:string]: T}):{key: string; value: T;}{
//   const keys = Object.keys(obj)
//   const randomKey = keys[Math.floor(Math.random() * keys.length)]
//   return {key: randomKey, value: obj[randomKey]}
// }

// const randomStringPair = getRandomKeyValuePair({a: "Hello", b: "World", c: "Typescript", d: "Dog", e: "Egg"})
// const randomNumberPair = getRandomKeyValuePair({x: 10, y: 20, z: 30})

// console.log(randomStringPair);
// console.log(randomNumberPair);

// function filterArray<T>(array:T[], condition: (item: T)=> boolean): T[]{
//     return array.filter((item)=> condition(item));
// }

// const numberArray = [1,2,3,4,5,6,7,8,9]
// const evenNumbers = filterArray<number>(numberArray, (num)=>num%2==0);
// console.log(evenNumbers);

// const stringArray = ["Hello", "World", "Typescript", "Dog", "Egg"]
// const shortWords = filterArray<string>(stringArray, (word)=>word.length<5)
// console.log(shortWords)

// interface Fruit{
//     name: string
//     color: string
// }

// const fruitArray: Fruit[]=[
//     {name: "Apple", color: "Red"},
//     {name: "Banana", color: "Yellow"},
//     {name: "Orange", color: "Orange"},
//     {name: "Mango", color: "Yellow"},
//     {name: "Grapes", color: "Green"},
//     {name: "cherry", color: "Red"},
//     {name: "Watermelon", color: "Green"},
// ]

// const redFruits = filterArray<Fruit>(fruitArray, (fruit)=>fruit.color === "Red")
// const greenFruits = filterArray<Fruit>(fruitArray, (fruit)=>fruit.color === "Green")
// console.log(redFruits);
// console.log(greenFruits);
