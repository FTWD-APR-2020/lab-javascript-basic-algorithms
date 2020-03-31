// Iteration 1: Names and Input
// 1.1
let hacker1 = 'David';
console.log(`"The driver's name is ${hacker1}"`);

// 1.2
let hacker2 = 'Jimmy';
console.log(`"The navigator's name is ${hacker1}"`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops
// 3.1
let driver = [];

for (let i = 0; i < hacker1.length; i+=1) {
  driver.push(hacker1[i]);
}

console.log(driver.join(' ').toUpperCase());


// 3.2
let navigator = [];

for (let j = 0; j < hacker2.length; j++) {
  navigator.push(hacker2[j]);
}

console.log(navigator.reverse().join(''));


// 3.3
let names = [hacker1, hacker2];
names.sort();

if (hacker2 == names[0] && hacker1 == names[0]) {
  console.log(`What?! You both have the same name?`);
}
else if (hacker1 == names[0]) {
    console.log(`The driver's name goes first.`);
} else if (hacker2 == names[0]) {
console.log(`Yo, the navigator goes first definitely.`);
}


// Bonus #1 

let par = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."

let totalNumber = par.split(' ');

let counterEt = 0;
let search = 'et';

for (i = 0; i < totalNumber.length; i++){
  if (search === totalNumber[i]) {
    counterEt++;
  }
}

console.log(totalNumber.length);

console.log(counterEt);


// Bonus #2


