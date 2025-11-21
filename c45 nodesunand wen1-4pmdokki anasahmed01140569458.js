//q1
let x = "123";
console.log(Number(x) + 7);
//==========================
//q2
function checkfalsy(value) {
  if (!value) {
    return "invaid";
  } else {
    return "vaild";
  }
}
console.log(checkfalsy(0));
//==============================
//q3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < arr.length; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
  //======================================
  //q4
  let numbers = [1, 2, 3, 4, 5];
  let a = numbers.filter((ele) => {
    if (ele % 2 == 0) return ele;
  });
  console.log(a);
  //====================================
  //q5
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let result = [...arr1, ...arr2];
  console.log(result);
  //===============================
  //q6
  let day = 2;
  switch (day) {
    case 1:
      console.log("sunday ");

      break;

    case 2:
      console.log("monday");
      break;
    case 3:
      console.log("thuesday");
      break;
    case 4:
      console.log("wesnday");
      break;

    default:
      console.log("anas");

      break;
  }
}
//====================================================
//q7
let strings = ["a", "ab", "abc"];
let q = strings.map((ele) => {
  return ele.length;
});
console.log(q);
//=============================================================
//q8
function checks(n1) {
  if (n1 % 3 == 0 && n1 % 5 == 0) {
    return "“Divisible by both";
  }
}
console.log(checks(15));
//==============================================================
//q9
let makeSqure = (num) => {
  return num ** 2;
};
console.log(makeSqure(2));
//=========================================================
//q10

function formatPerson(person) {
  const { name, age } = person;

  return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };
console.log(formatPerson(person));
//================================================
//q11
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));
//=========================================================
//q12
function waitForSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

waitForSuccess().then((msg) => {
  console.log(msg); // بعد 3 ثواني → Success
});
//================================================
//q13
let array = [1, 3, 7, 2, 4];

const findLargestNumber = (array) => {
  return Math.max(...array);
};

console.log(findLargestNumber(array));
//=================================================================
//q14
function getKeys(obj) {
  return Object.keys(obj);
}

console.log(getKeys({ name: "John", age: 30 }));
//=============================================================
//q15
 function splitIntoWords(str) {
  return str.split(" ");
}

 
console.log(splitIntoWords("The quick brown fox"));
 //================end of question one===================//
 //q2
 //1))forEach is a method available only for arrays in JavaScript.

//  Key points:

// Works only on arrays.

// Does not return a value (always undefined).

// Cannot use break or continue inside it

// for...of is a loop in JavaScript that works on any iterable object
// (e.g., arrays, strings, maps, sets).

// Key points:

// Can use break and continue.

// Works on arrays and other iterables.

// Easier to read sometimes.

// Good when you want flexible iteration.

//  When to use each?
//  Use forEach when:

// You want to run code on all elements without stopping.

// You don’t need break or continue.

// Code is simple and direct.



// Use for...of when:

// You might need to stop the loop (using break).

// You want to skip certain iterations (using continue).

// Working with strings, sets, or maps.

// You want a clear and flexible loop.



// What is Hoisting and the Temporal Dead Zone (TDZ)?
// Hoisting


// Hoisting is JavaScript's behavior of moving declarations (variables and functions) to the top of their scope during compilation.


// Only declarations are hoisted, not initializations.


// Example:
// console.log(x); // undefined
// var x = 5;

// Explanation:


// The declaration var x; is hoisted to the top.


// Initialization x = 5 stays in place, so console.log(x) prints undefined.


// Functions:
// console.log(foo()); // "Hello"
// function foo() { return "Hello"; }



// Function declarations are fully hoisted (both name and body).



// Temporal Dead Zone (TDZ)


// The TDZ is the time between entering a scope and the variable being declared with let or const.


// Accessing a variable in its TDZ causes a ReferenceError.


// Example:
// console.log(a); // ReferenceError
// let a = 10;



// let and const are hoisted, but cannot be accessed before declaration.



// 3. Main differences between == and ===
// Feature== (Equality)=== (Strict Equality)Type CheckingNo (performs type coercion)Yes (types must match)Example'5' == 5 → true'5' === 5 → falseUse CaseRarely recommendedRecommended for accuracy
// Example:
// console.log('5' == 5);  // true (string is converted to number)
// console.log('5' === 5); // false (different types)


// 4. How try-catch works and why it is important in async operations
// try-catch


// Used to handle errors in code so the program doesn’t crash.


// Syntax:


// try {
//   // code that might throw error
// } catch (error) {
//   // handle error
// } finally {
//   // optional, always runs
// }

// Example:
// try {
//   let result = riskyOperation();
//   console.log(result);
// } catch (err) {
//   console.log("Error occurred:", err.message);
// }

// In async operations


// Errors in async code (like fetch) can break the program.


// Using try-catch with async/await allows graceful handling:


// async function fetchData() {
//   try {
//     let response = await fetch('https://api.example.com/data');
//     let data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log("Failed to fetch data:", err.message);
//   }
// }


// 5. Difference between Type Conversion and Coercion
// Type Conversion (Explicit)


// Programmer manually converts type.


// let str = "123";
// let num = Number(str); // explicit conversion
// console.log(num); // 123

// Type Coercion (Implicit)


// JavaScript automatically converts type during operations.


// console.log('5' - 2);  // 3 (string is converted to number)
// console.log('5' + 2);  // '52' (number is converted to string)


// If you want, I can make a super compact cheat sheet for all these JS concepts with code examples in one page, so you can revise them super fast before your exam.
// Do you want me to do that?
