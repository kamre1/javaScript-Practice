// Declare an array 'num' containing numbers.
let num = [1, 2, 3, 34, 4]

// Convert the 'num' array to a string and store it in 'b'.
let b = num.toString()

// Log 'b' and its data type.
console.log(b, typeof b)

// Convert the 'num' array to a string with " and " as the separator and store it in 'c'.
let c = num.join(" and ")

// Log 'c' and its data type.
console.log(c, typeof c)

// The following lines are commented out but show how various array methods work:

// Remove and return the last element from the 'num' array using 'pop'.
// let r = num.pop()
// console.log(num, r)

// Add an element (56) to the end of the 'num' array using 'push'.
// 'push' returns the new array length.
// let r = num.push(56)
// console.log(num, r)

// Remove and return the first element from the 'num' array using 'shift'.
// let r = num.shift()
// console.log(r, num)

// Add an element (78) to the beginning of the 'num' array using 'unshift'.
// 'unshift' returns the new array length.
let r = num.unshift(78)

// Log the new length of the 'num' array and the modified 'num' array.
console.log(r, num)

// Log 'r', which is the new length returned by 'unshift'.
console.log(r)
