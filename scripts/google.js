// JavaScript Document
//var main = function() {

/*-------------Find Current Location-------------*/

/*-------------Keep Track of Cities Added (Send to user.js)-------------*/

/*-------------Pull Location Information by Category-------------*/

/*-------------Login with Google-------------*/

/*-------------Individual Location - Google Map-------------*/
var map;
function initMap() {
var latitude = -25.363;
var longitude = 131.044;
var myLatLng = {lat: latitude, lng: longitude};

var mapCanvas = document.getElementById("googleMap");
var mapOptions = {
    center: myLatLng, 
	zoom: 12, 
	//disableDefaultUI: true,
	draggable: false,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};



/* Customize the Map Marker */ 
var image =  'images/map-marker-icon.png';
var marker = new google.maps.Marker({
    position: myLatLng,
    icon: image,
	title: 'Click to begin navigation'
  });  
 marker.setMap(map);
map = new google.maps.Map(mapCanvas, mapOptions);

// I don't understand what this line does but Google made it sound important
//google.maps.event.addDomListener(window, 'load', initMap);

/*
map.addListener('click', function() {
 // Add code here to start navigation when clicked
});
*/

} // End initMap


//}; // End Main
$(document).ready(initMap);
