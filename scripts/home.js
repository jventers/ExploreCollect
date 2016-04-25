// JavaScript Document
var main = function() {

    /*-------------Progress Bar-------------*/
    $('.progressUpdate').click(function() {
        var $elem = $('.myBar');
		var $percent = $('.percentage');
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
                $elem.css('backgroundColor', '#a9cf54');
            } else {
                $elem.css('backgroundColor', '#f38640');
                width++;
                $elem.css('width', width + '%');
                $percent.html(width * 1 + '%');
            }
        }
    });

    /*-------------Toggle Hide/Show-------------*/
var expandBool = true;
    $('.expandCollapse').click(function() {
        $(this).next().slideToggle(500);
		if (expandBool) {
		// Rotate arrow clockwise
            $(this).prev().animate({
                borderSpacing: 90
            }, {
                step: function(now) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 250
            }, 'linear');
			expandBool = false;
		} // End if 
		// The second time the category is selected
        else {
            // Rotate arrow back to center (counter-clockwise)
            $(this).prev().animate({
                borderSpacing: 0
            }, {
                step: function(now) {
                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                    $(this).css('transform', 'rotate(' + now + 'deg)');
                },
                duration: 250
            }, 'linear');
            expandBool = true;
        } // end else
    });

/*
    var $cities = $('.city');
    if ($cities.is(':empty')) {
        $cities.css('display', 'none');
		$cities.parent().css('display', 'none');
		$cities.parent().parent().css('display', 'none');
		$cities.parent().parent().parent().css('display', 'none');
    } else {
        $cities.css('display', 'inline-block');
		$cities.parent().css('display', 'inline-block');
		$cities.parent().parent().css('display', 'inline-block');
		$cities.parent().parent().parent().css('display', 'inline-block');
    }
*/

}; // End Main
$(document).ready(main);