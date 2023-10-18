// Declare an array 'num' containing numbers.
let num = [3, 5, 1, 2, 4]

// Loop through the 'num' array using a for loop and log each element.
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

// Use a forEach loop to iterate through the 'num' array and log the square of each element.
num.forEach((element) => {
  console.log(element * element)
})

// Convert a string 'name' into an array of characters using 'Array.from'.
let name = "Harry"
let arr = Array.from(name)

// Log the 'arr' array containing individual characters.
console.log(arr)

// Use a for...of loop to iterate through the 'num' array and log each element.
for (let item of num) {
  console.log(item)
}

// Use a for...in loop to iterate through the 'num' array and log each element.
for (let i in num) {
  console.log(num[i])
}
