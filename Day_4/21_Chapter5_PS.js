// Practice Problem 1
// Declare an array 'arr' with initial values.
// Prompt the user to enter a number, convert it to an integer, and add it to the end of the array using 'push'.
// Log the modified 'arr'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Practice Problem 2
// Declare an array 'arr' with initial values.
// Use a do-while loop to repeatedly prompt the user to enter numbers until 0 is entered.
// Convert each input to an integer and add it to the end of the array using 'push'.
// Log the modified 'arr'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 83]
// let a;
// do {
//   a = prompt("Enter a number")
//   a = Number.parseInt(a)
//   arr.push(a)
// } while (a != 0);
// console.log(arr)

// Practice Problem 3
// Declare an array 'arr' with numeric values.
// Use the 'filter' method to create a new array 'n' containing elements that are divisible by 10.
// Log the 'n' array.
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x) => {
//   return x % 10 == 0
// })
// console.log(n)

// Practice Problem 4
// Declare an array 'arr' with numeric values.
// Use the 'map' method to create a new array 'n' where each element is the square of the original element.
// Log the 'n' array.
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x) => {
//   return x * x
// })
// console.log(n)

// Practice Problem 5
// Declare an array 'arr' with numeric values.
// Use the 'reduce' method to calculate the product of all elements in 'arr'.
// Log the result, which is the product of all elements.
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n)
