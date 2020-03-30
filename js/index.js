//names and inputs

let hacker1 = "Willllllllll";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Someone else";
console.log(`The navigators name is ${hacker2}`);

//conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

//loops

// //loops
// console.log('niko'.toUpperCase())
// //this is niko 

// console.log(hacker1.split(""))
// //console.log(hacker1)
//let newHacker1 = hacker1.toUpperCase()
//let hackerArray=newHacker1.split("").join(" ");
//console.log(hackerArray);

let newHacker = "";

for (let i = 0; i < hacker1.length; i++) {
    newHacker = newHacker + (hacker1.charAt(i) + " ")
    // newHacker.charAt(i) + " ";

}
console.log(newHacker.toUpperCase());

let newWord = newHacker.toUpperCase();

newWord = newWord.split("").reverse().join("");


console.log(newWord);


// if (hacker1 > hacker2) {
//     console.log('The driver´s name goes first')
// } else if (hacker1 < hacker2) {
//     console.log('The navigator goes first definitely')
// } else {
//     console.log('What?! You both got the same name?')
// } 
​
/ for (let letter in hackerArray) {
//   console.log(letter.toUpperCase());
// }
​
/ let nameOrder = "";
// for (i = hacker1.length -1; i >= 0; i--) {
//     nameOrder += hacker1[i];
