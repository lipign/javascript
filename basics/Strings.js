const name = "lipign"
const repoCount = 10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('lipi g n')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hello    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20search"

console.log(url.replace('%20', '-'))

console.log(url.includes('hi'))

console.log(gameName.split(' '));