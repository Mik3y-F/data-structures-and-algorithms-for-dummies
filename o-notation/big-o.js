/*

* Big O Notation
*
* What is it?
* It is a system for classifying and comparing algorithms (performance)
*     - It allows for a precise vocabulary when discussing multiple code implimentations
*       for a similar problem space
*     - It makes it easy to discuss tradeoffs for various algorithms
*     - Makes debugging easier i.e. Allows you to more easily identify inefficiencies in a
*       solutions implementation

*/

// Example: Write  function that calculates the sum of all numbers from 1 up to (& including) some number n

// Most intuitive approach
function addUpTo(n) {
    // O(5n+2) but regardless of the exact number, the number of ops grow roughly with n
    let total = 0;
    // Regardless of exact number, no. of ops grows roughly proportionally with n
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(`version 1: ${addUpTo(6)}`)


// Refer to Arithmetic Series Progression to understand how the below formula was derived
function addUpto_V2(n) { // O(3)
    return n * (n + 1) / 2 // 3 operations, regardless of size of n [*, +, /]
}

console.log(`version 2: ${addUpto_V2(6)}`)


// Which is Better: Faster? Less Memory-intensive? Readability?

// Time?
var t1 = performance.now()
addUpTo(1000000000)
var t2 = performance.now()
console.log(`version 1: Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

t1 = performance.now()
addUpto_V2(1000000000)
t2 = performance.now()
console.log(`version 2: Time Elapsed: ${(t2 - t1) / 1000} seconds.`)

// The Problem with Time
//  - Different machines will record different times [Not reliable]
//  - The same machine will record different times!
//  - Fast Algorithms -> Speed may not be precise enough


// If not then What?
// Let's count simple operations the computer has to perform

//  ENTER BIG O! -> A way to formalize fuzzy counting
//   allows us to talk about how the runtime of an algorith grows with inputs


// Simplifying Big O Expressions

// Rules of thumb - We only care about the broadest, fuzziest, big picture view
// 1. Constants don't matter O(2n) => O(n), O(500) => O(1) [constant run time], O(13n^2) => O(n^2)

// 2. Smaller terms don't matter O(n^2 + 5n + 8) => O(n^2)


// Big O shorthands
//  - Analyzing complexity with big O can get complicated
//  - There are several rules of thumb that can help
//  - These rules won't always work but are a helpful starting point

// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array by index/key is constant
// 4. In a loop, the complexity = length of loop times x complexity of what happens in the loop


// Time complexity => Analysis of the runtime of an algorithm as the size of inputs increases
// Space complexity => How much additional memory we need to allocate in order to run the code in our algorithm
// Auxiliary space complexity => Space required by the algorithm not including space taken up by inputs

// Space complexity in JS
// Rules of thumb
// 1. Most primitives (booleans, numbers, undefined, null) are constant space
// 2. Strings require O(n) space where, (n is the string length)
// 3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

function sum(array) {
    // Space Complexity => O(1), Time Complexity => O(n)
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    }
    return total;
}

function double(array) {
    // Space Complexity => O(n), Time Complexity => O(n)
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// Logarithms 
// Common Complexities O(1), O(n) and O(n^2)

// Logarithms are the inverse of exponiantion
// Log 8 = 3, assuming log === log base 2 => 2^3 = 8

// Logarithmic time complexity is great

// - Certain searching algorithms have logarithmic time comlexity
// - Efficient sorting algorithms involve logarithms
// - Recursion sometimes involves logarithmic space complexity



/* 

* Summary
* - We use big o to analyze the performance of an algorithm
* - Big O gives us a high level understanding of space or space complexity of an algorithm
* - Big O doesn't care about precision only about general trends (linear? quadratic? constant?)
* - space or time complexity of an algorithm is not affected by the hardware on which it is run only on the algorithm

*/