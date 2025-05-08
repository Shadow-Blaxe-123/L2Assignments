function formatString(input, toUpper) {
    if (toUpper === true || toUpper === undefined) {
        return input.toUpperCase();
    }
    else {
        return input.toLowerCase();
    }
}
// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"
function filterByRating(items) {
    return items.filter(function (item) { return item.rating > 4; });
}
// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];
//   console.log(filterByRating(books) )
//   // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
/*
Problem 3:
Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

Example:

*/
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var arr = [];
    return (arr.concat.apply(arr, arrays));
}
console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
