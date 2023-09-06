function logoutClicked(){
  $.get("/logout",function(data){
    window.location = data.redirect;
  });
  return false;
}

function updateClicked(){
  $.ajax({
    url: "/updateInfo",
    type: "PUT",
    data: {grade:$("#grade").val(),opt1:$("#sports1").prop("checked"),
           opt2:$("#sports2").prop("checked"),opt3: $("#sports3").prop("checked")},
    success: function(data){

    } ,
    dataType: "json"
  });
  return false;
}

function readClicked(){
  $.get("/getInfo",function(data){
    $("#grade").val(data.grade);
    $("#sports1").prop("checked",data.opt1);
    $("#sports2").prop("checked",data.opt2);
    $("#sports3").prop("checked",data.opt3);

  });
  return false;
}

$(document).ready(function(){
  /*
  $.get("/userInfo",function(info){
    if (info.username)
      $("#session").html("Session " + info.username);

  });
  */
  $.get("/getInfo",function(data){
    $("#session").html("Session " + data.name);
    $("#grade").val(data.grade);
    $("#sports1").prop("checked",data.opt1);
    $("#sports2").prop("checked",data.opt2);
    $("#sports3").prop("checked",data.opt3);

  });

});
