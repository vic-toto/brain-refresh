// Write a function that takes two arrays and returns
// a new array containing only the elements that are 
// present in both arrays (intersection).

function intersectArrays(arr1: number[], arr2: number[]): number[] {
    // 1. check if arrays are empty
    if (arr1.length === 0 || arr2.length === 0)
        return [-1];

    //2. declare new array to hold result 
    let res: number[] = [];

    //3. lets loop through the second array, for each element of the first and then save the same. 
    for (const element1 of arr1){
        for (const element2 of arr2)
            if (element1 === element2)
                res.push(element1);
    }

    return (res);
}

const testArray1: number[] = [1, 2, 3.5, 4.5];
const testArray2: number[] = [1,2];
const testArray3: number[] = [1.1, 2.2, 3.3];
const testArray4: number[] = [-1, -2, -3, 3.3];

console.log("Intersection testArray1 and 2 - should be [1,2]", intersectArrays(testArray1, testArray2));
console.log("Intersection testArray3 and 4 - should be [3.3]", intersectArrays(testArray3, testArray4));

// run with "npx tsc intersectArray.ts && node intersectArray.js"
