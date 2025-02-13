const numbers: number[] = [10, 20, 30, 40];

// Using forEach
numbers.forEach((A, B) => {
  console.log(`Index: ${B}, Value: ${A}`);
});

for(let i=0; i<numbers.length;i++){
    console.log(`Index: ${i}, Value: ${numbers[i]}`);
}
