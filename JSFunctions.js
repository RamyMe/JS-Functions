console.log("JavaScript : Functions");
let ano=()=>console.log("Anonymous function") 
let iif=()=>console.log("IIFE function") 
let arrfun=()=>console.log("Arrow function") 
//Do the below programs in anonymous function & IIFE
// a. Print odd numbers in an array

var arr=[1,2,3,4,5,6,6,7,8,8,9,9,10];
var arr1=[34,53,67,89,23,45,62,43,34,23,45,20,12]
let stringArray = ["tut","apple", "banana", "cherry","nixin","alla","ramar"];
let oddnum=function(aru){
    for(let i=0;i<=aru.length;i++)
    {
        if(aru[i]%2!==0){
        console.log(aru[i]);
        }
    }
}
console.log("Odd Numbers :");
ano();
oddnum(arr);

iif();
//console.log("Odd Numbers :");
(function(aru){
    for(let i=0;i<=aru.length;i++)
    {
        if(aru[i]%2!==0){
        console.log(aru[i]);
        }
    }
})(arr);

//Convert all the strings to title caps in a string array

let titleCapsArray = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
}(stringArray);
console.log("Tittle Caps :");
ano();
console.log(titleCapsArray);

iif();
//console.log("Tittle Caps :");
let capsarr=(function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
})(stringArray);
console.log(capsarr);

//Sum of all numbers in an array
// Using Anonymous Function
console.log("Sum of all numbers in an array :");
ano();
const sum = function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
};
const result = sum(arr);
console.log(result); 

// Using IIFE
const result1 = (function(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  }, 0);
})(arr);
iif();
//console.log("Sum of all numbers in an array :");
console.log(result1); 

//Return all the prime numbers in an array
let primeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
};
console.log("Prime numbers :");
ano();
console.log(primeNumbers(arr));
 
let primeNumbers1 = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
})(arr);
iif();
//console.log("Prime numbers :");
console.log(primeNumbers1);

//Return all the palindromes in an array
let palindromes = function(arr) {
    return arr.filter(function(str) {
        // Convert the string to lowercase and remove non-alphanumeric characters
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Check if the cleaned string is a palindrome
        return cleanStr === cleanStr.split('').reverse().join('');
    });
};
console.log("Palindromes :");
ano();
console.log(palindromes(stringArray));

let palindromes1 = (function(arr) {
    return arr.filter(function(str) {
        // Convert the string to lowercase and remove non-alphanumeric characters
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Check if the cleaned string is a palindrome
        return cleanStr === cleanStr.split('').reverse().join('');
    });
})(stringArray);
iif();
//console.log("Palindromes :");
console.log(palindromes1);

//Return median of two sorted arrays of the same size.
const findMedian = (function () {
    return function(arr, arr1) {
      const mergedArray = [...arr, ...arr1].sort((a, b) => a - b);
      const length = mergedArray.length;
  
      if (length % 2 === 0) {
        // If the length is even, return the average of the middle two elements
        const midIndex1 = length / 2 - 1;
        const midIndex2 = length / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
      } else {
        // If the length is odd, return the middle element
        const midIndex = Math.floor(length / 2);
        return mergedArray[midIndex];
      }
    };
  })();
  const median = findMedian(arr, arr1);
  console.log("median of two sorted arrays :");
  console.log("Median:", median);
  
//Remove duplicates from an array
const removeDuplicates = function(arr) {
    return Array.from(new Set(arr));
};
const uniqueArray = removeDuplicates(arr);
console.log("Remove duplicates from an array :");
ano();
console.log(uniqueArray);

const uniqueArray1 = (function(arr) {
    return Array.from(new Set(arr));
})([1, 2, 3, 4, 4, 5, 6, 6]);
iif();
//console.log("Remove duplicates from an array :");
console.log(uniqueArray1);

//Rotate an array by k times
var rotateArray = function(arr, k) {
    for (var i = 0; i < k; i++) {
        var lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
};
var rotations = 6;
var rotatedArray = rotateArray(arr, rotations);
console.log("Rotate an array by k times :");
ano();
console.log(rotatedArray);


var rotations1 = 4;
var rotatedArray = (function(arr, k) {
    for (var i = 0; i < k; i++) {
        var lastElement = arr.pop();
        arr.unshift(lastElement);
    }
    return arr;
})(arr.slice(), rotations1);
iif();
//console.log("Rotate an array by k times :");
console.log(rotatedArray);

//Do the below programs in arrow functions.
//Print odd numbers in an array
const printOddNumbers = (arr) => {
    arr.forEach((number) => {
        if (number % 2 !== 0) {
            console.log(number);
        }
    });
};
arrfun();
console.log("Odd Numbers :");
printOddNumbers(arr);

//Convert all the strings to title caps in a string array
const convertToTitleCase = (arr) => {
    return arr.map((str) => {
        return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
    });
};
const titleCaseArray = convertToTitleCase(stringArray);
arrfun();
console.log("title caps :");
console.log(titleCaseArray);

//Sum of all numbers in an array
// Using Arrow Function
const sumArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const result01 = sumArray(arr);
arrfun();
console.log("sum of array :");
console.log(result01); 

//Return all the prime numbers in an array
const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getPrimeNumbers = arr => arr.filter(num => isPrime(num));
const primeNumbers01 = getPrimeNumbers(arr);
arrfun();
console.log("Prime numbers :");
console.log(primeNumbers01);

//Return all the palindromes in an array
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

const findAllPalindromes = arr => arr.filter(word => isPalindrome(word));

const palindromes01 = findAllPalindromes(stringArray);
arrfun();
console.log("palindromes in an array :");
console.log(palindromes01);


