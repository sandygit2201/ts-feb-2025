import { sumOfTwoNumbers } from "./functions/add";
import {sub} from "./functions/sub"
import multiply from "./functions/mul";

let sum = sumOfTwoNumbers(4,5)
let diff = sub(3,4)
let multiplicationOfTwoNumbers = multiply(2,3)

console.log(sum)
console.log(diff)
console.log(multiplicationOfTwoNumbers)

// type of exports - named export , default export