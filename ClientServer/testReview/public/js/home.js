function createClicked(){
          $.ajax({
            url: "/create",
            type: "POST",
            data: {identifier:$("#identifier").val(),
                    name:$("#name").val(), color:$("#color").val(),
                    residence:$("input:radio[name='residence']:checked").val(),
                    image:$("#fileStuff").val()
                  },
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
                else {
                  $("#name").val(data.name);
                  $("#color").val(data.color);
                  $("#"+data.residence).prop("checked",true);
                  image1.src = data.image;
                }
              } ,
            dataType: "json"
          });
  return false;
}
function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {identifier:$("#identifier").val(),
            name:$("#name").val()
            },
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
    let trimIdentifier = $("#identifier").val().trim();

    if (trimIdentifier == "") {
      alert("bad");
      return false;
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) {
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

  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);

});
