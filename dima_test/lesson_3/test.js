// const numOne = 1
// const numTwo = 1

// if (numOne + numeTwo === 2) {
//  console.log ('ITS TRUE')
// }

// const numOne = 2 
// const numTwo = 3 
// const greeting = numOne < numTwo ? 'Hello' : 'Fuck off'
// console.log(greeting)


 //TASKS//
  // #1 //
// Перепишите if с использованием оператора '?':
const a = 5
const b = 6
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

//  const result = a + b < 4 ? 'Мало' : 'Много'
//  console.log(result)
 
   // #2 // 
//    Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости – оформляйте код в несколько строк.

let message;
const login = 'fafafafa'

// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
message = login === 'Вася' ? 'Привет' : 
          login === 'Директор' ? 'Здравствуйте' : 
          login === '' ? 'Нет логина' : ''

console.log(message)


