var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var arr = [];
    return (arr.concat.apply(arr, arrays));
}
// console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, ", Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
// console.log(myCar.getModel());  // Output: "Model: Corolla"
function processValue(value) {
    return typeof value === 'string' ? value.length : value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    else {
        var highestPriced_1 = products[0];
        products.forEach(function (product) {
            if (product.price > highestPriced_1.price) {
                highestPriced_1 = product;
            }
        });
        return highestPriced_1;
    }
}
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 }
// ];
// console.log(getMostExpensiveProduct(products));  
// Output: { name: "Bag", price: 50 }
