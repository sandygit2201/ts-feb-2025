// concatenation

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // "John Doe"
let fullNameTemplate = `${firstName} ${lastName}`;  // "John Doe"

// Length 

let text = "TypeScript";
console.log(text.length);  // 10

// Uppercase & Lowercase
console.log(text.toUpperCase());  // "TYPESCRIPT"
console.log(text.toLowerCase());  // "typescript"


// Substring Extraction
console.log(text.substring(0, 4));  // "Type"
console.log(text.slice(2, 6));  // "peSc"
console.log(text.slice(-6));  // "Script" (from the end)


// Replacing Substrings
let sentence = "I love JavaScript!";
console.log(sentence.replace("JavaScript", "TypeScript"));  // "I love TypeScript!"
console.log(sentence.replace(/javascript/i, "TypeScript"));  // Case insensitive replace


// Splitting Strings
let words = "apple,banana,grape".split(",");
console.log(words);  // ['apple', 'banana', 'grape']

// Checking Substrings
console.log(sentence.includes("JavaScript"));  // true
console.log(sentence.startsWith("I love"));  // true
console.log(sentence.endsWith("TypeScript!"));  // false

// Repeating Strings
console.log("Hello ".repeat(3));  // "Hello Hello Hello "

// Converting to Number
let numStr = "123";
console.log(parseInt(numStr));  // 123
console.log(parseFloat("123.45"));  // 123.45




