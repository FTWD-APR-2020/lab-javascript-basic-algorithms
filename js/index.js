// Iteration 1: Names and Input
let hacker1 = "Kate"
console.log(`The drivers name is ${hacker1}`);
 
let hacker2 = "Chris"
console.log(`The navigators name is ${hacker2}`)

let driver = hacker1

let navigator = hacker2
// Iteration 2: Conditionals

 if(hacker1.length > hacker2.length){
         console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
         
} else if(hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
      
} else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
      
}



// Iteration 3: Loops
console.log(driver.toUpperCase().split('').join(' '))
console.log(driver.split('').reverse('').join(''))


const a = "chris" // with accents, lowercase
const b = "kate" // no accents, uppercase


if (driver.localeCompare(navigator) == -1){
  console.log("The driver's name goes first.");

} else if(driver.localeCompare(navigator) == 1){
  console.log("Yo, the navigator goes first definitely.")
  
} else {
  console.log("What?! You both have the same name?");
  
}

 
