// Ludo game 

function getRandNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandNumber(1, 6));

// How to sort the roll numbers in order?

const roll_num = [1, 2,, 5, 9, 6, 8, 3, 7, 4];

console.log(roll_num.sort(function(a, b){
    return a - b;
}));

// How to find out whether a Leap Year?

function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        console.log(`${year} is a leap year!`);
    }
    else{
        console.log(`${year} is a leap year`);
    }
}
isLeapYear(2022);

// How to determine the number of vowels in a sentence?

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;
}
console.log(countVowels("I Love Bangladesh"));

// How to extract duplicate numbers from an array?
const numbers = [1, 4, 5, 5, 6, 7, 6, 4];
console.log(numbers);

const duplicate = numbers.filter(function(value, index, arr){
    return arr.indexOf(value) !== index;
});

console.log(duplicate);

// How to extract unique numbers from an array?

const duplicates = numbers.filter(function(value, index, arr){
    return arr.indexOf(value) === index;
});

console.log(duplicates);