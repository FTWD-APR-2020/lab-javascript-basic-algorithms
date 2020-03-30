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

 
// Bonus 1

let paragraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis facilisis sapien non iaculis. Nullam nisl lectus, eleifend tincidunt magna id, varius rutrum nulla. Sed pretium elit non leo facilisis convallis. Suspendisse quis bibendum augue. Vivamus in ornare tortor. Maecenas nibh tortor, egestas ut neque et, facilisis luctus diam. Maecenas consequat quam ac purus aliquet, ut tincidunt justo consectetur. Donec gravida faucibus nulla. Nullam malesuada vel orci vitae dapibus. Etiam et velit augue. Etiam vel dapibus eros, at sagittis orci. Mauris purus ante, cursus quis fringilla vitae, venenatis ut lectus. Maecenas sed iaculis nisl. Pellentesque elementum, sapien a tincidunt eleifend, est lacus ultricies purus, eu finibus mi nibh eu nulla. Quisque elementum, tellus in posuere eleifend, sem erat tincidunt leo, id rhoncus turpis sapien ac nisi. Etiam elementum, nibh non eleifend accumsan, augue diam suscipit est, a consectetur dui tellus non metus. Quisque eget nunc massa. Praesent viverra pharetra nisi ac laoreet. Etiam quis elementum mi, et eleifend risus. In nec sapien quis dui commodo pellentesque in in lectus. Nullam consectetur risus quis lorem blandit, sit amet iaculis magna eleifend. Ut sit amet tellus consequat, tristique purus a, sollicitudin diam. Integer ut est et purus pharetra dictum id a nisl. Aenean vel vulputate ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla posuere quam leo, et consequat est congue sed. Cras aliquam augue sem, sit amet sodales eros scelerisque non. Donec in ex bibendum, vestibulum erat et, condimentum lacus. Curabitur elementum ligula mauris, ut egestas augue varius sit amet. Aliquam tincidunt, augue sed lobortis mollis, enim nibh sagittis diam, a tempor dolor sem vitae elit. Vivamus aliquet, urna et convallis tincidunt, augue tortor hendrerit libero, et ultricies tellus odio eget massa."

function WordCount(str) { 
  return str.split(" ").length;
}

console.log(WordCount(paragraphs));


var count = (paragraphs.match(/et/g) || []).length;
console.log(count);

// Bonus 2

function palindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }
  
  console.log(palindrome("step on no pets"))
  