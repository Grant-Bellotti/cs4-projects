function logoutClicked(){
  $.get("/logout",function(data){
    window.location = data.redirect;
  });
  return false;
}

function updateClicked(){
  $.ajax({
    url: "/updateInfo",
    type: "GET",
    data: {grade:$("#grade").val()},
    success: function(data){

    } ,
    dataType: "json"
  });
  return false;
}

function readClicked(){
  $.get("/getInfo",function(data){
    $("#grade").val(data.grade);

  });
  return false;
}

$(document).ready(function(){
  $.get("/userInfo",function(info){
    if (info.username)
      $("#session").html("Session " + info.username);

  });
  $.get("/getInfo",function(data){
    $("#grade").val(data.grade);

  });

});
