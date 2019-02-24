const name = 'Lena '
let age = 29
const greeting = ' Привет'
const agePlus = 10 
let myGreetings = name + age + greeting 
let info = name + age 
const ageNew = ((age + agePlus) * 5) / 2 

// #1
console.log(myGreetings)

// #2
console.log(info)
info = name + (age + agePlus) 
console.log(info)

// #3
myGreetings = name + ageNew + greeting 
console.log(myGreetings)

