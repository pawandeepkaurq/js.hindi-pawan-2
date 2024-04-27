//array
//javascript array are resizeanle

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array (1,2,3,4)
console.log(myArr[1]);

// array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);

//to add anything in the starting
myArr.unshift(9)
myArr.shift()
console.log(myArr);

//to check
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

//change valuse of array to string
 const mewArray = myArr.join()
 console.log(myArr);
 
//slice,splice
console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);
// splice manupulate origional array nut slice does not manupulate origional array

