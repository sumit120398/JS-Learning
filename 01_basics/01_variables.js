const accountId = 144553
let accountEmail = "sumit@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 // Not Allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Preper not use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

