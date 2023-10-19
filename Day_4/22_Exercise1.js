// Import the 'prompt-sync' module to get user input.
const prompt = require("prompt-sync")();

// Generate a random number between 1 and 100 and store it in 'a'.
let a = Math.round((Math.random() * 100) + 1);

// Initialize 'b' to 'undefined' and 'score' to 100.
let b = undefined;
let score = 100;

// Use a do-while loop to repeatedly prompt the user to enter a number and provide feedback.
do {
  // Prompt the user to enter a number and store it in 'b'.
  b = prompt("Enter a number ");

  // Decrease the 'score' by 1 for each guess.
  score--;

  // Compare 'b' with the random number 'a' and provide feedback based on the comparison.
  if (b > a)
    console.log("Your guess is greater than the number.");
  else if (b < a)
    console.log("Your guess is less than the number.");
  else
    console.log("Your guess is correct.");

} while (score !== 0);

// After the loop, check if 'score' reached 0, and if so, reveal the correct number.
if (score === 0)
  console.log("The number was", a);

// Log the final score.
console.log("Your score is", score);
