function createClicked(){
  $.ajax({
    url: "/create",
    type: "POST",
    data: {identifier:$("#identifier").val(),name:$("#name").val()},
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
      else
        alert("good");
     $("#name").val(data.name);
    } ,
    dataType: "json"
  });
  return false;
}

function updateClicked(){
  $.ajax({
    url: "/update",
    type: "PUT",
    data: {identifier:$("#identifier").val(),name:$("#name").val()},
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

$(document).ready(function(){
  $("#submit").click(createClicked);
  $("#read").click(readClicked);
  $("#update").click(updateClicked);
  $("#delete").click(deleteClicked);

});
