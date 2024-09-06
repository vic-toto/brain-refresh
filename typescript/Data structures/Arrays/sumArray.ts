// Implement a function that returns the sum of all elements in an array.
// Ensure that the function handles both empty arrays and arrays with different 
// types of numbers (integers, floating-point).

export function sumArray(arr: number[]): number {

    //check if array is empty
    if (arr.length === 0) 
        return -1;

    // declare variable to hold sum 
    let res: number = 0;
    
    // iterate the array and sum the content of each i
    for (const element of arr)
        res += element;

    return (res)
}

// Test data
const testArray1: number[] = [1, 2, 3.5, 4.5];
const testArray2: number[] = [];
const testArray3: number[] = [1.1, 2.2, 3.3];
const testArray4: number[] = [-1, -2, -3];

// Running the function with different test cases
console.log('Sum of array 1:', sumArray(testArray1)); // Output: 11
console.log('Sum of empty array:', sumArray(testArray2)); // Output: -1
console.log('Sum of array 3:', sumArray(testArray3)); // Output: 6.6
console.log('Sum of negative numbers:', sumArray(testArray4)); // Output: -6

// run with "npx tsc sumArray.ts && node sumArray.js"
