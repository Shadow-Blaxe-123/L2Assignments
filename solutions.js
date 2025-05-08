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
/*
Problem 2:
Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
Example:


*/
function filterByRating(items) {
    return items.filter(function (item) { return item.rating > 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]
