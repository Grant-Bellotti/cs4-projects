let text_input1 = document.getElementById("num1");
let text_input2 = document.getElementById("num2");
let sign_input = document.getElementById("sign");

function handleButtonClick()
{
  let list_item = document.createElement("li");
  if(sign_input.value == "add") {
    list_item.textContent = text_input1.value + " " + "+" + " " + text_input2.value + " " + "=" + " " +
    (parseInt(text_input1.value)+parseInt(text_input2.value));
  }
  else if(sign_input.value == "subtract") {
    list_item.textContent = text_input1.value + " " + "-" + " " + text_input2.value + " " + "=" + " " +
    (parseInt(text_input1.value)-parseInt(text_input2.value));
  }
  else if(sign_input.value == "multiply") {
    list_item.textContent = text_input1.value + " " + "*" + " " + text_input2.value + " " +  "=" + " " +
    (parseInt(text_input1.value)*parseInt(text_input2.value));
  }
  else if(sign_input.value == "divide") {
    list_item.textContent = text_input1.value + " " + "÷" + " " + text_input2.value + " " + "=" + " " +
    (parseInt(text_input1.value)/parseInt(text_input2.value));
  }
  else if(sign_input.value == "exponent") {
    var temp = 1;
    for(var i=0;i<text_input2.value;i++)
      temp = temp*text_input1.value;
    list_item.textContent = text_input1.value + " " + "^" + " " + text_input2.value + " " + "=" + " " + temp;
  }

  let list = document.getElementById("playlist");
  list.appendChild(list_item);
  text_input1.value = "";
  text_input2.value = "";
}

function init()
{
	var button = document.getElementById("calcButton");
  button.onclick = handleButtonClick;
}
window.onload = init;
