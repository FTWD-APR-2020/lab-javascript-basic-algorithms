// Iteration 1: Names and Input

let hacker1 = 'AAAAA' 

console.log(` The driver's name is ${hacker1}`)

let hacker2 = 'AAAAAB'

console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
 if(hacker1.length > hacker2.length) {
     console.log(`Driver's name is longer, it has ${hacker1.length} characters`)
 } else if (hacker2.length > hacker1.length) {
     console.log(`navigator's name is longer, it has ${hacker2.length} characters`)
 } else if (hacker2.length = hacker1.length) {
     console.log(`Wow, both the navigator and the driver have the same amount of characters ${hacker1.length}.`)
 }


// Iteration 3: Loops

let capspace=''

for(i=0; i<hacker1.length; i++){
    capspace+=hacker1[i].toUpperCase() + " "
}

console.log(capspace)


let backward = ''
for(i=hacker1.length-1; i>=0; i--) {
    backward+=hacker1[i]
}

console.log(backward)

let shortestLength
let lengthcheck = 0

if(hacker1.length<hacker2.length){
    shortestLength = hacker1.length
    lengthcheck = 1
}
else
{
    shortestLength = hacker2.length
    lengthcheck = 2
}

let sameNameCheck = 0

if(hacker1.length == hacker2.length)
{
    sameNameCheck = 1
}

for(i = 0; i < shortestLength; i++)
{
    if(hacker1[i] < hacker2[i])
    {
        console.log("The driver's name goes first.")
        break
    }
    else if(hacker1[i] == hacker2[i]){
        if(i == shortestLength-1 && sameNameCheck == 1)
        {
            console.log("What?! You both have the same name?")
            break
        }
        else if(i==shortestLength-1 && lengthcheck==1){
            console.log("The driver's name goes first.")
            break
        }
        else if (i==shortestLength-1 && lengthcheck==2){
            console.log("Yo, the navigator goes first definitely.")
            break
        }
        continue
    }
    else
    {
        console.log("Yo, the navigator goes first definitely.")
        break
    }
}

