
// Problem: 1, Reverse a String
function ReverseString(string) {
    return string.split("").reverse().join("")
}

const stringForReverse = "salman-koli"
const result = ReverseString(stringForReverse)
// console.log(result);


// Problem: 2, count vowels
const vowels = ['a', 'e', 'i', 'o', 'u']

function vowelCounter(string) {
    let count = 0
    for (const letter of string.toLowerCase()) {
        // console.log(letter);
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
}

const stringToCount = 'salman'
const countResult = vowelCounter(stringToCount)
// console.log(countResult);


// Problem: 3, Palindrome

function checkPalindrom(string) {
    const isPalindrom = string.split('').reverse().join('')

    if (string === isPalindrom) {
        return true
    }
    return false
}

const stringToPalindrom = 'madam'
const palindromeResult = checkPalindrom(stringToPalindrom)
// console.log(palindromeResult);


// Problem: 4, Maximum Number
function maxNum(nums) {
    // console.log(nums);
    // console.log(...nums);
    const result = Math.max(...nums)
    return result
}

const numbers = [281, 376, 450, 560]
const maximumResult = maxNum(numbers)
// console.log(maximumResult);


// Problem: 5, Remove Duplicates
function removeDuplicates(arrOfNums) {
    const removedDuplicates = []

    for (const num of arrOfNums) {
        if (removedDuplicates.includes(num) === false) {
            removedDuplicates.push(num)
        }
    }
    return removedDuplicates
}

const numbersToRemoveDuplicate = [1, 2, 2, 3, 4, 4]
const removeDuplicatesReslt = removeDuplicates(numbersToRemoveDuplicate)
// console.log(removeDuplicatesReslt);



// Problem:6 Sum of All Numbers

function sumNumbers(nums) {
    let sum = 0

    for (const num of nums) {
        // console.log("sum",sum);
        // console.log("num",num);
        sum = sum + num
    }

    return sum
}

const numbersToSum = [10, 10, 20, 80]
const sumResult = sumNumbers(numbersToSum)
// console.log("result",sumResult);



// Problem: 7, find even numbers

function findEvenNumbers(allnums) {
    const evenNumbers = []

    for (const num of allnums) {
        if (num % 2 === 0) {
            evenNumbers.push(num)
        }
    }

    return evenNumbers
}

const numbersToFindEven = [1, 2, 3, 4, 5, 6, 7, 8]
const evenNumbersResult = findEvenNumbers(numbersToFindEven)
// console.log(evenNumbersResult);



// Problem: 8, Capitalize First Letter of Each Word
function makeCapitalize(string) {
    let words = string.split(' ')

    for (let i = 0; i < words.length; i++) {
        //    words = words[i]
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ')
}

const stringToCapitalize = 'he iro nuer hferus iww sfio w f'
const capitalizeResult = makeCapitalize(stringToCapitalize)
// console.log(capitalizeResult);


// Problem: 9, factorial of a number
function factorialOfNumber(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result
}

const numberToFactorial = 5
const factorialResult = factorialOfNumber(numberToFactorial)
// console.log(factorialResult);
