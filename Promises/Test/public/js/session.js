


 		
function logoutClicked(){
console.log("session logoutClicked")
	$.get("/logout",function(data){
console.log("session logout function callback");		
		window.location = data.redirect;
	});
	return false;             
}

function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {},
            success: function(data){
console.log(data.grade);
$("#grade").val(data.grade);
              } ,     
            dataType: "json"
          });   
	return false;             
}


function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {grade:$("#grade").val()},
            success: function(data){
//added              
                if (!data)
                  alert("bad");
                else if (data.error)
                    alert("bad");
              } ,     
            dataType: "json"
          });   
	return false;             
}



$(document).ready(function(){ 
console.log("session doc ready")
	$.get("/userInfo",function(data){
console.log("session get userInfo function callback");		

		if (data.name)
			$("#session").html("Session " + data.name);
		$("#grade").val(data.grade);
	});

	$("#update").click(updateClicked);
	$("#read").click(readClicked);
	$("#logout").click(logoutClicked);

});  		
    


