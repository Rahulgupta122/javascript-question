// this let is used for declaring the variables let is a block scope varibale we cannot redeclare the varibale once we declaringit by let we can only change in it
let a=24;
a=25;
a=26;
a=48;
console.log(a);


// this shows the error 
// the error comes out like 
//Uncaught SyntaxError: Identifier 'a' has already been declared (at let.js:11:5)Understand this error
// let a=24;
// let a=35;
// let a=36;
// console.log(a);
