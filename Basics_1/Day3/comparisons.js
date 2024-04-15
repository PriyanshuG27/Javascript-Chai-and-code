/*
console.log(2>1);
console.log(2>=1);
console.log(2<=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1); 
*/

// console.log("2">1);
// console.log("02">1);

console.log(null > 0);
console.log(null== 0);
console.log(null>= 0); 
console.log(null != 0);

/*true because equality check(==) and comparisons(< > <= >=) work diffrently .
Comparisons convert null to 0 thus null(0)>=0 is true and null >0 is false. */

console.log(undefined == 0); //F
console.log(undefined >= 0); //F
console.log(undefined <= 0); //F
console.log(undefined != 0); //T

// === strict check (= = =)

console.log("2" === 2);

