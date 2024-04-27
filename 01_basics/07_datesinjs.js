// dates
let myDate = new Date()
console.log(myDate.toString());

let myCreatedDate = new Date (2023,01,02)
console.log(myCreatedDate.toString());

//time
let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());

//for grtting in sec
console.log(Math.floor(Date.now()/1000));

let nweDate = new Date()
console.log(newDate.getMonth());

//to get date and time
newDate.toLocaleString('default',{weekday:"long"})