import { add } from "./utility"

const firstNumber = 2
const secondNumber = 3

let userName
userName = "mrspotts"

let id 
id = "239834"


// display user welcome message                       
function showUser(user:string):string {
    return `Welcome, ${user}!`
} 

//display userId
function showUserId(id:string):string {
    return `Is this your id?: ${id}`
}


console.log(add(firstNumber, secondNumber))
console.log(showUser(userName)) 
console.log(showUserId(id))

