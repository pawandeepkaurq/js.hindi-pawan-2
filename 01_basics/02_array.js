const marvelHeros = ['thor','spoderman','ironman']
const dcHeros = ['superman','flash','batman']

marvelHeros.push(dcHeros)
console.log(marvelHeros);
console.log(marvelHeros[3][1]);

marvelHeros.concat(dcHeros)
console.log(marvelHeros);
// push originallu push values in origional array but concat return new array

//to spread the array
const allNewHeros = [...marvelHeros,dcHeros]
console.log(allNewHeros);

//to simplify the array when there is aarry inside the array
const anotherArray = [1,2,3,[4,5.6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

//to find out if something is array or not\
console.log(Array.isArray('pawan'));

//to convert in array
console.log(Array.from('pawan'));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
