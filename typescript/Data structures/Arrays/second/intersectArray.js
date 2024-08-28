// Write a function that takes two arrays and returns
// a new array containing only the elements that are 
// present in both arrays (intersection).
function intersectArrays(arr1, arr2) {
    // 1. check if arrays are empty
    if (arr1.length === 0 || arr2.length === 0)
        return [-1];
    //2. declare new array to hold result 
    var res = [];
    //3. lets loop through the second array, for each element of the first and then save the same. 
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var element1 = arr1_1[_i];
        for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
            var element2 = arr2_1[_a];
            if (element1 === element2)
                res.push(element1);
        }
    }
    return (res);
}
var testArray1 = [1, 2, 3.5, 4.5];
var testArray2 = [1, 2];
var testArray3 = [1.1, 2.2, 3.3];
var testArray4 = [-1, -2, -3, 3.3];
console.log("Intersection testArray1 and 2 - should be [1,2]", intersectArrays(testArray1, testArray2));
console.log("Intersection testArray3 and 4 - should be [3.3]", intersectArrays(testArray3, testArray4));
// run with "npx tsc intersectArray.ts && node intersectArray.js"
