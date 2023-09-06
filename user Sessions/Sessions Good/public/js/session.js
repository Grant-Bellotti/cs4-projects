function logoutClicked(){
  $.get("/logout",function(data){
    window.location = data.redirect;
  });
  return false;
}

function updateClicked(){
  $.get("/userInfo",function(info){
    $.ajax({
      url: "/updateInfo",
      type: "GET",
      data: {name:info.username, grade:$("#grade").val()},
      success: function(data){

      } ,
      dataType: "json"
    });
  });
  return false;
}

function readClicked(){
  $.get("/userInfo",function(info){
    $.ajax({
      url: "/getInfo",
      type: "GET",
      data: {name:info.username},
      success: function(data){
        $("#grade").val(data.grade);

      } ,
      dataType: "json"
    });
  });
  return false;
}

$(document).ready(function(){
  $.get("/userInfo",function(info){
    if (info.username)
      $("#session").html("Session " + info.username);

      $.ajax({
        url: "/getInfo",
        type: "GET",
        data: {name:info.username},
        success: function(data){
          $("#grade").val(data.grade);

        } ,
        dataType: "json"
      });
  });

});
