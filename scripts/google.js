// JavaScript Document


/*-------------Keep Track of Cities Added (Send to user.js)-------------*/
/*-------------Pull Location Information by Category-------------*/
/*-------------Login with Google-------------*/
/*-------------Individual Location - Google Map-------------*/

var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};




	function initMap() {

        var windowLocation = window.location;
        console.log(windowLocation);
        var myValue = windowLocation["search"];
        console.log(myValue);
        var ID = myValue.split("=");
        console.log(ID);
        var placeId = ID[1];
        console.log(placeId);



		var latitude = 46.876973;
		var longitude = -114.016406;
		var destLatLong = {
			lat: latitude,
			lng: longitude
	};




        // Create an array of styles.
  var styles = [ 
  { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [ { "color": "#ffffff" }, { "weight": 1.2 }, { "visibility": "simplified" } ] },
  { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [ { "color": "#505050" } ] },
  { "featureType": "poi", "elementType": "geometry.fill", "stylers": [ { "color": "#505050" } ] },
  { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#505050" } ] },
  { "elementType": "labels.text", "stylers": [ { "visibility": "simplified" }, { "color": "#a9cf54" }, { "lightness": 24 } ] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#f38630" } ] },
  { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#aaaaaa" } ] },
  { "featureType": "water", "stylers": [ { "color": "#00c8f8" } ] } 
  ];

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {
        center: destLatLong,
        zoom: 12,
        disableDefaultUI: true,
        draggable: false,
        mapTypeId: [google.maps.MapTypeId.ROADMAP, 'map_style']
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

        var geocoder = new google.maps.Geocoder;
        geocoder.geocode({'placeId': placeId}, function(results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {

                    map.setZoom(13);
                    map.setCenter(results[0].geometry.location);
                    /* Customize the Map Marker */
                    var image = 'images/map-marker-icon.png';
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        icon: image,
                        map: map,
                        title: 'Click to begin navigation'
                    });
                    //infowindow.setContent(results[0].formatted_address);
                    //infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });


    ///* Customize the Map Marker */
    //var image = 'images/map-marker-icon.png';
    //var marker = new google.maps.Marker({
    //    position: destLatLong,
    //    icon: image,
    //    map: map,
    //    title: 'Click to begin navigation'
    //});



    // I don't understand what this line does but Google made it sound important
    google.maps.event.addDomListener(window, 'load', initMap);


    map.addListener('click', function() {
        window.location.href = "http://maps.google.com/maps?q=loc:" + latitude + "," + longitude + "&navigate=yes";
    });


} // End initMap

$(document).ready(function() {
    initMap();
});