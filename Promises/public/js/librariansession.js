
let identList = [];

  		function listClicked(){

    $.get("/listBook",{},
          function(data){
              if (!data.retVal)
                alert("bad read");
              else {
               console.log(data.retVal.length);
               $(".tr1").remove();  
               for (var i=0;i<data.retVal.length;i++) {
//                  console.log(data.retVal[i].title);
//                  console.log(data.retVal[i].author);
//                  console.log(data.retVal[i].pages);
$("#theTable").append("<tr class='tr1'><td>" + data.retVal[i].title +"</td>" + 
"<td>" + data.retVal[i].author +"</td>" +
"<td>" + data.retVal[i].pages +"</td>");


               }
      
                alert("good read");
              }
            }  

          );



  		  return false;
  		}
      

      function addClicked(){
console.log("in addClicked");

          $.ajax({
            url: "/createBook",
            type: "POST",
            data: {
//            title:"Enders Game",author:"Orson Scott Card",pages:305
            title:$("#title").val(),author:$("#author").val(),pages:$("#pages").val()
            },
            success: function(data){
              if (!data.retVal)
                alert("bad create");
              else
                alert("good create");

    $.get("/listBook",{},
          function(data){
              if (!data.retVal)
                alert("bad read");
              else {
               console.log(data.retVal.length);
               $(".tr1").remove();  
               for (var i=0;i<data.retVal.length;i++) {
//                  console.log(data.retVal[i].title);
//                  console.log(data.retVal[i].author);
//                  console.log(data.retVal[i].pages);
$("#theTable").append("<tr class='tr1'><td>" + data.retVal[i].title +"</td>" + 
"<td>" + data.retVal[i].author +"</td>" +
"<td>" + data.retVal[i].pages +"</td>");


               }
      
                alert("good read");
              }
            }  

          );
              
              } ,     
            dataType: "json"
          });  


        return false;
      }

 		
function logoutClicked(){
	$.get("/logout",function(data){
		window.location = data.redirect;
	});
	return false;             
}


$(document).ready(function(){ 
  console.log("librariansession ready");
  $("#listButton").click(listClicked);
  $("#addButton").click(addClicked);


    $.get("/listBook",{},
          function(data){
              if (!data.retVal)
                alert("bad read");
              else {
               console.log(data.retVal.length);
               $(".tr1").remove();  
               for (var i=0;i<data.retVal.length;i++) {
//                  console.log(data.retVal[i].title);
//                  console.log(data.retVal[i].author);
//                  console.log(data.retVal[i].pages);
$("#theTable").append("<tr class='tr1'><td>" + data.retVal[i].title +"</td>" + 
"<td>" + data.retVal[i].author +"</td>" +
"<td>" + data.retVal[i].pages +"</td>");


               }
      
                alert("good read");
              }
            }  

          );

/*
	$.get("/adminInfo",function(data){
		if (data.username) {
      console.log("in adminInfo");
      $("#session").html("Admin Session " + data.username + " " + data.ident);
      identList = [];
//console.log(data.userList);
        for (let i=0;i<data.userList.length;i++) {
          console.log(data.userList[i].name);
          identList.push({ident:data.userList[i].ident});
          $('#names').append($('<option>', { value : data.userList[i].name }).text(data.userList[i].name));
        }



    }
	});
*/


	$("#logout").click(logoutClicked);

  $("form").submit(function(event)
  {
  
    return false;
  })



});  		
    


