let text_input = document.getElementById("textInput");
text_input.addEventListener("keypress", function(event) {
  if(event.code != "Enter") //"event.which != 13" also works
    return;

    let list_item = document.createElement("li");
    if(isNaN(parseInt(text_input.value)))
      list_item.textContent = "That is not a number.";
    else if(text_input.value > rand)
      list_item.textContent = "Choose a number less than " + text_input.value + ".";
    else if(text_input.value < rand)
      list_item.textContent = "Choose a number greater than " + text_input.value + ".";
    else if(text_input.value == rand)
      list_item.textContent = "Good job!! The number was " + text_input.value + ".";

    let list = document.getElementById("playlist");
    list.appendChild(list_item);
    text_input.value = "";
});

function init()
{
	var button = document.getElementById("addButton");
}
let rand = Math.floor(Math.random() * 10);
window.onload = init;
