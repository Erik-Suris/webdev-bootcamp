var numbers = [3,56,2,48,5]

//Map -Create a new array by doing something with each item in an array.

const mapNumbers = numbers.map(function(x) {
  return x*2
})

console.log(mapNumbers)

//Filter - Create a new array by keeping the items that return true.

const filterNumbers = numbers.filter(function(num){
  return num>10
})

console.log(filterNumbers)

//Reduce - Accumulate a value by doing something to each item in an array.

const reduceNumbers = numbers.reduce(function(accum, num){
  return accum+num
})

console.log(reduceNumbers)

//Find - find the first item that matches from an array.

const findNumber = numbers.find(function(num){
  return num>10
})

console.log(findNumber)

//FindIndex - find the index of the first item that matches.

const findIndexNumber = numbers.findIndex(function(num){
  return num>10
})

console.log(findIndexNumber)