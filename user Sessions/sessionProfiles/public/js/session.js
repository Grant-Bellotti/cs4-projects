function logoutClicked(){
  console.log("session logoutClicked")
	$.get("/logout",function(data){
    console.log("session logout function callback");
		window.location = data.redirect;
	});
  return false;
}
function updateClicked(){
  $.get("/userInfo",function(data){
		if (data.username)
    $.ajax({
      url: "/changeInfo",
      type: "POST",
      data: {name: data.username, grade:$("#grade").val(), opt1:$("#sports1").prop("checked"),
             opt2:$("#sports2").prop("checked"),opt3: $("#sports3").prop("checked")},
      success: function(data2){
          if (data2.error)
            alert("bad");
          else
            alert("good");
        } ,
      dataType: "json"
    });

	});
  return false;
}

function readClicked(){
  $.get("/userInfo",function(data){
		if (data.username)
    $.ajax({
      url: "/getInfo",
      type: "GET",
      data: {name: data.username},
      success: function(data2){
          if (data2.error)
            alert("bad");
          else
            alert(data2);
        } ,
      dataType: "json"
    });

	});
  return false;
}


$(document).ready(function(){
  console.log("session doc ready")
	$.get("/userInfo",function(data){
    console.log("session get userInfo function callback");

		if (data.username)
			$("#session").html("Session " + data.username);
	});

	$("#logout").click(logoutClicked);

});
