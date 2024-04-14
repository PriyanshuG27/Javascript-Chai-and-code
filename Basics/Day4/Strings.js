const name = "hitesh"
const repocount = "3"

// console.log(name + repocount +" repos");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`); 
//`` are use to inject variables in a string while printing 

const gamename = new String('PriyanshuG27') //String is a object prototype

console.log(gamename[0]);
console.log(gamename.__proto__); //object 

console.log(gamename.length); //Gives the length of the string(object)
console.log(gamename.toUpperCase()); //Converts to upper case (copy value not original)
console.log(gamename.charAt(2)); //Gives the element on the given index 
console.log(gamename.indexOf('a'));

const subname = gamename.substring(0,4) //0,1,2,3 will be added to a new string . It does not take negative values and start the indentation from 0 only .
console.log(subname);
console.log(typeof subname); //String

const slicedname = gamename.slice(-11,4) //-11,-10,-9 will be added to new string
console.log(slicedname);
console.log(typeof slicedname); //String

const trimmedname  = "    hello    "
console.log(trimmedname);
console.log(trimmedname.trim()); //Replaces the extra spaces from the start and end of the string 

//trimstart : removes the spaces from the beginning of the string  {.trimstart()}
//trimend : removes the spaces from the end of the string {.trimend()}

const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20','-')); //Replaces %20 to -

console.log(url.includes('hitesh')); //hitesh is present in the diven string or not returns the value in true/false

const user = 'abc-xyz-pqr'
const splitted =  user.split('-') //returns a array removing the given separtor and breaking it from the string 
console.log(splitted);
console.log(typeof splitted);

