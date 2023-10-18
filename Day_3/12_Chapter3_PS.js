let marks = {
    harry: 90,
    shubham: 9,
    lovish: 56,
    Monika: 4
}

// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    // Loop through the keys of the 'marks' object and print the name and marks of each student.
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem No 2
for (let key in marks) {
    // Loop through the keys in the 'marks' object and print the name and marks of each student.
    // console.log("The marks of " + key + " are " + marks[key])
}

// Problem No 3
let cn = 43;
let i;
while (i != cn) {
    console.log("Try again"); // Print "Try again" until the user enters the correct number.
    i = prompt("Enter a number"); // Prompt the user for input and store it in 'i'.
}
console.log("You have entered a correct number"); // Print a message when the correct number is entered.

// Problem No 4
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4; // Calculate and return the mean (average) of four numbers.
}

console.log(mean(4, 5, 6, 7)); // Call the 'mean' function and print the result.
