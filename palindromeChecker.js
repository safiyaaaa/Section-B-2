// Palindrome

// This palindrome (https://en.wikipedia.org/wiki/Palindrome) checker should check whether an integer or a string is palindromic. It should fail for all other data types.

// It should return true if it is a palindrome
// It should return false if it's the wrong data type

// It should be done using a for loop

// Write extensive tests for this code and fix any bugs that you find until all your tests pass. Make sure youre testing correct inputs that work and don't work. Test any weird inputs, all data types that should work, data types that shouldn't work.  

// Make sure you comment against tests that were failing and note that they were failing, why they failed and what you did to fix them.



const palindromeChecker = (value) => {

  if (typeof value == 'string' || typeof value == 'number') {
    
    if (typeof value == 'number') {
      value = value.toString();
    };//Added in if statement after some research on methods .split(), .reverse(), .join('') to fix test cases 1.3 and 1.4 in the palindromeChecker.test.js file. This if statement convert the number into a string so value.split('').reverse().join('') can run as split method will not work unless its data type is a string

    if (typeof value == 'string') {
      value = value.toLowerCase()//method returns the calling string value converted to lower case
      value = value.replace(/\s/g, '')
      value = value.replace(/\./g, '')
      value = value.replace(/\?/g, '')
      value = value.replace(/\!/g, '')
      value = value.replace(/\,/g, '')
    };//JavaScript method replaces white/blank spaces, commas, explanation marks and full stops with '' and empty string, essentially removing those invalid inputs from the string entirely so pass test case 4.5 in the plindromeChecker.test.js file
    //To improve coding practice the regex could be combined into one statement

    var reverseValue = value.split('').reverse().join('')//Split will only work on a string data type value (it splits string object into an array of strings by separating into substrings), reverse only works on arrays(firt array element becomes last and last becomes first) and lastly join converts the array back into a string(joins all elements of array into string)

    
    for (i=0; i<value.length; i++) {
      if (value[i] != reverseValue[i]) {
        return false
      }
    }
    return true
  }
  else{
    throw new TypeError('Invalid data type detected');
  }
};

module.exports = palindromeChecker;