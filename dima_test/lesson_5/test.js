// #1 // 

const arr1 = ['1', 'NaN', 'Wa', 'What']

function test1(arr) {
 return arr.join(' ')
}

// #2 // 

const arr4 = [1, 2, 3, 4, 5, 6]

function test3(arr, inElem) {
  arr.splice(inElem, 1)
}
test3(arr4, 2)

// #3 // 

let arr2 = [1, 2, 3, 4]
let arr3 = [5, 6, 7, 8]

function test2(mas1, mas2) {
  return mas1.concat(mas2)
}

const arr4 = test2(arr2,arr3)