// JavaScript Document
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var searchResults;
var flag = true;
var stops = [];
var num_stops = 0;
var searchQuery = "";



function initMap(coords, searchParam,numDest) {
    num_stops = numDest;
    searchQuery = searchParam;
    flag = true;
    var myLocation = coords;

    map = new google.maps.Map(document.createElement('div'));


console.log('searching');
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: myLocation,
        radius: 5000,
        type: [searchParam]
    }, processResults);
}

function processResults(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {

        searchResults = results;

        localStorage.setItem(searchQuery, results);

        var resultList = document.getElementById('resultsList');
//        var usedIndexes = [];

        //for (i = 0; i < num_stops; i++) {
        //
        //    var index = Math.floor((Math.random() * searchResults.length) + 1);
        //
        //    if(searchResults[index] && !index in usedIndexes) {
        //        stops.push(searchResults[index]);
        //
        //    }
        //}


        for (var j = 0, stop; stop = results[j]; j++) {

            //console.log(stop);

            var node = document.createElement("h4");
            node.className = "location";
            var myLink = "location-detail.html?User_Id=" + stop.place_id;
            node.innerHTML = '\<a href=' + myLink + '\>' + stop.name + '\</a>';
            resultList.appendChild(node);

        }


flag = false;
    }
}

function getStops(){
    return stops;
}

function getFlag(){
    return flag;
}
function getResults() {
    return searchResults;
}
/**
 * Created by Alex on 4/17/2016.
 */
