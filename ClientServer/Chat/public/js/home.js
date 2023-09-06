function createClicked(){
  $.ajax({
    url: "/postChat",
    type: "POST",
    data: {name:$("#name").val(),message:$("#message").val()},
    success: function(data){
      if(data.error)
        alert("The chat message must have a name and a message.");
      //let list = $("#playlist").val();
      else
        $("#playlist").html(data.sentence);
        $("#message").val("");
      //list.appendChild(data);
      } ,
    dataType: "json"
  });
  return false;
}
function polling() {
  $.ajax({
    url: "/getChat",
    type: "GET",
    data: {},
    success: function(data){
      $("#playlist").html(data.sentence);
      //list.appendChild(data);
      } ,
    dataType: "json"
  });

    let numMilliSeconds = 1000;   // 1000 milliseconds = 1 second
    setTimeout(polling, numMilliSeconds);
}

$(document).ready(function(){
  let first = true;
  $("#sendButton").click(createClicked);
  $("#message").keypress(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode != "13") //"event.which != 13" also works
    return;

    createClicked();
    $("#message").val("");
  });

  if (first) {
    polling();
    first = false;
  }
});
