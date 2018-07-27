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
