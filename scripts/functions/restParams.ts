function addNumbers(...nums:number[]) {   
    let sum:number = 0; 
    
    for(let i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 

//  addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)