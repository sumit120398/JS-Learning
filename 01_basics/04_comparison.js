// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The loose equality (==) operator does not simply convert everything to numbers. It follows a special algorithm defined in the ECMAScript specification.
// For null:
// null == undefined → true
// null == null → true
// null == anythingElse → false
// So JavaScript does not convert null to 0 when comparing with ==.

console.log("2" === 2);