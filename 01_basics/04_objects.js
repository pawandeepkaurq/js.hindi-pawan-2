//singelton object decleration

//const tinderUser = new Object()

//non singekton devleration
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'pawan'
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email:"pawwannk@gmail.com",
    fullname: {
        userFullNmae:'pawan',
    }

    
}
console.log(regularUser.fullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}

//const obj3 = {obj1,obj2}

//to combine 2 objects
//const obj3 = Object.assign(obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(tinderUser);

//WE can simply apply loop by printing values like this cause it turned values in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

//if we want to find out something is present in object
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//-------------------de structuring in object------
const course = {
    courseName:'js.hindi',
    price:'999',
    courseInstructure:'pawan',
}

//to astract any value fron couse
const {couseInstructure} = course
console.log(couseInstructure);

