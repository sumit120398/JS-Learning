// Primitive
// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;   

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345680543477347597094385n


// Refernce (Non primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Sumit",
    age : 22,

}

const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof outsideTemp);

// Read following source page : https://262.ecma-international.org/5.1/#sec-11.4.3

