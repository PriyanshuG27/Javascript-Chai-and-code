let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valinnum = Number(score) //Number used here should be capital in typeconversion

console.log(typeof valinnum);
console.log(valinnum);

/* if string contains alphanumeric or alpha and 
we convert it to number it will give type -> number but output will be NaN i.e Not a number */

score = null
valinnum = Number(score)

console.log(typeof valinnum); //will be number only 
console.log(valinnum); //will give result 0 on conversion of null to number so keep in check 


score = undefined
valinnum = Number(score)

console.log(typeof valinnum); //will be number only 
console.log(valinnum); //NaN will be given 


score = true
valinnum = Number(score)

console.log(typeof valinnum); //will be number only 
console.log(valinnum); // 1 will be given for true |false -> 0

score = 1
let boolsc = Boolean(score)
console.log(typeof boolsc); //boolean 
console.log(boolsc); //will give true 

//"33" -> 33
// null -> 0
// "33abc",undefined -> NaN
// true/false -> 1/0

// to bool 
// 1/0 -> true/false
// "" -> false (empty string)
// "abc" -> true 






