  // #1 //

  function test(name, age, eyeColor) {
   const obj = {
    name: name,
    age: age,
    eyeColor: eyeColor
    }
    return obj 
}
test('Pasha', 3, 'green')

  // #2 // 

function test2(obj, objKey) {
  for (const key in obj) {
    if (key === objKey) {
      console.log('YES')
    } else {
      console.log('NO')
    }
  }
}

const person = {
  name: 2,
  age: 3,
  weight: 4
} 

test2(person, 'name')

// #3 // 

function test3(obj, keyValue) {
  for (let key in obj) {
    if (obj[key] === keyValue) {
      console.log(key)
    } else {
      console.log('empty')
    }
  }
}

console.log(test3(person, 3))