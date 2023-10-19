// Declare an array 'arr' with numeric values.
let arr = [45, 23, 21]

// Use the 'map' method to create a new array 'a' where each element is the sum of the original value and its index.
let a = arr.map((value, index, array) => {
  // You can log 'value,' 'index,' and 'array' to see the elements and their indices.
  // console.log(value, index, array)
  return value + index
})

// Log the modified 'arr' array. (Uncomment to see the result)
// console.log(arr)

// Declare another array 'arr2' with numeric values.
let arr2 = [45, 23, 21, 0, 3, 5]

// Use the 'filter' method to create a new array 'a2' containing elements less than 10.
let a2 = arr2.filter((a) => {
  return a < 10
})

// Log the 'a2' array containing filtered values and the original 'arr2' array. (Uncomment to see the result)
// console.log(a2, arr2)

// Declare an array 'arr3' with numeric values.
let arr3 = [1, 2, 3, 5, 2, 1]

// Define a custom function 'reduce_func' to calculate the sum of two elements.
const reduce_func = (h1, h2) => {
  return h1 + h2
}

// Use the 'reduce' method to calculate the sum of all elements in 'arr3' using the 'reduce_func'.
let newarr3 = arr3.reduce(reduce_func)

// Log the result, which is the sum of all elements in 'arr3.
console.log(newarr3)
