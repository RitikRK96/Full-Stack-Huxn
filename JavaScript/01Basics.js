console.log('Ritik Kumar')
console.error('Ritik Kumar')
console.table({name:"Ritik", age: 20})
console.clear()

console.log("All above Cleared")

/* sdkfhjlksdfjlks
asdfhasdfjalsdfk;
asdjflajsdf
*/

// lkdjlfaksjd?

let name = 'Ritik Kumar';
let whatDoYouWannaBecomeInYourLife = "A programmer";
let gender = 'Male';
let twitterHandle = 'Ritikrk_08';

console.log(`My name is: ${name}`)
console.log(`I want to be : ${whatDoYouWannaBecomeInYourLife}`)
console.log(`I am a ${gender}`)
console.log(`My Twitter handle is: ${twitterHandle}`);

let firstFavNum = 18;
let secondFavNum = 7;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);

let isTRue = false;
console.log(isTRue);

// All Falsy Values
// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (empty Quotes)

// Task
let isJSPRogrammingLanguage = true;
let isJsHard = false;
let favNumb = 7;
console.log(isJSPRogrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

// Relational Operator
console.log(10 > 10);
console.log(10 < 10);
console.log(10 <= 10);
console.log(10 >= 10);

// Equality Opertor
console.log(10 === 10);
console.log(10 == '10');
console.log(10 !== 10);
console.log(10 != '10');

// Strings
let firstName = "Ritik";
let lastName = "Gupta";

// 1. Concatenation: in this you can only add two strings
let fullname = firstName.concat(lastName);
console.log(fullname);

// 2. Append: In this you can append as many as you want
fullname = firstName + " " + lastName + " is great.";
console.log(fullname);

// 3. Length
console.log(fullname.length);
console.log(firstName.length);
console.log(lastName.length);

// 4. Cases
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// 5. Slice
console.log(firstName.slice(0,2));

// 6. Split & Join
console.log(firstName.split(''));
console.log(firstName.split('').join(''));

// 7. Includes
console.log(firstName.includes('i'));

// 8. Trim
let tr = "         asdfas      ";
console.log(tr.trim());

let desc = `ritik
kumar
hello`;

console.log(desc);

// String Literals
fullname = `${firstName} ${lastName} something`;
console.log(fullname);

// Data Type Conversion
let money = "50";

// Convert String to Number
money = parseInt(money);
console.log(typeof money);
money += money;
console.log(money);
console.log(typeof money);


// Convert Number to String
money = money.toString();
money = String(money);
console.log(money);
console.log(typeof money);

money = '50.25';

// convert String to Decimal
money = parseFloat(money);
console.log(money);
console.log(typeof money);