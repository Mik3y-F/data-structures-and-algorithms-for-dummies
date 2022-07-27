/*

* Problem Solving Approach

* ---Objectives---
* Define what an algorithm is
* Devise a plan to solve algorithms
* Compare and contrast problem solving patterns including frequency counters, two pointer problems and deivide and conquer

*/


// Algorithm - A process or set of steps to accomplish a certain task

// How to improve on solving problems
// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns

// Problem Solving
// - Understand the problem
// - Explore Concrete Examples
// - Break it Down
// - Solve/Simplify
// - Look back and refactor


// 1. Understand the problem

// i.   Can I restate the problem in my own words [paraphrase]
// ii.  What are the inputs that go into the problem
// iii. What are the outputs that should come from the solution to the problem
// iv.  Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// v.   How should I label the important pieces of data that are part of the problem.


// ===============================================================
// Write a function that takes two numbers and returns their sum.
// ===============================================================

// 1. "implement addition" [restate problem]
// 2. -  ints? [interrogate inputs]
//    -  floats?
//    -  what about strings for large numbers?
// 3. - int? float? string? [interrogate possible outputs]
// 4. - ****
// 5. - ****



// 2. Exploring examples

// Can help you understand the problem better
// Examples also provide sanity checks that your eventual solution works how it should

// - Start with Simple Examples
// - Progress to More Examples
// - Explore examples with Empty Inputs
// - Explore examples with Invalid Inputs


// ============================================================================
// Write a function that takes a string and returns counts of each character in the string
// =============================================================================

// Simple Examples
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}

// Complex Inputs
"my phone number is #182763" // - numbers? special characters? spaces?
"Hello hi" // - casing?

// Empty Inputs
// charCount("") // null? false? undefined? error?

// Invalid Inputs
// charCount(null) // input -> number? undefined? null? boolean?



// 3. Break it down

// Explicitly write out the steps you need to take
// This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be th
}

function charCount(str) {

    // make object to return at end
    // loop over string, for each character ...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it and set value to 1
    // if character is sth else(space, period, etc.) don't do anything
    // return object at end

}


// 4. Solve or Simplify

// Solve the problem if you can't solve a simpler problem

// - Find the core difficulty in what you're trying to do
// - Temporarily ignore that difficulty
// - Write a simplified solution
// - Then incorporate that difficulty back in

// function charCount(str) {
//     var result = {}
//     for (let i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             if (result[char] > 0) {
//                 result[char]++;
//             } else {
//                 result[char] = 1;
//             }
//         }
//     }
//     return result;
// }

console.log(charCount("hello"))
console.log(charCount("Hi there!"))

// Write what You can!


// 5. Look Back and Refactor

// Refactoring Questions

// -  Can you check the result?
// -  Can you derive the result differently?
// -  Can you understand it at a glance?
// -  Can you use the result or method for some other problem?
// -  Can you improve the performance of your solution?
// -  Can you think of other ways to refactor? [style guide]
// -  How have other people solved this problem

// function charCount(str) {
//     var obj = {}
//     for (var char of str) {
//         char = char.toLowerCase()
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

function charCount(str) {
    var obj = {}
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0 - 9)
        !(code > 64 && code < 91) && // upper alpha (A - Z)
        !(code > 96 && code < 123)) // lower alpha (a - z)
        return false

    return true
}



/*

* ---RECAP!---
* - understand the problem
* - explore concrete examples
* - break it down
* - solve/simplify
* - look back and refactor

*/