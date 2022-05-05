"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
const firstNumber = 2;
const secondNumber = 3;
let userName;
userName = "mrspotts";
let id;
id = "239834";
// display user welcome message                       
function showUser(user) {
    return `Welcome, ${user}!`;
}
//display userId
function showUserId(id) {
    return `Is this your id?: ${id}`;
}
console.log((0, utility_1.add)(firstNumber, secondNumber));
console.log(showUser(userName));
console.log(showUserId(id));
