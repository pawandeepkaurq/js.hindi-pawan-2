const score = 400

const balance = new Number(100.98)
console.log(balance);

console.log(balance.toString().length);
//to show value upto 2 decimals
console.log(balance.toFixed(2))

const otherNumber = 23.8996

console.log(otherNumber.toPrecision(4));

// to knoe the actual value in hundrades or thousands etc
const hundrade = 1000000
console.log(hundrade.toLocaleString());

//----------- MATHS ---------------//
console.log(Math);
//to change the negative value in positive
console.log(Math.abs(-4));
// to round off
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
//to finf min or max of the num
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));
//to get any random value
console.log(Math.randon());
console.log(Math.random()*10);

const min = 10
const max = 20

console.log(Math.random()* (max- min +1))
