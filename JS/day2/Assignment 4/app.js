// Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function checkPalindrome(string) {
    // convert string to an array
    let arrayValues = string.split('');
    // reverse the array values
    let reverseArrayValues = arrayValues.reverse();
    // convert array to string
    let reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
let string = prompt('Enter a string: ');

checkPalindrome(string);