var numb: number = 5; 
var i:number; 
var factorial = 1; 

for(i = numb;i>=1;i--) {
   factorial *= i;
}
//   factorial -  i
//itr1  1*5     4 
//itr2   1*5*4   3     

console.log(factorial)