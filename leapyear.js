function getLeapYear(year) {
    if (year % 4 == 0) {
        console.log(year + ' This year is leap year')
    }
    else {
        console.log(year + ' This year is not leap year')
    }
}

var leapYear = getLeapYear(2024);
var leapYear = getLeapYear(2021);
var leapYear = getLeapYear(2020);
var leapYear = getLeapYear(2017);

// Another function 

function getLeapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + ' This year is leap year')
    }
    else {
        console.log(year + ' This year is not leap year')
    }
}

var leapYear = getLeapYear(2024);
var leapYear = getLeapYear(2021);
var leapYear = getLeapYear(2020);
var leapYear = getLeapYear(2019);