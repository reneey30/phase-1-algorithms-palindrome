function isPalindrome(word) {
  // Write your algorithm here
  let wordToCheck  = word.toLowerCase()
  let toCompare = wordToCheck.split('').reverse().join('')
  let Bool; 
  if(wordToCheck === toCompare){
    Bool = true;
  } else {
    Bool = false
  }
  return Bool
}

// isPalindrome("abba")

/* 
  Add your pseudocode here
  get the word in smal case
  reverse the word and save in a variable
  check if the two words match 
  if the march return true
  else return false
*/



 /* Add written explanation of your solution here
function isPalindrome(word) { //==> creates a function
  let wordToCheck  = word.toLowerCase()  //=> converts the word passed to string
  let toCompare = wordToCheck.split('').reverse().join('') //=> creates a reversed word
  let Bool; // => creates an empty variable
  if(wordToCheck === toCompare){  //=> compares the two words ie. The reverse and the actual word
    Bool = true; //==> assigns the empty variable a booleen true if the conditon is met
  } else {
    Bool = false // ==> assigns the empty variable a booleen value false if they do not match
  }
  return Bool // ==> returns the variable bool which is either true or false depending on string passed
}
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