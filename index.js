
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

function checkPalindrom (string){
    const isPalindrom = string.split('').reverse().join('')

    if(string === isPalindrom){
        return true
    }
    return false
}

const stringToPalindrom = 'racecar'
const palindromeResult = checkPalindrom(stringToPalindrom)
console.log(palindromeResult);
