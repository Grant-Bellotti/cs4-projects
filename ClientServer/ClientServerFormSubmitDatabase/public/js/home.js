function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {identifier:$("#identifier").val(),name:$("#name").val(),
                  grade:$("#grade").val(),drives:$("#dl").prop("checked")},
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,
            dataType: "json"
          });
  return false;
}
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {identifier:$("#identifier").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  $("#name").val(data.name);
                  $("#grade").val(data.grade);
                  if(data.drives == "true")
                    $("#dl").prop("checked",data.drives);
                  else
                    $("#dl").prop("checked",false);
                }
              } ,
            dataType: "json"
          });
  return false;
}
function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {identifier:$("#identifier").val(),name:$("#name").val(),
                  grade:$("#grade").val(),drives:$("#dl").prop("checked")},
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,
            dataType: "json"
          });
  return false;
}
function deleteClicked(){
    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) {
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,
      dataType: "json"
    });
    return false;
}

$(document).ready(function(){
  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);

});
