const account_id = 144553; //vha use krna kha value ko change n krna ho
let accountemail = "pri2712gumber.com"; //this is what we are goona use for most of the time
var accountPassword = "12345"; //We prefer not to use var because of use in block scope and functional scope
acc_city = "Rudrapur"; //don't use this much
let accountstate; //Will give a undefined value as a result

// account_id = 2; NOT Allowed to replace a const
accountemail = "abc@gmail";
accountPassword = "98765";
acc_city = "Kichha";

console.log(account_id);
console.table([
  account_id,
  accountemail,
  accountPassword,
  acc_city,
  accountstate,
]);
