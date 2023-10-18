// The following code has been commented out. It initializes three arrays, calculates their lengths,
// deletes an element from 'num,' concatenates arrays, sorts 'num,' and uses 'splice' and 'slice' methods.

// Declare three arrays 'num,' 'num_more,' and 'num_even_more.'
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]

// Log the length of the 'num' array.
// console.log(num.length)

// Delete the element at index 0 of 'num.'
// delete num[0]

// Log the new length of the 'num' array after deleting an element.
// console.log(num.length)

// Concatenate 'num,' 'num_more,' and 'num_even_more' into a new array 'newArray.'
// let newArray = num.concat(num_more, num_even_more)

// Log the 'newArray,' 'num,' and 'num_more' arrays.
// console.log(newArray)
// console.log(num, num_more)

// Sort 'num' in descending order using a custom comparison function.
// let compare = (a, b) => {
//     return b - a
// }
// num.sort(compare)

// Reverse the 'num' array after sorting.
// num.reverse()

// Log the sorted and reversed 'num' array.
// console.log(num)

// Declare an array 'num' with numeric values.
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]

// Use the 'splice' method to remove elements starting from index 2 (inclusive) up to index 6 (exclusive),
// and insert new values (1021, 1022, 1023, 1024, 1025) in their place.
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)

// Log the modified 'num' array after using 'splice' and the values that were deleted.
// console.log(num)
// console.log(deletedValues)

// Use the 'slice' method to create a new array 'newNum' containing elements from index 3 (inclusive) to index 5 (exclusive).
let newNum = num.slice(3, 5)

// Log the 'newNum' array.
console.log(newNum)
