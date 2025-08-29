// Local Module
//import student module

const s1 = require('./student');
console.log(s1.getName());
console.log(s1.getAge());
console.log(s1.result);

// access only one function from many functions.
const {getName} =require('./student');
console.log(getName());