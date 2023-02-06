function reverseString(str) {
    let reverseString = ""
    for (let i = str.length - 1; i >=0; i--) {
    reverseString += str[i]
  }
  return reverseString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// take argument and determine length
// take length and slice it starting from end
// stop slicing when you hit 0
// return value
