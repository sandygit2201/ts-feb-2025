let score: number = 95; 
switch(true) { 
   case (score > 90): { 
      console.log("Excellent"); 
     
   } 
   case (score>80): { 
      console.log("Good"); 
      
   } 
   case (score>50): {
      console.log("Fair"); 
     
   } 
   case (score<50): { 
      console.log("Poor"); 
     
   }  
   default: { 
      console.log("Invalid choice"); 
                 
   } 
}