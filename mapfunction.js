let a=[1,3,8,23,687,234];
//simple for loop method
// let b=[];
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     b.push(element*2);
    
// }
// console.log(b);
let newArr=a.map((e)=>{
   return e*2;

})
console.log(newArr);
