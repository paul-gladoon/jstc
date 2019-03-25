// #1 //

const test1 = {
  name: 'Jora',
  age: 25,
  hello: function() {
    return 'Hello'
  },
  sayHi: function() {
    return this.hello() + ' my name is ' + this.name + ' My age is ' + this.age
  }
}

console.log(test1.sayHi())

// #2 //

const test2 = {
  a: 2, 
  b: 3, 
  c: 4, 
  sum: function() {
    return this.a + this.b + this.c
  }
}

const test3 = {
  e: 2, 
  r: 3, 
  b: 4, 
  sum: function() {
    return this.e + this.r + this.b
  }
}


function test4(met1,met2) {
  return met1 + met2 
}

console.log(test4(test2.sum(), test3.sum()))