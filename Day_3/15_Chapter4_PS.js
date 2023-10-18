// Chapter 4 - Practice Set
// Problem 1
let str = "Har\""
console.log(str.length) // Log the length of the 'str' string, which is 4.

// Problem 2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox2';

// Check if 'word' is included in the 'sentence' and log the result.
console.log(sentence.includes(word))

// Create a sentence using template literals to indicate whether 'word' is in 'sentence'.
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Problem 3
// Convert 'word' to lowercase and log the result.
console.log(word.toLowerCase())

// Convert 'word' to uppercase and log the result.
console.log(word.toUpperCase())

// Problem 4
let str2 = "Please give Rs 1000"

// Extract the numeric amount from 'str2' using parseInt and log it.
let amount = Number.parseInt(str2.slice(15))
console.log(amount)

// Log the data type of the 'amount' variable, which is 'number'.
console.log(typeof amount)

// Problem 5
let friend = "Deepika"

// Attempt to change the character at index 3 of 'friend' to "R" (which is not possible).
// Log 'friend' to show that the string is immutable.
friend[3] = "R"
console.log(friend) // friend is not changed, because a string is immutable.
