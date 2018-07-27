/**
 * Challenge 1
 * Using the JavaScript language, have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
 * @param sen
 */
function longestWord(sen) {
    return sen.match(/[a-z0-9]+/gi)
        .reduce((beforeValue, actualValue) => (beforeValue.length >= actualValue.length) ? beforeValue : actualValue);
}
console.log(longestWord('I love%&/&/& pizza'));

/**
 * Challenge 2
 * Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
 * @param num
 */
function firstFactorial(num) {
    return (num < 0) ? num = 'Factorial is defined only for non-negative integer numbers' : (num === 0) ? 1 : num * firstFactorial(num - 1);
}
console.log(firstFactorial(8));

/**
 * Challenge 3
 * Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
 * @param str
 */
function firstReverse(str) {
    return str.split('').reverse().join('');
}
console.log(firstReverse('Hello World and Coders'));

/**
 * Challenge 4
 * Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
 * @param str
 */
function letterChanges(str) {
    let converted = str.replace(/[a-z]/gi, (char) => (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1));
    return converted.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());
}
console.log(letterChanges('fun times!'));

/**
 * Challenge 5
 * Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
 * @param num
 */
function simpleAdding(num) {
    return (num === 0) ? 0 : (num < 0) ? num + simpleAdding(num + 1) : num + simpleAdding(num - 1);
}
console.log(simpleAdding(4));

/**
 * Challenge 6
 * Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.
 * @param str
 */
function letterCapitalize(str) {
    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}
console.log(letterCapitalize('hello world'));

/**
 * TODO
 * Challenge 7
 * Using the JavaScript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter.
 * @param str
 */
function simpleSymbols(str) {
    return str;
}
console.log(simpleSymbols('+d+=3=+s+'));

/**
 * Challenge 8
 * Using the JavaScript language, have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1.
 * @param num1
 * @param num2
 */
function checkNums(num1, num2) {
    return (num2 > num1) ? true : (num2 === num1) ? -1 : false;
}
console.log(checkNums(1, 2));
console.log(checkNums(2, 2));
console.log(checkNums(3, 2));
