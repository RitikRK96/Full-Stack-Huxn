// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// CONSTRUCTOR FUNCTION
function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
  this.info = function () {
    console.log(
      `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
    );
  };
  console.log(this);
}

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

// Creating instances using the constructor function
const john = new CreatePeople("John", "Doe", "Golang");
const huxn = new CreatePeople("HuXn", "WebDev", "Javascript");
// john.info();
// huxn.info();

// ******************** Example 2
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getInfo = function () {
    // return this.title + " by " + this.author + " (" + this.year + ")";
    return `${this.title} by ${this.author} (${this.year})`;
  };
}

// Creating instances using the constructor function
const book1 = new Book("The Alchemist", "Paulo Coelho", 1988);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

console.log(book1.getInfo()); // The Alchemist by Paulo Coelho (1988)
console.log(book2.getInfo()); // To Kill a Mockingbird by Harper Lee (1960)


function Car(brand, ownerName, year){
  this.brand = brand;
  this.ownerName = ownerName;
  this.year = year;
  
  this.getCarInfo = function(){
    return `${this.brand} of ${this.ownerName} in ${this.year}`;
  }
}

const car1 = new Car("Hyundai", "Ritik", 2023)
console.log(car1.getCarInfo());

function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.info = function(){
    return `Name is: ${this.name} \nAge is: ${this.age} \nGender is: ${this.gender}`
  }
}

const person1 = new Person("Ritik", 21, "male")
const person2 = new Person("Trampo 🥺", 21, "female")
console.log(person1.info());
console.log(person2.info());
