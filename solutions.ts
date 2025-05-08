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


class Vehicle {
    constructor(private make:string, public year:number){}
    getInfo(){
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make:string, year:number, private model:string) {
        super(make,year);
    }
    getModel(){
        return `Model: ${this.model}`;
    }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"


function processValue(value: string | number): number{
    return typeof value  === 'string' ? value.length : value * 2
}
// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10));      // Output: 20


interface Product {
    name: string;
    price: number;
  }
  function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length ===0) {
        return null;
    } else {
        let highestPriced = products[0];
        products.forEach((product) => {
            if (product.price > highestPriced.price) {
                highestPriced = product;
            }
        })
        return highestPriced;
    }
}

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 }
// ];

// console.log(getMostExpensiveProduct(products));  
// Output: { name: "Bag", price: 50 }