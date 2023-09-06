let color = ("#000000");
let r = 00;
let g = 00;
let b = 00;

function handleButtonClick() {
  color = $("#color").val();
  r = parseInt(color.substring(1,3), 16);
  g = parseInt(color.substring(3,5), 16);
  b = parseInt(color.substring(5,7), 16);
  let rgb = (r + " " + g + " " + b);
  alert($("#color").val());
  alert(rgb);
  //colorChangeMade(r,g,b); //updates when button clicked
    return false;
  }
//Change number boxes
  $(document).on('change', "#color", function() { //UPDATES NUMBERS INSTANTLY
    color = $("#color").val();
    r = parseInt(color.substring(1,3), 16);
    g = parseInt(color.substring(3,5), 16);
    b = parseInt(color.substring(5,7), 16);
      $('#r').val( r );
      $('#g').val( g );
      $('#b').val( b );
  });
  //Change color box
  $(document).on('change', "#r", function() {
    color = $("#color").val();
    let red = parseInt($("#r").val());
    g = parseInt(color.substring(3,5), 16);
    b = parseInt(color.substring(5,7), 16);
    $('#color').val(rgbToHex(red, g, b));
  });
  $(document).on('change', "#g", function() {
    color = $("#color").val();
    r = parseInt(color.substring(1,3), 16);
    green = parseInt($("#g").val());
    b = parseInt(color.substring(5,7), 16);
    $('#color').val(rgbToHex(r, green, b));
  });
  $(document).on('change', "#b", function() {
    color = $("#color").val();
    r = parseInt(color.substring(1,3), 16);
    g = parseInt(color.substring(3,5), 16);
    blue = parseInt($("#b").val());
    $('#color').val(rgbToHex(r, g, blue));
  });

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function colorChangeMade(red, green, blue) {
    $('#r').val( red );
    $('#g').val( green );
    $('#b').val( blue );
  }
