function splitStringToArray(str, padLength) {
  var parts = [];
  
  //padlength variable allows us to set the padding manually
  if (padLength) {
      str = padLeft(str, padLength);
  }

  //split the string into different pieces by array using default bits
  //parse to base 2
  for (var i = str.length; i > defaultBits; i -= defaultBits) {
      parts.push(parseInt(str.slice(i - defaultBits, i), 2));
  }

  //last case for remaining length is not multiple of default bits
  parts.push(parseInt(str.slice(0, i), 2));

  return parts;
}