let names = [];
let age = [];
let grades = [];
let index = 0;
function handleButtonClick() {
  let row = $("#indexNum").val();
  if(names[row-1] && row > 0) {
    $("#username").val(names[row-1]);
    $("#age").val(age[row-1]);
    $("#grade").val(grades[row-1]);
  }
  else if (row < 1) {
    alert("there are no rows less than row 1")
  }
  else {
    alert("there is no name in that row")
  }
}

$(document).ready(
  function()
  {
    $("form").submit(
      function(event)
      {
        if($("#username").val()) {
          for (let i=0;i<index;i++) {
            //console.log(names[i]);
            if(names[i] == $("#username").val()) {
              alert("this name is taken");
              return false;
            }
          }
          names[index] = $("#username").val();
          age[index] = $("#age").val();
          grades[index] = $("#grade").val();
          index++;
          $("#theTable").append("<tr class='tr1'><td>" + $("#username").val()
      		+"</td>" + "<td>" + $("#age").val() +"</td>" + "<td>" + $("#grade").val() +"</td>");
        }
        else {
          alert("a name must be entered");
        }
    		return false;
      }
    );
  }
);
