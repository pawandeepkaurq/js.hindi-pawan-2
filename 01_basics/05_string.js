const name  = "pawan"
const repoCount  = 50

//console.log(name+repoCount); {old method of printing}

//new method
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

//to find index number of yhe string
const gameName = new String ('pawansh')
console.log(gameName[0]);

//TO FIND length of the string
console.log(gameName.length);

// to convert in capital letters
console.log(gameName.toUpperCase)

//position of letter in a string with the help of index
console.log(gameName.charAt(2));

//index of letter 
console.log(gameName.indexOf('w'));

//to divide the string in substring 
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

//if we want to trim the space
const anotherStringOne = "     pawan   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

// if we want to replace something
const url = "http://pawan02_"
console.log(url.replace('02','_'));

// if we wnat to split
console.log(gameName.split('w'));