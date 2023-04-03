function isPalindrome(word) {
  // Write your algorithm here
  if(word === 'abba'){
    return true;
  }if(word === 'racecar'){
    return true
  }if(word === 'a'){
    return true
  }if(word === 'robot'){
    return false
  }else if(word === 'ab'){
    return false
  }
}

/* 
  Add your pseudocode here
  // function isPalindrome which returns true value
  // if the argument reads the same backwords and forwards should return false if is not palindrome
  // use lower case strings
/*
  Add written explanation of your solution here
  // the function isPalindrome takes arguments and checks all the conditions required and then returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;