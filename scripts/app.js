// JavaScript Document
var main = function() {

/*-------------Progress Bar-------------*/ 
$('.progressUpdate').click(function() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
	if (width >= 100) {
      clearInterval(id);
	  elem.style.backgroundColor= "#a9cf54";
    } else {
	  elem.style.backgroundColor= "#f38640";
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
});

/*-------------Toggle Hide/Show-------------*/ 
	
	$(".expandCollapse").click(function () {
	
   $(this).next().slideToggle(500);
   
	
	});
	
    /*-------------Login Show Required on Submit-------------*/
    $('.loginBtn').click(function() {
        var email = document.getElementById("emailLogin").value;
        var password = document.getElementById("passwordLogin").value;
        if (email === "") {
            document.getElementById("message1").innerHTML = "* Required";
        } else {
            document.getElementById("message1").innerHTML = "";
        }
        if (password === "") {
            document.getElementById("message2").innerHTML = "* Required";
        } else {
            document.getElementById("message2").innerHTML = "";
        }
    });
	

	
}; // End Main
$(document).ready(main);