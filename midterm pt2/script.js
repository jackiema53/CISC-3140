

function myKeyPress(e){

  /* TODO: retrieve the value from the text input */
 var myphone = document.getElementById("phone").value;


  // TODO: set the value of the textbox with the formatted value

var keyPressed;
 if(window.event) { // IE
   keyPressed = e.keyCode;
 } else if(e.which){ // Netscape/Firefox/Opera
   keyPressed = e.which;
 }

 var x = String.fromCharCode(keyPressed);
 var y = formatPhoneNumber(myphone);



  // TODO: Add a condition to ignore entries beyond 10 digits
 if (!isNumeric(x) || y.length > 11) {
  event.preventDefault();
}


 document.getElementById("phone").value = y;
}

function isNumeric(key) {
  return key >= 0 && key <= 9;
}


function formatPhoneNumber(value){
 /* TODO:  Use replace function to ignore extra - character */

  if (value.length === 3) {
     value += "-";
  }

  if (value.length === 7) {
     value += "-";
  }

 return value;

}
