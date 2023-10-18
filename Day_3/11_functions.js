// Define a function named 'hello' using an arrow function.
const hello = () => {
    console.log("Hey how are you. I am toh fine yaar"); // Log a message to the console.
    return "hi"; // Return the string "hi".
}

// Define a function named 'onePlusAvg' that takes two parameters 'x' and 'y'.
function onePlusAvg(x, y) {
    return 1 + (x + y) / 2; // Calculate 1 plus the average of 'x' and 'y' and return the result.
}

// Define a function named 'sum' using an arrow function.
const sum = (p, q) => {
    return p + q; // Calculate the sum of 'p' and 'q' and return the result.
}

// Declare and initialize variables 'a', 'b', and 'c' with values 1, 2, and 3 respectively.
let a = 1;
let b = 2;
let c = 3;

// Call the 'hello' function and store its return value in the variable 'v'.
let v = hello();

// Log the value stored in variable 'v' to the console.
console.log(v);

// Calculate and log the result of 'onePlusAvg' function for different pairs of 'a' and 'b', 'b' and 'c', 'a' and 'c'.
console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of b and c is ", onePlusAvg(b, c));
console.log("One plus Average of a and c is ", onePlusAvg(a, c));

// Call the 'sum' function with arguments 9 and 7, and log the result.
console.log(sum(9, 7));
