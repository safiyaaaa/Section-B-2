const palindromeChecker = require('./palindromeChecker');

//palindromeChecker testing, test plan located in the PC Plan.pdf file attached within the replit
describe('1. Correctness test suite', () => {

  test.each([
      ['12321', true],
      ['ada', true],
      ['3882883', true],
      
    ])('1.1 Checks string palindrome returns true ', (a, expected) => {
      expect(palindromeChecker(a)).toBe(expected);
  });//The test.each syntax is based of the Jest framework, enabling all tests to be ran individually. Initally I had stacked six expect statements(assertions .toBe). In doing so only one test title would show in my shell, signifying only one test has been ran instead of passing all 6 individual tests

  test.each([
      ['4567', false],
      ['12345', false],
      ['12345', false],
      
    ])('1.2 Checks string that are not palindrome returns false ', (a, expected) => {
      expect(palindromeChecker(a)).toBe(expected);
  });

  test.each([
      [12321, true],
      [78942124987, true],
      [11811, true],
      
    ])('1.3 Checks integer palindrome returns true', (a, expected) => {
      expect(palindromeChecker(a)).toBe(expected);
  });

  test.each([
      [5678, false],
      [778017, false],
      [6230334, false],
      
    ])('1.4 Checks integer that are not palindrome returns false', (a, expected) => {
      expect(palindromeChecker(a)).toBe(expected);
  });//Both test cases 1.3 and 1.4 testing integers both initially failed, to fix this I added an if ststement to the palindromeChecker function within the palindromeChecke.js file after some research on the JavaScrip methods used, .split, .reverse, .join. Furthur explanation in the palindromeChecker.js file
});

//Reliability test suit
describe('3. Testing accuracy of palindromeChecker ', ()=> {//Re-testing a limited amount of test cases reduces dublication but efficiently confirm validation after integration testing(merging code in the palindromeChecker function within the palindromeChecker.js file) 

  test('3.1 Re-testing code is fixed', () => {
    expect(palindromeChecker('ada')).toBeTruthy();
  });

  test('3.1.1 Re-testing code is fixed for string inputs', () => {
    expect(palindromeChecker('12345')).toBeFalsy();//Re-testing test case 1.1 string pendulium returns true or false to confirm validation by ensuring the developed solution that I coded in the palindromeChecker.js file conforms to specified requirements that string palindrome returns true or false where appropriate
  });

  test('3.2 Re-testing code is fixed for integer inputs', () => {
    expect(palindromeChecker(1111)).toBeTruthy();
  });

  test('3.2.1 Re-testing code is fixed for integer inputs', () => {
    expect(palindromeChecker(5678)).toBeFalsy();//toBeFalsy applied from the jest framework library, to check a value is false. In this context toBeFalsy checks array data type retuns boolean false
    //Re-testing test case 1.2 integer pendulium returns true or false to confirm validation by ensuring the developed solution that I coded in the palindromeChecker.js file conforms to specified requirements that integer palindrome returns true or false where appropriate
  });
//Test cases 3.1, 3.1.1, 3.2 and 3.2.1 assertions use Jest framework toBeFalsy() and toBeTruthy() that return boolean false or boolean true when appropriate this matches the requirements listed in palindromeChecker.js file

  test.each([
      ['software', true],
      ['after', true],
      ['2022', true],
      
    ])(' 3.3 Checks regular strings returns false', (a, expected) => {
      expect(palindromeChecker(a)).not.toBe(expected);
  });

  test.each([
      ['level', false],
      ['madam', false],
      ['811118', false],
      
    ])(' 3.3.1 Checks palindrome strings returns false', (a, expected) => {
      expect(palindromeChecker(a)).not.toBe(expected);
  });

  test.each([
      [12000, true],
      [9903, true],
      [66615, true],
      
    ])(' 3.2 Checks regular integer returns false', (a, expected) => {
      expect(palindromeChecker(a)).not.toBe(expected);
  });

  test.each([
      [11111, false],
      [4467644, false],
      [202, false],
      
    ])(' 3.2.1 Checks palindrome integer returns false', (a, expected) => {
      expect(palindromeChecker(a)).not.toBe(expected);
  });

  test('3.3 There is no A in the string noon', () => {
    expect('noon').not.toMatch(/A/);
  });//Experimenting with test cases that include regex syntax, as Ive added in regex statements to my palindromeChecker.js file to later assist in my robustness testing suite
});

//Robustness testing suite
describe('4. Negative testing through Error guessing ', () => {
   test.each([ 
      [{ value: 30 }, TypeError('Invalid data type detected')],//Object data type
      [true, TypeError('Invalid data type detected')],

    ])(' 4.1 Other data types give error ', (a, expected) => {
      expect(() => palindromeChecker(a)).toThrow(expected);
  });//These tests are a form of negative testing, passing unexpected inputs into the boards to correctly throw an error and returns the string Invalid data type detectedusing the Jest Framework

  test('4.2 Tests if no argument passed through return error', () => {
    expect(() => palindromeChecker()).toThrow(TypeError('Invalid data type detected'));
  });
  
  test('4.3 Checks capitalised string palindrome inputs also return true', () => {
    expect(palindromeChecker('CIVIC')).toBeTruthy();
  });

  test('4.4 Checks string palindrome sentence inputs return true', () => {
    expect(palindromeChecker('step on no pets')).toBeTruthy();
  });

  test.each([
      ['was it a cat I saw?', true],
      ['Evil, olive!', true],
      
    ])('4.5 Punctuation in palindromic sentence inputs return true', (a, expected) => {
      expect(palindromeChecker(a)).toBe(expected);
  });//These are further tests of unexpected inputs, this initially failed. To fix this so both tests passed I added regex statements within the palindromeChecker function in the palindromeChecker.js file by using the JavaScript method replace to remove white/blank spaces, commas, explanation marks and full stops with '' and empty string, essentially removing those invalid inputs from the string entirely so palindromic sentences still return boolean true
  
  test('4.6 Mixed capital and lower case string palindrome returns true', () => {
    expect(palindromeChecker('CIvic')).toBeTruthy();
  });//This is my final robustness test case, initially this failed, I fixed it by adding the .toUpperCase() JavaScript method into the palindromeChecker function in the palindromeChecker.js file which turns lower case stings into upper case strings (does not alter the original string) this enables boolean true to be returned as the string is palindromic.

  test('4.7 Mixed capital, lower case lettering and punctuation string palindrome sentence returns true', () => {
    expect(palindromeChecker('borrOW or RoB')).toBeTruthy();
  });
});

//Please check the PC Test Plan .pdf file that I attached to this replit to give an in depth insight to my testing approach

//To furthur confirm completeness I used https://htmlpreview.github.io/ and added the github URL of this replitgenerated in Version control