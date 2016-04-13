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
                elem.style.backgroundColor = "#a9cf54";
            } else {
                elem.style.backgroundColor = "#f38640";
                width++;
                elem.style.width = width + '%';
                document.getElementById("label").innerHTML = width * 1 + '%';
            }
        }
    });

    /*-------------Toggle Hide/Show-------------*/

    $(".expandCollapse").click(function() {
        $(this).next().slideToggle(500);
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