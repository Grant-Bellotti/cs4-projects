let name = [];
let day = [];
let month = [];
let year = [];
let date = [];
let residence = [];
let index = 0;
function handleButtonClick() {
  let row = $("#indexNum").val();
  if(name[row-1] && row > 0) {
    $("#name").val(name[row-1]);
    $('#birth').val(date[row-1]);
    $("#"+residence[row-1]).prop("checked",true);
  }
  else if (row < 1) {
    alert("there are no rows less than row 1")
  }
  else {
    alert("there is no student in that row")
  }
}

function clearTable() {
  for (let i=0;i<index;i++) {
    name[i] = "";
    day[i] = "";
    month[i] = "";
    year[i] = "";
    date[i] = "";
    residence[i] = "";
  }
  $("#theTable td").parent().remove();
  index = 0;
}

$(document).ready(
  function()
  {
    $("form").submit(
      function(event)
      {
        if($("#name").val()) {
          for (let i=0;i<index;i++) {
            //console.log(names[i]);
            if(name[i] == $("#name").val()) {
              alert("this name is taken");
              return false;
            }
          }
          let today = new Date();
          let tempDate = new Date($('#birth').val());
          day = tempDate.getDate()+1;
          month = tempDate.getMonth() + 1;
          year = tempDate.getFullYear();
          if(today < tempDate) {
            alert("that date has not happened")
            return false;
          }
          if(day == 32) {
            day = 1;
            if(month == 12) {
              month = 1;
              year ++;
            }
            else
              month++
          }
          if(day < 10)
            day = ("0"+day)
          if(month < 10)
            month = ("0"+month)
          name[index] = $("#name").val();
          date[index] =[year, month, day].join('-');
          residence[index] = $("input:radio[name='residence']:checked").val();

          $("#theTable").append("<tr class='tr1'><td>" + $("#name").val()
          +"</td>" + "<td>" + date[index] +"</td>" + "<td>"
          + $("input:radio[name='residence']:checked").val());
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
