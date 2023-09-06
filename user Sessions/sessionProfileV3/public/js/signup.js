function userClicked(){
  console.log("signup userClicked")
  $.post("/signup",{username:$("#username").val(), password:$("#psw").val()},function(data) {
    console.log("signup callback function")
    if (data.redirect == "/session") {
      createClicked();
    }
    window.location = data.redirect;
  });

  return false;
}

function createClicked(){
  $.ajax({
    url: "/createUserInfo",
    type: "POST",
    data: {grade:9,opt1:false,opt2:false,opt3:false},
    success: function(data){

    } ,
    dataType: "json"
  });
}

$(document).ready(function(){

       $("#username").keydown( function( event ) {
           if ( event.which === 13 ) {
             userClicked();
             event.preventDefault();
             return false;
           }
       });

       $("#psw").keydown( function( event ) {
           if ( event.which === 13 ) {
             userClicked();
             event.preventDefault();
             return false;
           }
       });

});
