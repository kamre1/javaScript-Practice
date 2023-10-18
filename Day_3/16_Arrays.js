// Declare an array 'marks_class_12' containing various data types.
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]

// Log the values at different indices of the 'marks_class_12' array.
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])

// Attempt to access an index that does not exist (index 6).
// This will log 'undefined' because it's an out-of-bounds index.
console.log(marks_class_12[6])

// Log the length of the 'marks_class_12' array using the 'length' property.
console.log("The length of marks_class_12 is", marks_class_12.length)

// Add a new value (89) to the end of the 'marks_class_12' array at index 6.
marks_class_12[6] = 89

// Change the value at index 0 of the array from 91 to 96.
marks_class_12[0] = 96

// Log the modified 'marks_class_12' array.
console.log(marks_class_12)

// Log the data type of the 'marks_class_12' array, which is 'object'.
console.log(typeof marks_class_12)
