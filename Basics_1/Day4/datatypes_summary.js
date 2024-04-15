// Primitive : call by value 

/* 7 types :
String
Number 
Boolean
null 
undefined 
Symbol 
Bigint
*/

//Refrence (Non Primitive):

/*
Array 
Objects 
Function 
*/

const score = 100
const scoreval = 0.3
const login = false
const outtemp = null 
let useremail; //undefined 
const id = Symbol('123')
const another_id = Symbol('123')
const bignum = 34728975982743987539475983759n //n makes a big number to bigint

console.log(id == another_id); //false
console.log(id === another_id); //false

// == checks the value after doing required type conversion and === checks without doing type conversion 

const heroes = ['shaktiman', 'batman', 'hanuman']; //array 

let myobj = {
    name : "ironman", // Object declaration
    age : 47,
}

const myfunc = function(){
    console.log("Hello world");
}

console.log(typeof bignum); //bigint
console.log(typeof outtemp); //null
console.log(typeof myfunc); //function  


// Memory types 
// Stack - Primitive
// Heap - Non primitive 

let myytname = "chaiaurcode"
let anothername = myytname
anothername = "histeshchoudary" //Stack memorytype it gives a copy of the variable and doesn't change the value of the intial one 


console.log(anothername);
console.log(myytname);

let user1 ={
    email : "pri2712gum@gmail.com",
    upi :"user@Paytm",
}

let user2 = user1

user2.email = "abc@gmail.com" //heap memory it gives the refrence of the object and changes permanently 

console.log(user1.email);
console.log(user2.email);