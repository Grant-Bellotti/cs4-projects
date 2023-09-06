
$(document).ready(function() {
    $("form").submit(function(event) {
      console.log("here i am");
      console.log($("#fileStuff").val());

      if ($("#fileStuff").val() == "")
        return false;

    });
});
