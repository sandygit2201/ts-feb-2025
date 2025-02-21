var lockObj = {
    lock_id: "4523fdr0",
    isDurable: true
 };
 let userDetails ={
    email:"a@b.com",
    password:"abcxyz"
 }

 function login(userDetails:{email:string,password:string}){
    // set username userDetails.email
    // set password field with userDetails.passwrod
    console.log("userEmail::"+userDetails.email)
    console.log("userPassword::"+userDetails.password)
 }

//  function callLockFunc(obj:any) {
 function callLockFunc(obj:{lock_id:string, isDurable:boolean}) {
    var lock_id = obj.lock_id, isDurable = obj.isDurable;
    console.log("The destructured lock_id value is " + lock_id);
    console.log("The destructured isDurable value is " + isDurable);
 }
 callLockFunc(lockObj);
 lockObj.isDurable = false;
 lockObj.lock_id = "eredf";
 callLockFunc(lockObj);