
function validate(num) {
  //Output CC number into an array
  let arr = String(num).split("");
  arr.forEach(function(str, index){ arr[index] = Number(str)});
  
  //Set iterator starting position depending on length
  let iter = (arr.length % 2 === 0) ? 0 : 1;
  
  //Iterate over card number doubling every other number
  for (let i = iter; i < arr.length; i += 2) {
    arr[i] *= 2;
    arr[i] > 9 ? arr[i] -= 9 : null;
  }
  
  //Add all adjusted numbers in array
  let total = arr.reduce((a, b) => a + b, 0);
 
  //Validate by finding modulus === 0
  return total % 10 === 0 ? true : false;
};

