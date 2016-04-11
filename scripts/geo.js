// JavaScript Document

/*-------------Find Current Location-------------*/
	var locMsg = document.getElementById("locMsg");
	
	function getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition, showError);
		} else {
			locMsg.innerHTML = "Geolocation is not supported by this browser.";
		}
	}
	
	function showPosition(position) {
		locMsg.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude;	
	}
	
	function showError(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
				locMsg.innerHTML = "User denied the request for Geolocation."
				break;
			case error.POSITION_UNAVAILABLE:
				locMsg.innerHTML = "Location information is unavailable."
				break;
			case error.TIMEOUT:
				locMsg.innerHTML = "The request to get user location timed out."
				break;
			case error.UNKNOWN_ERROR:
				locMsg.innerHTML = "An unknown error occurred."
				break;
		}
	}