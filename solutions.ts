function formatString(input: string, toUpper?: boolean) : string{ // Would be simpler 
    if(toUpper === true || toUpper === undefined){
        return input.toUpperCase()
    } else{
        return input.toLowerCase();
    }
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => item.rating > 4)
}

// const books = [
//     { title: "Book A", rating: 4.5 },
//     { title: "Book B", rating: 3.2 },
//     { title: "Book C", rating: 5.0 }
//   ];
  
//   console.log(filterByRating(books) )
//   // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]


function concatenateArrays<T>(...arrays: T[][]): T[]{ 
    let arr : T[] = [];
    return (arr.concat(...arrays));
}

// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]