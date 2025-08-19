
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

const stringToPalindrom = 'madam'
const palindromeResult = checkPalindrom(stringToPalindrom)
// console.log(palindromeResult);


// Problem: 4, Maximum Number
function maxNum (nums){
    // console.log(nums);
    // console.log(...nums);
    const result = Math.max(...nums)
    return result
}

const numbers = [281, 376, 450, 560]
const maximumResult = maxNum(numbers)
// console.log(maximumResult);


// Problem: 5, Remove Duplicates
function removeDuplicates (arrOfNums){
    const removedDuplicates = []

    for(const num of arrOfNums){
        if(removedDuplicates.includes(num) === false){
            removedDuplicates.push(num)
        }
    }
    return removedDuplicates
}

const numbersToRemoveDuplicate = [1, 2, 2, 3, 4, 4]
const removeDuplicatesReslt = removeDuplicates(numbersToRemoveDuplicate)
// console.log(removeDuplicatesReslt);




