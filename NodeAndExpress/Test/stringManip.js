exports.change = function(word,type) {
  let finalWord = "";
  if(type == 0) {
    finalWord = word.toUpperCase();
  }
  else if(type == 1) {
    finalWord = word.toLowerCase();
  }
  else if(type == 2) {
    let temp = [];
    let index = 0;
    for (var i = word.length - 1; i >= 0; i--) {
      temp[index] = word.charAt(i);
      index++;
    }
    finalWord = temp.join("");
  }
  return finalWord;
}
