// Explicit type annotation
let numbs: number[] = [1, 2, 3, 4, 5];
let frts: string[] = ["Apple", "Banana", "Orange"];

// Using generic array type
let values: Array<number> = [10, 20, 30, 40];


// numbers.push(6);   // Adds to the end
// console.log(numbers); // [1, 2, 3, 4, 5, 6]

// numbers.pop();     // Removes from the end
// console.log(numbers); // [1, 2, 3, 4, 5]

// fruits.unshift("Mango"); // Adds to the beginning
// console.log(fruits); // ["Mango", "Apple", "Banana", "Orange"]

// fruits.shift(); // Removes from the beginning
// console.log(fruits); // ["Apple", "Banana", "Orange"]

// let squaredNumbers = numbers.map((num) => num * num);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//  numbers: number[] = [1, 2, 3, 4, 5];
// numbers.splice(2,3); // Removes one element at index 2
// console.log(numbers); // [1, 2, 4, 5]

//  numbers: number[] = [1, 2, 3, 4, 5];
// let newNumbers = numbers.slice(1, 3);
// console.log(newNumbers); // [2, 4]
let strings = ["To" , "day ", "is", "sunday"]
console.log(strings.join(" "))