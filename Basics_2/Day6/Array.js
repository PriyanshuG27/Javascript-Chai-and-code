//Arrays : Non primitive data type whatever er change in the array will also change its original value as it provides the refrence not a copy 


const myarr = [0,1,2,3,4,5]
const myheroes  = ["Shaktiman","Naagraj"]

const newarr  = new Array(1,2,3,4)
// console.log(myarr[3]);

// Array methods 

// myarr.push(6) //Appends the arr by the given value 
// myarr.push(7)
// myarr.pop() //removes the topmost value from the array

// myarr.unshift(9) //Adds the value to the start of the array
// myarr.shift() //Removes the first element (index 0 ) from the array 

// console.log(myarr.includes(4)); // gives the ans in boolean (true/false) 
// console.log(myarr.indexOf(8)); //If element is not present than the given ans is -1 
// console.log(myarr.indexOf(2)); //gives element index

const arr2 = myarr.join() // Adds all the elements of an array into a string, separated by the specified separator string.


// console.log(myarr);
// console.log(arr2);
// console.log(typeof arr2);

//slice ,splice 

// console.log("A",myarr);

const myn1  = myarr.slice(1,3) //Myn1 includes the values of myarr at index 1,2 (will not include 3) and the myarr remains same 

// console.log(myn1);
// console.log("B",myarr);

const myn2 = myarr.splice(1,3) //Myn2 will include values of myarr at index 1,2,3 as well as it will delete these values from the original array 

// console.log(myn2);
// console.log("C",myarr);


const marvel_heros = ["Ironman","Thor","Captain america","Spiderman"]
const dc_heros = ["Flash","Wonder Woman","Superman","Batman"]

// marvel_heros.push(dc_heros) //It will push the whole dc array as a elemet in the marvel array 

// console.log(marvel_heros);
// console.log(marvel_heros.length); //To get the length of the array we use .length not length()
// console.log(marvel_heros[4][2]); // 4th indec ka 2nd index

// const allheroes = marvel_heros.concat(dc_heros) //Concat merges the 2 arrays and makes it a new array 
// // console.log(marvel_heros.concat(dc_heros))
// console.log(allheroes)

// Spread opperators 

const all_new_heroes = [...marvel_heros,...dc_heros]//Adds each element of the given array into the new array by using ...before the array name in the declaration

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5],[6,7,[8,9,10]],11]

const usable_array = another_array.flat(Infinity) //Will make a array will all the values even if its is like a array inside a array or more..
// console.log(usable_array)

console.log(Array.isArray(myarr)); //true
console.log(Array.isArray("Priyanshu")); //false
console.log(Array.from("Shaktiman")); //['S', 'h', 'a','k', 't', 'i','m', 'a', 'n' ]

console.log(Array.from({name : "Batman"})); //[] interesting as we did not defined that we want keys or values it gave us a empty array

let score1 = 100
let score2= 200
let score3 = [12,34]

console.log(Array.of(score1,score2,score3)); //[ 100, 200, [ 12, 34 ] ]