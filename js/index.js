//names and inputs

let hacker1 = "Gabbie";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Widowmaker";
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

newWord = hacker2.split("").reverse().join("");

console.log(newWord);

const wordArray = [hacker1, hacker2];

// Lexicographic order!
wordArray.sort()

if (wordArray[0] === hacker1) {
    console.log(`The driver's name goes first.`)
}

else if (wordArray[0] === hacker2) {
    console.log(`Yo, the navigator goes first definitely.`)
}

else {
    console.log(`What?! You both have the same name?`)
}

//BONUS
const ipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra augue vitae consequat tristique. Vivamus a lectus maximus, vestibulum est vitae, finibus erat. Suspendisse neque felis, imperdiet id varius in, convallis sed nulla. Proin sed elit augue. Phasellus volutpat pellentesque est. Ut quis ornare leo. Donec pellentesque est justo, ut ultrices erat rhoncus in. Maecenas id rhoncus dolor. Donec nec urna metus. Cras dolor leo, aliquam ut consequat at, dictum nec erat. Sed tristique ullamcorper metus, quis molestie neque mattis vitae.

Nam sed molestie ipsum, in dictum lacus. Aenean ante diam, porta et consectetur ac, ornare eu nisi. Mauris eu lacinia purus. Aenean fringilla convallis nulla id venenatis. Phasellus quis ipsum ligula. Donec a ipsum ut tellus aliquam ullamcorper sed tristique magna. Proin malesuada felis nec ante pharetra egestas. Donec purus dui, tincidunt vel velit suscipit, placerat suscipit ligula.

In hac habitasse platea dictumst. Etiam efficitur nulla iaculis dui faucibus accumsan. Mauris imperdiet commodo ipsum sed vestibulum. Vivamus arcu odio, vulputate in luctus nec, viverra ac felis. Proin quis orci sed ex tincidunt consectetur. Suspendisse hendrerit sit amet purus quis consectetur. Nulla faucibus condimentum leo et laoreet. Integer finibus orci et mi vehicula, at aliquam neque ultricies.`
//Number of words. A lot of split action going on :)
let numberOfWords = ipsum.split(' ')
console.log(`number of words is ${numberOfWords.length}`);

const paragraphArray = ipsum.split(' ');

let etCount = 0;

paragraphArray.forEach(x => {
    if (x == 'et') {
        etCount++
    }
})
console.log(`The number of et is ${etCount}`)