// JavaScript Document
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
	
}; // End Main
$(document).ready(main);