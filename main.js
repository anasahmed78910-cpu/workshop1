 const sum=(n1,n2) =>{
    return n1+n2
 }
 console.log(sum(55,33));
 //object 
 const user={
   firstname :"anas",
   lastname :"ahmed",
   age :26,
   isadmin :false,
   fav:["football"],
   username :function(){
      console.log({this:this});
      
      return this.firstname+ " "+this.lastname
   }

 }
 console.log({user});
 console.log(Object.values(user));
 console.log(Object.keys(user));
 console.log(user.age);
 console.log(user['age']);
 user.gender="male";
 console.log({user});
 console.log(user.username())
 
 
 
 
 
 
//  const x=5;
//  x=10;
// const z=[50]
// z=[90]
// const w=[5];
// console.log(w);
const user ={age:25}
user={age:30}
user.age=30
console.log({user});
function sum (n1,n2) {
   return n1+n2
}
let arr=[1,2,3,4]
let sum=0;
for(let i=0;i<arr.length;i++){
       sum+=arr[i]
}

 console.log(sum);
 