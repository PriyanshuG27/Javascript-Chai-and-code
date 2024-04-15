const score = 400 
// console.log(score);

// const balance = new Number(100.576) //Here Balance will be of a object datatype 
// console.log(balance); //[number : 200]
// console.log(balance.valueOf()) //200
// console.log(balance.__proto__) //object  ({} this will be output )

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); //upto 1 decimal point after rounding off  
// console.log(typeof (balance.toFixed(1)));  //string

const othernum = 123.8983

// console.log(othernum.toPrecision(5)); //here 5 are the number of significant digits and it returns a string not a number 
// console.log(typeof (othernum.toPrecision(5))); //String

// `toFixed()` is used for controlling the number of decimal places and returns a string.
// `toPrecision()` is used for controlling the precision (number of significant digits) and returns a string.

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')); //Makes the number a string and adds commas to it at their places acc to the place given in the command (en-IN) 

//+++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-8)); //Gives the absolute value of the given amount 
console.log(Math.round(4.3)); //rounding off to nearest int

console.log(Math.ceil(4.2)) //gives the top value of the given amount (5 in the current value)
console.log(Math.floor(4.2)) //gives the lower value of the given amount (4 in the current value)

console.log(Math.random()); // any value between 0 and 1 
console.log((Math.random()*10)+1); // value in 1 to 11(not including 11) including decimal 
console.log((Math.floor((Math.random()*10)))+1); // value in 1 to 11(not including 11)

const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*((max-min)+1) +min)) //Gives output between min and max (int values)

/*In the above command we first get a random value between 0 and 1 through Math.random() .
Then we multipy it by the difference of (max and min).
Then add 1 to it so that we can avoid the 0 in the output.
Then we added min to make the output above the min value and below max value.
At last we use Math.floor so that we can get only the int part of the ans */
