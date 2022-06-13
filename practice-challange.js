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