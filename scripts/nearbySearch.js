// JavaScript Document
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var searchResults;
var currentParameter;
var service;
var flag = true;

function initMap(coords,searchParam) {
    flag = false;
    currentParameter = searchParam;

    var myLocation = coords;

     map = new google.maps.Map(document.createElement('div'));


        service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
            location: myLocation,
            radius: 1000,
            type: [searchParam]
        }, processResults);


}



function processResults(results, status) {
    var p = currentParameter;
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {

        searchResults = results;
        buildList(p);

    }
}

function getResults() {
    return searchResults;
}

function getFlag(){return flag}

function buildList(p){


    searchResults.forEach(function(item) {
        console.log(item.name);
    });


    var placesList = document.getElementById('main');


    var showHide = document.createElement('div');
        showHide.className= 'showHide';
        showHide.style='display: block; padding: 2px';


    var expCollapse = document.createElement('div');
        expCollapse.className='expandCollapse';
        expCollapse.style = 'padding-left: 20px; position: relative; margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; padding: 2px; font-weight: bold; width: 100%; cursor: pointer; border: 2px solid #aaa; border-radius: 30px;';


    var myProgress = document.createElement('div');
        myProgress.id='myProgress';
        myProgress.style = 'position: relative; width: 100%; height: 1.5rem; border-radius: 36px';

    var myBar = document.createElement('div');
        myBar.className='myBar';
        myBar.style = 'width: 0px; height: 100%; background-color: #f38630; border-radius: 36px; display: inline-block';

    var heading = document.createElement('h3');
        heading.className='category';
        heading.innerHTML = p;
        heading.style = 'margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; padding-left: 20px; position: relative';

    var p = document.createElement('p');
        p.className='label';
        p.innerHTML = '0%';
        p.style = 'margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; position: absolute; line-height: 1.5rem; color: white; padding-left: 88%; text-align: right;width: 50px';

    var items = document.createElement('div');
        items.className='showHide';
        items.style='display: block';

    showHide.appendChild(expCollapse);
    showHide.appendChild(items);
    expCollapse.appendChild(myProgress);
    myProgress.appendChild(myBar);

    myBar.appendChild(heading);
    myBar.appendChild(p);




    //var placesList = document.getElementById('main');

    for (var i = 0, place; place = searchResults[i]; i++) {
        //var temp = document.createElement('div');
        //temp.class='showHide';
        var node = document.createElement("h4");
        node.className = "location";
        node.innerHTML = '\<a href="location-detail.html">' + place.name + '\</a>';
        items.appendChild(node); // += '<li>' + place.name + '</li>';
        //items.appendChild(temp);
    }
    placesList.appendChild(showHide);
    flag = true;
}