/*

* Analyzing performance of arrays and objects in js through big-o
* Objectives
*  - Compare and contrast the runtime for arrays and objects, as well as bult-in methods

*/


// Objects => Unordered, key value pairs
// Good when:
//      - No order needed
//      - You need fast access/ insertion and removal

// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(1)
let instructor = {
    firstName: "Mike",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3]
}

console.log("Object.keys: O(N)", Object.keys(instructor))
console.log("Object.values: O(N)", Object.values(instructor))
console.log("Object.entries: O(N)",Object.entries(instructor))
console.log("hasOwnProperty: O(1)",instructor.hasOwnProperty("firstName"))


// Arrays => Ordered lists!
// - Used when you need order
// - When you need fast access/ insertion and removal(sort of ....)

// Insertion - It depends
// Removal - It depends
// Searching - O(N)
// Access - O(1)

let names = ["Michael", "Melissa", "Andrea"]

console.log(names[2]) // - Access is constant time

// Adding to end of an array is constant time [O(1)]
// Adding to the start of an array is O(n) because of re-indexing
// Removing from the beginning of an array is 0(n) because of re-indexing


// Built in Array Operations

// push - O(1)
// pop - O(1)
// shift - O(N)
// unshift - O(N)
// concat - O(N)
// slice - O(N)
// splice - O(N)
// sort - O(N * log N)
// forEach/map/filter/reduce - O(N)