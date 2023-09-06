
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}


$(document).ready(function(){ 
  console.log("adminsession ready");

	$.get("/adminInfo",function(data){
		if (data.username) {
      console.log("in adminInfo");
      $("#session").html("Admin Session " + data.username);

    }
	});

	$("#logout").click(logoutClicked);


});  		
    


