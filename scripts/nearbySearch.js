// JavaScript Document
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var searchResults;


function initMap(coords,searchParam) {

    var myLocation = coords;

     map = new google.maps.Map(document.createElement('div'));

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: myLocation,
        radius: 5000,
        type: [searchParam]
    }, processResults);
}

function processResults(results, status, pagination) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {

        searchResults = results;

        searchResults.forEach(function(item) {
            console.log(item.name);
        });

        document.createElement('div')

        var placesList = document.getElementById('bars');

        for (var i = 0, place; place = results[i]; i++) {

            var node = document.createElement("h4");
            node.className = "location";
            node.innerHTML = '\<a href="location-detail.html">' + place.name + '\</a>';
            placesList.appendChild(node); // += '<li>' + place.name + '</li>';

        }

    //All TEST CODE FOR FUTURE REFERENCE
        //        console.log(searchResults);

        //   if (pagination.hasNextPage) {
        //       var moreButton = document.getElementById('more');
        //
        //       moreButton.disabled = false;
        //
        //       moreButton.addEventListener('click', function() {
        //           moreButton.disabled = true;
        //           pagination.nextPage();
        //       });
        //   }
        //       var placesList = document.getElementById('places');
        //
        //       for (var i = 0, place; place = results[i]; i++) {
        //
        //           placesList.innerHTML += '<li>' + place.name + '</li>';
        //
        //       }
        //   var test = document.getElementById('demo').innerHTML='testing: ' + searchResults[0].name;

        searchResults.forEach(function(item){ console.log(item.name);});

        document.createElement('div')

       var placesList = document.getElementById('bars');

       for (var i = 0, place; place = results[i]; i++) {

           var node = document.createElement("h4");
           node.innerHTML = '\<a href="location-detail.html">' + place.name + '\</a>';
           placesList.appendChild(node);// += '<li>' + place.name + '</li>';

       }
//        console.log(searchResults);

     //   if (pagination.hasNextPage) {
     //       var moreButton = document.getElementById('more');
     //
     //       moreButton.disabled = false;
     //
     //       moreButton.addEventListener('click', function() {
     //           moreButton.disabled = true;
     //           pagination.nextPage();
     //       });
     //   }
     //       var placesList = document.getElementById('places');
     //
     //       for (var i = 0, place; place = results[i]; i++) {
     //
     //           placesList.innerHTML += '<li>' + place.name + '</li>';
     //
     //       }
     //   var test = document.getElementById('demo').innerHTML='testing: ' + searchResults[0].name;

    }
}

function getResults() {
    return searchResults;
}