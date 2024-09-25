// Function to calculate the cube of a number
function cube(number) {
    return number * number * number;
}

// Array of numbers to calculate cube
let numbers = [5, 15, 20];

// Loop through the numbers and log the cube of each
numbers.forEach(function(num) {
    console.log(`The cube of ${num} is: ${cube(num)}`);
});
