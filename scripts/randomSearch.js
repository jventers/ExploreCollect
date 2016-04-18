// JavaScript Document
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var searchResults;
var flag = true;

function initMap(coords, searchParam) {

    flag = true;
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


        // searchResults.forEach(function(item) {
        //     console.log(item.name);
        // });

        document.createElement('div');

        var placesList = document.getElementById('bars');

        //for (var i = 0, place; place = results[i]; i++) {
        //
        //    console.log(place);
        //    var node = document.createElement("h4");
        //    node.className = "location";
        //    var myLink = "location-detail.html?User_Id=" + place.place_id;
        //    node.innerHTML = '\<a href=' + myLink + '\>' + place.name + '\</a>';
        //    placesList.appendChild(node); // += '<li>' + place.name + '</li>';
        //
        //}
        //        console.log(searchResults);

           if (pagination.hasNextPage) {
               var moreButton = document.getElementById('more');

               moreButton.disabled = false;

               moreButton.addEventListener('click', function() {
                   moreButton.disabled = true;
                   pagination.nextPage();
               });
           }
        var resultList = document.getElementById('resultsList');

        for (var j = 0, result; result = results[j]; j++) {

            console.log(result);
            var node = document.createElement("h4");
            node.className = "location";
            var myLink = "location-detail.html?User_Id=" + result.place_id;
            node.innerHTML = '\<a href=' + myLink + '\>' + result.name + '\</a>';
            resultList.appendChild(node); // += '<li>' + place.name + '</li>';

        }
               //var placesList = document.getElementById('places');
               //
               //for (var i = 0, place; place = results[i]; i++) {
               //
               //    placesList.innerHTML += '<li>' + place.name + '</li>';
               //
               //}
      //     var test = document.getElementById('demo').innerHTML='testing: ' + searchResults[0].name;

flag = false;
    }
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
