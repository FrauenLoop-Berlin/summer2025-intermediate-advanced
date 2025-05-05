// simple datatypes

// # strings

let single = 'a word'
single = 'a new word'
single = 10
console.log(single)

const dubble = "another word"
// dubble = "another new word"
console.log(dubble);

let backticks = `a string with a variable ${single} mixed into the string`

// # numbers
let age = 35

// # booleans
true
false

// undefined, null, 
undefined
null

let userName
console.log(userName);

// # complex datatypes

// objects (key-value pair)

let user = {
  name: 'Anna',
  age: 35,
  city: 'Berlin'
}
// access one value: 
user.city
user['city']

// arrays

let hobbies = ['running', 'fishing', 'resting', 'coding', 10, false, [ 12, 2, 3 ], user, {} ]
// access second item: 
hobbies[1]


// loops: for, while, forEach, for in, for of
// loop through an object:

for (let key in user ) {
  // console.log(key);
  console.log(user[key]);
}
// array:
for (let item of hobbies){
  console.log(item);
}

// conditionals 
// What is the price of the zoo ticket>
// if a person is younger than 7, we get a 50% discount
// if a person is older than 65, we get a 30% discount
// a person is other age: 100 % price
let price = 10
let ageVisitor = 50

if (ageVisitor > 65) {
  price = 0.7 * price 
} else if (ageVisitor < 7) {
  price = 0.5 * price
} else {
  price = price
}

console.log( `You have to pay: ${price} euro!`)

// Ternary conditional
let timeofDay = 'evening'

timeofDay == 'morning'  ? ( 
    console.log("good morning")
  ) : ( console.log('good evening')
  )


// functions
// old
function sumOfTwo (a, b) {
  let sum = a + b 
  return sum
}
let result = sumOfTwo(2, 4)
console.log(result)

// arrow function 
const sumOfTwoArrow = (a, b) => { 
  let sum = a + b 
  return sum
}

let resultArrow = sumOfTwoArrow(9, 1)
console.log(resultArrow);

// arrow function short
const sumOfTwoArrowShort = (a, b) => a + b 

let resultArrowShort = sumOfTwoArrowShort(3, 4)
console.log(resultArrowShort);

// EcmaScript 6 