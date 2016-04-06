
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var searchResults;

function initMap() {
    var pyrmont = {lat: -33.866, lng: 151.196};

//            map = new google.maps.Map(document.getElementById('map'), {
//                center: pyrmont,
//                zoom: 17
//            });
    var map = new google.maps.Map(document.createElement('div'))

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        type: ['store']
    }, processResults);
    //var places = new google.maps.places.PlacesService(document.getElementById('map'));
    //var destinations = new google.maps.places.PlacesService(map);
    //console.log(places);
}

function processResults(results, status, pagination) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {
        createMarkers(results);
        searchResults = results;
        console.log(searchResults);

        if (pagination.hasNextPage) {
            var moreButton = document.getElementById('more');

            moreButton.disabled = false;

            moreButton.addEventListener('click', function() {
                moreButton.disabled = true;
                pagination.nextPage();
            });
        }
    }
}

function createMarkers(places) {
    var bounds = new google.maps.LatLngBounds();

    var placesList = document.getElementById('places');

    for (var i = 0, place; place = places[i]; i++) {
        var image = {
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        var marker = new google.maps.Marker({
            map: map,
            icon: image,
            title: place.name,
            position: place.geometry.location
        });

        placesList.innerHTML += '<li>' + place.name + '</li>';

        //              bounds.extend(place.geometry.location);
    }
//            map.fitBounds(bounds);
}

//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaWY5QH4ObetGu6TxKARoUpxWggHtJoiE&libraries=places&callback=initMap" async
/**
 * Created by Alex on 4/6/2016.
 */
