function formatString(input: string, toUpper?: boolean) : string{ 
    if(toUpper === true || toUpper === undefined){
        return input.toUpperCase()
    } else{
        return input.toLowerCase();
    }
}


function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter((item) => item.rating > 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[]{ 
    let arr : T[] = [];
    return (arr.concat(...arrays));
}


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


function processValue(value: string | number): number{
    return typeof value  === 'string' ? value.length : value * 2
}



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



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    if (day === Day.Saturday || day == Day.Sunday) {
        return "Weekend";
    } else{
        return "Weekday";
    }
  }


const createPromise = (n: number) : Promise<number> =>{
    return new Promise((resolve, reject) =>{
        if (n > 0) {
            setTimeout(() =>{
                resolve( n * n)
            }, 1000);
        } else {
            reject("Error: Negative number not allowed")
        }
    })
}

async function squareAsync(n: number): Promise<number> {
    // const squaredNumber: number = await createPromise(n)
    return await createPromise(n);
}