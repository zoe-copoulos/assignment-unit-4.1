console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {

  return 'Hello, ' + name + '!';
  
}

helloName('Zoe')
// Remember to call the function to test

console.log (helloName ('Zoe'));

// I did, and it's logging but still not passing the test. I tried using literal Your Name as my name, as well, in an attempt to make the red text go away but this was not as clever as I thought it might be
// JK, it was a space after 'Hello, ' in the return. Leaving the above for proof of braincells


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log ( 'in addNumbers', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
return answer;
  // return firstNumber + secondNumber;
}

console.log (addNumbers( 1, 4) );


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  console.log ( 'in multiplyThree', firstNumber, secondNumber, thirdNumber);
  let answer = firstNumber * secondNumber * thirdNumber;
return answer;
  // return firstNumber + secondNumber;
}

console.log (multiplyThree( 1, 4, 5) );



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  
  } else {
    return false;
}
}


// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('Test is positive', isPositive(7));
console.log('Test if negative', isPositive(-7));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let numbers = [1,2,3,4,5]
function getLast(array) {
  if (array.length === 0) {
    return 'undefined';
  }
  return array[array.length-1];
  
}

console.log(getLast(numbers));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let moreNumbers = [6, 7, 8, 9, 10]
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(find(7,(moreNumbers)));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {


}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
