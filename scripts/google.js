// JavaScript Document


/*-------------Keep Track of Cities Added (Send to user.js)-------------*/
/*-------------Pull Location Information by Category-------------*/
/*-------------Login with Google-------------*/
/*-------------Individual Location - Google Map-------------*/

	function initMap() {

        var windowLocation = window.location;

        var myValue = windowLocation["search"];

        var ID = myValue.split("=");

        var placeId = ID[1];

        var latitude;
        var longitude;





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
        //center: destLatLong,
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

                    latitude = marker.getPosition().lat();
                    longitude = marker.getPosition().lng();
                    console.log(latitude + ' : ' + longitude);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });



    // I don't understand what this line does but Google made it sound important
        // This is for the click on map to load navigation service I think it adds a listener to the map for when the user clicks on it
    google.maps.event.addDomListener(window, 'load', initMap);


    map.addListener('click', function() {
        window.location.href = "http://maps.google.com/maps?q=loc:" + latitude + "," + longitude + "&navigate=yes";
    });


} // End initMap

$(document).ready(function() {
    initMap();
});