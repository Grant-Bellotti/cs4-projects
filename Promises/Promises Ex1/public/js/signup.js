
 		
  		function userClicked(){

          if ($("#username").val() == "" || $("#psw").val() == "")
          {
            alert("bad signup");
            return false;
          }          
          $.post("/signup",{username:$("#username").val(), password:$("#psw").val()},function(data)
          {
            console.log(data.redirect);
            if (data.redirect == "/session" && $("#username").val() != "admin" && $("#username").val() != "librarian")
            {
              createClicked();
            }
            window.location = data.redirect;
          });
          
    			return false;
    	}

      function createClicked(){

          $.ajax({
            url: "/create",
            type: "POST",
            data: {
            grade:9,volleyball:false,basketball:false,soccer:false
            },
            success: function(data){
              if (!data.retVal)
                alert("bad create");
              else
                alert("good create");
              } ,     
            dataType: "json"
          });  
        return false;
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
    

