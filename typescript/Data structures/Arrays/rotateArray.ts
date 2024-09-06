// Implement a function that rotates an array by a given number of steps.
// For example, rotating [1, 2, 3, 4, 5] by 2 steps would yield [4, 5, 1, 2, 3].

function rotateArray(arr: number[], steps: number): number[] {
    //check if array is empty and if steps is 0.
    if (arr.length === 0 || steps === 0) 
        return [-1];

    //if steps is a positive number, the last element of the array becomes first. 
    //if steps is negative, the first element becomes the last.
    if (steps > 0){
        for (let i = 0; i < steps; i++){
            const value = arr.pop(); //pop() removes last element
            if (value != undefined)
                arr.unshift(value); // unshift() puts element to the front
        }
    } else {
        for (let i = 0; i > steps; i--){
            const value = arr.shift(); //shift removes first element
            if (value != undefined)
                arr.push(value); //push adds it to the end
        }
    }
    return arr;
}

const testArray1: number[] = [1, 2, 3.5, 4.5];
const testArray2: number[] = [1.1, 2.2, 3.3];
const testArray3: number[] = [-1, -2, -3, 3.3];


console.log("rotateArray testArray1 with 2 steps - should be [3.5, 4.5,1,2]", rotateArray(testArray1, 2));
console.log("rotateArray testArray2 with -1 steps - should be [2.2, 3.3, 1.1];", rotateArray(testArray2, -1));
console.log("rotateArray testArray3 with -3 steps - should be [3.3, -1, -2, -3];", rotateArray(testArray3, -3));

// run with "npx tsc rotateArray.ts && node rotateArray.js"