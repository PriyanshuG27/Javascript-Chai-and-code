//Dates 

let mydate = new Date()
console.log(typeof mydate); //object

//Date in Day month(in alphabet) date year format and time in 24 hr format 
console.log(mydate.toString()); // Gets the whole date inc time zome,time
console.log(mydate.toDateString());//gets only the date 

//Date in month/date/year ,time in 12 hr format 
console.log(mydate.toLocaleString()); //Gives the date and time 
console.log(mydate.toLocaleDateString()); //Gives only time

//Gives the same output in 2024-04-15T14:46:35.164Z in this format
console.log(mydate.toJSON());
console.log(mydate.toISOString());

//Gives the time in 24 hr format + the time zone 
console.log(mydate.toTimeString());

let mycreateddate = new Date(2023,0,23) //year,month(starts from zero),date
let date2 = new Date(2023,0,3,9,2,45) // Here 9: hours ,2:minutes,45:Seconds
let date3 = new Date("2023-01-23") //  yy-mm-dd (mm form 01)
let date4 = new Date("1-14-2024") // mm-dd-year
let date5 = new Date("14-1-2024") //Invalid date

console.log(date2.toString()); //Output : Tue Jan 03 2023 09:02:45 GMT+0530 (India Standard Time)
console.log(date3.toLocaleString()); //Output : 1/23/2023, 5:30:00 AM
console.log(date4.toLocaleString()); //Output : 1/14/2024, 12:00:00 AM

let timestamp = Date.now()  

// console.log(timestamp); //Output : 1713193612396
// console.log(date4.getTime()); //Output : 1705170600000

console.log((Date.now()/1000)); // Output 1713193810.861
console.log(Math.floor(Date.now()/1000)); //Output 1713193810

let newdate = new Date();
console.log(newdate.getMonth() +1); //3 for april (4) so we added 1 
console.log(newdate.getDay()); //1 for sunday

newdate.toLocaleString('default',{
    weekday : "long",
})