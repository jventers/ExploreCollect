// JavaScript Document
$(function() {

var $slideshow = $('#slideshow');
var $allPics = $slideshow.find('.allPics');
var $pic = $allPics.find('.pictureFrame');
var animationSpeed = 250;
var currentSlide = 1;

$('.nextPic').click(function() {
	$allPics.animate({'margin-left': '-=295px'}, animationSpeed, function(){
		currentSlide++;
		if(currentSlide === $pic.length){
			currentSlide = 1;
			$allPics.animate({'margin-left': '0px'}, animationSpeed);
		} // End if
	}); // End allPics.animate
}); // End nextPic.click

$('.prevPic').click(function() {
	if(currentSlide > 1){
		currentSlide--;
		$allPics.animate({'margin-left': '+=295px'}, animationSpeed);
	}// End if
}); // End prevPic.click

});