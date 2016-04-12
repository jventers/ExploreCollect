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
    
function addEvents() {
    var scrollbox = document.getElementById('scrollbox');
    
    // Create div
    var newElement = document.createElement('div');//to hold events/locations info box
    newElement.setAttribute('id', "new-info-box");
    
    newElement.innerHTML = 'New event has been added!'; 
    
    scrollbox.appendChild(newElement);
}
function addLocations() {
    var scrollbox = document.getElementById('scrollbox');
    
    // Create div
    var newElement = document.createElement('div');//to hold events/locations info box
    newElement.setAttribute('id', "new-info-box");
    
    newElement.innerHTML = 'New event has been added!'; 
    
    scrollbox.appendChild(newElement);
}
    

	

	
}; // End Main
$(document).ready(main);
