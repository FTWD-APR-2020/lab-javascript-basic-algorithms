let hacker1 = "Leo"
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Marc"
console.log(`The navigators name is ${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if ( hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

console.log(hacker1.split('').join(' ').toUpperCase())
console.log(hacker2.split('').reverse().join(''))

if(hacker1 < hacker2){
  console.log("The driver's name goes first.")
} else if(hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}

let lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet consectetur ultrices. Duis cursus, sapien non elementum ullamcorper, magna nulla sollicitudin velit, sit amet scelerisque magna nibh eu purus. Phasellus ultricies condimentum neque ac porttitor. Phasellus vitae efficitur urna. In sagittis interdum metus sed vestibulum. Integer tellus sem, elementum non semper at, sagittis at ipsum. Nullam condimentum auctor ipsum, at imperdiet nisi ornare id. Sed tincidunt venenatis felis eget commodo.

Integer facilisis, magna eget condimentum lacinia, odio lacus convallis nisl, vitae tincidunt tellus massa sed sem. Pellentesque tincidunt velit commodo, hendrerit augue a, lobortis neque. Fusce convallis a libero non ultricies. Phasellus semper, ipsum ut semper iaculis, diam tortor tempus nisi, ac ultrices justo erat et nunc. Suspendisse id dui ut arcu maximus tempor vitae sit amet ligula. In euismod dictum orci id interdum. Integer suscipit ligula at nibh vulputate feugiat. Pellentesque tincidunt mauris a iaculis congue. Mauris placerat, dolor eu luctus laoreet, erat ipsum laoreet tortor, ut ullamcorper neque nibh ac mauris. Pellentesque malesuada aliquam mauris nec consequat. Quisque vitae dignissim mauris. Proin malesuada, nulla ac auctor ultrices, elit metus vulputate massa, eget posuere erat turpis sit amet enim. Morbi faucibus at mi quis aliquam. Quisque id erat erat. Nam malesuada ante ac suscipit laoreet. Nunc sollicitudin orci quis blandit sodales.

Suspendisse pulvinar turpis sapien, vel venenatis nunc congue non. Cras mollis ut sem vitae posuere. Nam faucibus libero quis lectus vehicula molestie. Ut et leo eu lectus pellentesque pellentesque. In pretium placerat faucibus. Etiam et risus eget erat mattis consequat. Ut congue ipsum nisi, vitae euismod nunc accumsan non. Nulla ac venenatis tortor, eu pulvinar nisi. Etiam sollicitudin enim lorem, vel sodales quam rhoncus vel. Donec tincidunt elementum nisi, in condimentum purus maximus a. Donec posuere varius est, nec tempus nunc vulputate id. Aliquam tincidunt sollicitudin hendrerit.

`

console.log(lorem.split(' ').length)

function countWord (word, paragraph){
  let arrayPar = paragraph.split(' ')
  newArray = []
for (let i = 0; i < arrayPar.length; i++){
  if(arrayPar[i].includes(word)){
  newArray.push(arrayPar[i])
  }
}
console.log(`The word ${word} appears ${newArray.length} times.`)
}

countWord('et', lorem)

phrase = "Racecar"

function phraseToCheck(phrase){
  console.log(phrase.toLowerCase().split('').reverse().join('')=== phrase.toLowerCase())
}

phraseToCheck("Racecar")





