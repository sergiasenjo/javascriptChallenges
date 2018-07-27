/**
 * Challenge
 * Using the JavaScript language, have the function longestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
 * @param sen
 */
function longestWord(sen) {
    return sen.match(/[a-z0-9]+/gi)
        .reduce((beforeValue, actualValue) => (beforeValue.length >= actualValue.length) ? beforeValue : actualValue);
}
console.log(longestWord('I love%&/&/& pizza'));
