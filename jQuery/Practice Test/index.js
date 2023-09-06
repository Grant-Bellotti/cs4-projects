let object = [];
let color = [];
let red = [];
let green = [];
let blue = [];
let type = [];
let rating = [];
let index = 0;
function handleButtonClick() {
  let row = $("#indexNum").val();
  if(object[row-1] && row > 0) {
    $("#object").val(object[row-1]);
    $('#color').val(color[row-1]);
    $("#type").val(type[row-1]);
    $("#rating").val(rating[row-1]);
  }
  else if (row < 1) {
    alert("there are no rows less than row 1")
  }
  else {
    alert("there is no object in that row")
  }
}

$(document).ready(
  function()
  {
    $("form").submit(
      function(event)
      {
        if($("#object").val()) {
          for (let i=0;i<index;i++) {
            //console.log(names[i]);
            if(object[i] == $("#object").val()) {
              alert("this object is taken");
              return false;
            }
          }
          object[index] = $("#object").val();
          color[index] = $("#color").val();
          let r = parseInt(color[index].substring(1,3), 16);
          let g = parseInt(color[index].substring(3,5), 16);
          let b = parseInt(color[index].substring(5,7), 16);
          green[index] = g;
          blue[index] = b;
          type[index] = $("#type").val();
          rating[index] = $("#rating").val();

          $("#theTable").append("<tr class='tr1'><td>" + $("#object").val()
      		+"</td>" + "<td>" + r +"</td>" + "<td>" + g +"</td>" + "<td>" + b +"</td>"
          + "<td>" + $("#type").val() +"</td>" + "<td>" + $("#rating").val() +"</td>");
          index++;
        }
        else {
          alert("a name must be entered");
        }
    		return false;
      }
    );
  }
);
