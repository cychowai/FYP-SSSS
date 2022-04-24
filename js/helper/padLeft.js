//filling bits when changing base for string with 
function padLeft(str, multipleOfBits) {
  var missingBits;

  //no padding needed for case 0 or 1
  if (multipleOfBits === 0 || multipleOfBits === 1) {
      return str;
  }

  //if there is no multipleOfBits put in this function, it will use the default bits
  multipleOfBits = multipleOfBits || defaultBits;

  //calculating the missing bits needed for filling on left
  if (str) {
      missingBits = str.length % multipleOfBits;
  }

  //adding padding with missing bits on the left of the string
  if (missingBits) {
      //pre-generated padding : an array of "0" for adding up bits
      //'-' use for slice text from the rightmost with missing bits + string
      return (preGenPadding + str).slice(-(multipleOfBits - missingBits + str.length));
  }
  
  return str;
}