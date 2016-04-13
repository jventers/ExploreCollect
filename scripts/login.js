// JavaScript Document
var main = function() {
   
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