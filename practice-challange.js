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


// Find the smallest number

var first = 20;
var second = 35;
var third = 50;

function findSmallestNumber(firstNum, secondNum, thirdNum) {
    if (firstNum < secondNum && firstNum < thirdNum) {
        console.log(firstNum, 'is the smallest')
    }
    else if (secondNum < firstNum && secondNum < thirdNum) {
        console.log(secondNum, 'is the smallest')
    }
    else {
        console.log(thirdNum, 'is the smallest')
    }
}

var result = findSmallestNumber(first, second, third)


// Find Avarage number from an array 

var numbers = [10, 12, 15, 8, 18, 22, 16, 24, 7, 17, 2, 40, 38, 45, 52, 58, 64, 68, 3, 1];

function getAvarage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        // console.log(sum);
    }
    avarage = sum / numbers.length;
    // console.log(avarage);
    return avarage;
}

var totalAvarage = getAvarage(numbers)
console.log(totalAvarage);

// Find the Second largest number from an array 

const array = [32, 523, 5632, 920, 225, 5632, 7000, 6000];
function getSecondLargestNumber(number) {
    let largestNum = number[0];
    let secondLargestNum = 0;
    for (var i = 1; i < number.length; i++) {
        if (number[i] > largestNum) {
            secondLargestNum = largestNum;
            largestNum = number[i];
        }
        else if (number[i] > secondLargestNum) {
            secondLargestNum = number[i];
        }
    }
    console.log(largestNum);
    console.log(secondLargestNum);

    return secondLargestNum;
}
var result = getSecondLargestNumber(array);
console.log(result);



// Module 22 Practice Problem 

// Get The Prime Number 

function getThePrimeNumber(number) {
    if (number % 2 != 0 && number % 3 != 0) {
        // console.log(number);
        console.log(number, 'is a prime number')
        return true;
    }
    else {
        console.log(number, 'is not a prime number')
        return false;
    }
}
var result = getThePrimeNumber(29);
console.log(result);
var result1 = getThePrimeNumber(243);
console.log(result1);

