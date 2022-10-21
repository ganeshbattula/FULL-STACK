// console.log("hello world")
// console.log('ganesh')

// name = 'ganesh battula'
// console.log(name)
 
//operators
// food = 20
// tippercentage = 0.4
// tipamount = tippercentage * food

// console.log(tipamount)
//user input
// food = Number(prompt('how much the food?'))
// tippercentage = Number(prompt('tip%') / 100)
// tipamount = tippercentage * food
// total = food + tipamount


// console.log('total amount', total)

// console.log('tip amount', tipamount)
// basic calculator
// let weather = prompt('how is the weather?')
// if(weather=='rain')
// {
//   console.log('bring umbrella')
// }
// else
// {
//   console.log('wear sunglass')
// }
//functions
// function saymyname() {

//   console.log('ganesh')

// }
// saymyname()
// function saymyname2(name) {

//   console.log(name)
// }
// saymyname2('gani')


function greeting(name) {
  greet = `hi ${name} , how are you!`
  console.log(greet)
}
// greeting('battula')
// function add(a,b)
//   {
//     return a+b

//   }
//num1=add(1,2)
//console.log(num1)
//ES6
//Arrow function =>
//// arrow func with explicit return



// arrow func with implicit return
const sum = (a, b) => a + b
//console.log(sum(10, 1))

//// arrow func with explicit return (subtract)

const sub = (a, b) => {
  return a - b
}
//console.log(sub(100,99))
// arrow func with implicit return
const sub1 = (a, b) => a - b
//console.log(sub1(11, 1))

/// arrow func with explicit return (multiply)

const mul = (a, b) => {
  return a * b
}
//console.log(mul(100,99))
// arrow func with implicit return (multiply)
const mul1 = (a, b) => a * b
//console.log(mul1( 11, 1))
// arrow func with explicit return (multiply)

const div = (a, b) => {
  return a / b
}
//console.log(div(100,99))
// arrow func with implicit return (multiply)
const div1 = (a, b) => a / b
//console.log(div1( 11, 1))



const gan = (a, b) => a - b
//console.log(gan(1,2))

const har = (a, b) => {
  return a + b
}
//console.log(har(2,3))


//ARRAYS
const groceries = ['banana', 'apple', 'oranage', 'avacado']
//console.log(groceries)
//console.log(groceries[1])
//pushing
groceries.push('cookie', 'raspberry')

//console.log(groceries)

//Array slice starts from 0 inclusive and upto 2 but doesnt include 2 means indicies 0,1
//console.log(groceries.slice(0,2))
//console.log(groceries.slice(3,5))
//aple to avacado
//console.log(groceries.slice(1,4))
//length and indexof
//console.log(groceries.indexOf('cookie'))
//console.log(groceries.length)






const person = {
  name: 'Ganesh',
  shirt: 'white'
}
// . notation
//console.log(person.name)
///console.log(person.shirt)

//bracket notation
//console.log(person['shirt'])



//assign object
person.phone = '99077'
//person[phone]= '99077' we can use

//console.log(person.phone)
//console.log(person)
const profile = {
  name: 'Battula',
  color: 'Brown'
}
//console.log(profile.color)
profile['account'] = '71149'
//console.log(profile)

//es6 arrow fucntion (2 arguments)
//object
//template literals
//methods method math.floor()
const introducer = (name, color) => {
  const person = {
    name: name,
    color: color,
    assets: 50000,
    debt: 10000,
    networth: function() {
      return this.assets - this.debt
    }
  }
  const intro = `hi, my name is ${name}, my shirt color is ${color}, and MY networth is ${person.networth()}`
  return intro
}
//console.log(introducer('ganesh','white'))
friends = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
for (let i = 0; i < friends.length; i++)
  //console.log(friends[i])

  for (const friend of friends) {
    //console.log(friend)
  }


//
// numbers= [1,2,3,4,5,6]
// for(let i=0; i<numbers.length; i++)
//  // console.log(numbers[i])


const numbers = [1, 2, 3, 4, 5, 6]
let result = []
for (const number of numbers) {
  //console.log(number*2)
  result.push(number * 2)

}
//console.log(result)


const square = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number ** 2)

  }
  return result
}
//console.log(square([1,2,3,4,5,7]))

const Howmanyletters = (phrase) => {
  let result = 0;
  for (const letter in phrase) {
    console.log(Number(letter))
    result = Number(letter) + 1
  }
  return { result }
}
//const phrase= prompt('what is your phrase?')

//console.log(Howmanyletters(phrase))

const sumArray = (numbers) => {
  let result = 0;
  for (number of numbers) {
    //console.log(number)
    result = result + number

  }
  return { result }
}
// const arr = [1, 2, 3, 4, 5]
// console.log(sumArray(arr))


// const SumArray1 = (items) => {
//   let result = 0;
//   for (const item of items) {
//     console.log(item)
//     result = result + item
//   }
//   return { result }
// }
// const Array = [10, 20, 30, 40, 50]
// console.log(SumArray1(Array))


//array2=[-1,-3,]
const max=(numbers)=>{
  let result= numbers[0]; // should not give result = 0; if we -ve values it will take 0 as greater value
  for (const number of numbers){
    if (number > result){
      result = number
    }
      
  }
  return {result}
}
//console.log(max([-4,-3]))



















