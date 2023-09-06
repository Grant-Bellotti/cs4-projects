exports.calculate = function(shape,type,num1,num2) {
  let finalNum = 0;
  if (shape == 0 && type == 0) {
    finalNum = (num1*num1);
  }
  else if (shape == 0 && type == 1) {
    finalNum = (num1*4);
  }
  else if (shape == 1 && type == 0) {
    finalNum = (num1*num2);
  }
  else if (shape == 1 && type == 1) {
    finalNum = ((num1*2)+(num2*2));
  }
  return finalNum;
}
