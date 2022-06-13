// Module 19 Practice Challange #

// Multiplication Table 

function getmultiplication(number) {
    for (var i = 1; i <= 10; i++) {
        totalMultiplication = number * i;
        console.log(number, '*', i, totalMultiplication);
    }
}

getmultiplication(13);


// Uppercase to lowercase

function getLowercase(name) {
    let lowercase = name.toLowerCase();
    return lowercase;
}

var lowercaseResult = getLowercase('Mohammad Shahadad');
console.log(lowercaseResult);


// Get Full Name 

function getFullName(firstName, secondName) {
    fullName = firstName + ' ' + secondName;
    return fullName;
}

var Name = getFullName('Mohammad', 'Shahadad')
console.log(Name);


// Square a Number

function squareANumber(Number) {
    totalNumber = Number * Number;
    return totalNumber;
}
var result = squareANumber(4);
console.log(result);

var result = squareANumber(8);
console.log(result);

// [var squarNum = Math.pow(6, 2)
// console.log(squarNum);]


// Object Define 

const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}
console.log(pizza.toppings[2]);


// Module 20 Practice Challange

// Leap Year Cheak

function getLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let leapYear = getLeapYear(2023);
console.log(leapYear)


// Age is even or odd cheak

function isMyAgeEvenOrOdd(age) {
    if (age % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let myAge = isMyAgeEvenOrOdd(20);
console.log(myAge);


// Hour to Min convert

function hourToMin(hours) {
    getMin = hours * 60;
    return getMin;
}

let totalMin = hourToMin(5);
console.log(totalMin);

// Module 21 Practice Problem Solve 

// Find the smallest number in an Array

var numbers = [10, 12, 15, 8, 18, 22, 16, 24, 7, 17, 2];

function getSmallestNumber(numbers) {
    var smallest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
let getResult = getSmallestNumber(numbers);
console.log(getResult);

