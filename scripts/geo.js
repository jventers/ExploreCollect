<<<<<<< HEAD
// JavaScript Document
=======
>>>>>>> origin/dev_john
var locationText;
var coordinates;
window.onload = function() {
	var location;
	var coords;
	var startPos;
	var geoOptions = {
		enableHighAccuracy: true
	}

	var geoSuccess = function(position) {
		var geocoder = new google.maps.Geocoder;
		var infowindow = new google.maps.InfoWindow;

		startPos = position;
		console.log(startPos);
		//var location = "long: " + startPos.coords.longitude + " Lat: " + startPos.coords.latitude;
		var latlng = {lat:startPos.coords.latitude,lng:startPos.coords.longitude};
		coords = latlng;
		coordinates = coords;
		//document.getElementById('location').innerHTML = location;

		geocoder.geocode({'location': latlng}, function(results, status) {
			if (status === google.maps.GeocoderStatus.OK) {
				if (results[1]) {

					location = results[2].formatted_address + "\<br> long: " + startPos.coords.longitude + " Lat: " + startPos.coords.latitude;
				//	console.log(results,results[1].formatted_address);
					infowindow.setContent(results[1].formatted_address);
					document.getElementById('location').innerHTML = location;
					locationText = results[2].formatted_address;
				} else {
					window.alert('No results found');
				}
			} else {
				window.alert('Geocoder failed due to: ' + status);
			}
		});



	};
	var geoError = function(error) {
		console.log('Error occurred. Error code: ' + error.code);
		// error.code can be:
		//   0: unknown error
		//   1: permission denied
		//   2: position unavailable (error response from location provider)
		//   3: timed out
	};

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
};

function getCoordinates(){


	locationText = locationText.split(" ");


	document.getElementById("currentCity").innerHTML = locationText[0];
	return coordinates;
}

function getLocation(){
	//document.getElementById('myBar').innerHTML = '\<h2 class="city">' + locationText + '\</h2>';
	return locationText;

}