var main = function() {

    /*-------------Main Menu Animations-------------*/
    var navBool = true;
    $('.menuBtn').click(function() {
        // The first time the button is pressed
        if (navBool) {
            //  Push the menu over
            $('.menu').animate({
                left: "0px"
            }, 250);
            // Push the navBtn over
            $('.menuTop').animate({
                left: "0px"
            }, 250);

            // Rotate ellipsis clockwise
            $('.fa-ellipsis-v').animate({
                borderSpacing: 90
            }, {
                step: function(now) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 250
            }, 'linear');
            navBool = false;
        } // end if

        // The second time the button is pressed
        else {
            // Pull the menu back off the screen
            $('.menu').animate({
                left: "-25rem"
            }, 250);
            // Pull the button back off the screen
            $('.menuTop').animate({
                left: "-18.75rem"
            }, 250);
            // Rotate ellipsis back to center (counter-clockwise)
            $('.fa-ellipsis-v').animate({
                borderSpacing: 0
            }, {
                step: function(now) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 250
            }, 'linear');
            navBool = true;
        } // end else
    });

/*-------------Toggle Hide/Show-------------*/ 
    
    $(".expandCollapse").click(function () {

    $expandCollapse = $(this);
    //getting the next element
    $showHide = $expandCollapse.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $showHide.slideToggle(500);

});

/*-------------Progress Bar-------------*/ 
$('.progressUpdate').click(function() {
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById("label").innerHTML = width * 1  + '%';
    }
  }
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