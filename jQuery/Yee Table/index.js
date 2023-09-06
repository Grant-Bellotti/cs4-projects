function msg2() {
    if ($("#tableIndex").val() <= $("#theTable tr").length-1 &&
    $("#tableIndex").val() != 0)
    {
        $("#error").html("");
        let index = 0;
        $("#theTable tr").each(function()
        {
                if (index == $("#tableIndex").val())
                {
                    $("#username").val($(this).find("td:eq(0)").text());
                    $("#grade").val($(this).find("td:eq(1)").text());
                }
                index++;
        });
    }
    else
    {
        $("#error").html("Index not in bounds");
    }
}


$(document).ready(function()
{
    $("form").submit(function(event)
    {
        let error = false;
        $("#theTable tr").each(function()
        {
            if ($(this).find("td:eq(0)").text() == $("#username").val())
                error = true;
        });

        if ($("#username").val() == "") {
            $("#error").html("A Name Must Be Entered");
            return false;
        }
        else if (error) {
            $("#error").html("Name Already Entered");
            return false;
        }
        else
        {
            $("#error").html("");
        }

        $("#theTable").append("<tr class='tr1'><td>" + $("#username").val()
        +"</td>" + "<td>" + $("#grade").val() +"</td>");
        return false;
    });
});
