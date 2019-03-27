// 1# //

const arr1 = [1, 2, 3, 'What']

function test1(arr, value) {
 return arr.indexOf(value)
}
console.log(test1(arr1, 'What'))

// 2# //

const arr2 = ['Pasha', 'Dima', 'Vasya']

function test2(arr, value) {  
  for (let i = 0; i < arr.length; i++) {
      if (value === arr[i]) {
        break 
      } else {
        return 'Word missing'
      }
  }
}
test2(arr2,'Pash')