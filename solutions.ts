function formatString(input: string, toUpper?: boolean) : string{
    if(toUpper === true || toUpper === undefined){
        return input.toUpperCase()
    } else{
        return input.toLowerCase();
    }
}

// console.log(formatString("Hello"));          // Output: "HELLO"
// console.log(formatString("Hello", true));   // Output: "HELLO"
// console.log(formatString("Hello", false));  // Output: "hello"
