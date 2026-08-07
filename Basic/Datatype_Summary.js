/**
 * primitive 
 *
 *  7 : 
 * string 
 * number ,
 * boolean,
 * null
 * undefined,
 * symbol
 * 
*/

const score =100;
const scorevalue =100.3;
const loginValue = null;
let userMail;

const id =Symbol('123');
const anotherId= Symbol('123')
console.log(id == anotherId);

const bigNumber =2313123146678n;


/**
 * 
 * Non-primitive 
 * 
 *  Array , objects , Functions
 * 
 */

const heroes =[" shubham ", " sahil" , "vedant"];

let myObj={
    name:" shuhbam",
    id :12
}

const myFunction  = function(){
    console.log("hello sorld");
}
console.log(typeof myFunction)
console.log(myFunction());