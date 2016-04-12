// JavaScript Document

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var searchResults;

function initMap(lat,lng,searchParam) {
    console.log(lat,lng);
    var myLocation = {lat: -33.866, lng: 151.196};

     map = new google.maps.Map(document.createElement('div'))

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: myLocation,
        radius: 500,
        type: [searchParam]
    }, processResults);
    //var places = new google.maps.places.PlacesService(document.getElementById('map'));
    //var destinations = new google.maps.places.PlacesService(map);
    //console.log(places);
   // return 'testing: ' + searchResults[0].name;
}

function processResults(results, status, pagination) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {

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
            var placesList = document.getElementById('places');

            for (var i = 0, place; place = results[i]; i++) {

                placesList.innerHTML += '<li>' + place.name + '</li>';

            }
        var test = document.getElementById('demo').innerHTML='testing: ' + searchResults[0].name;
    }
}

function getResults(){
    return searchResults;
}