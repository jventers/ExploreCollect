// JavaScript Document
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
var map;
var searchResults;
var searchTerm;

function initMap(coords, searchParam) {

    var myLocation = coords;
    searchTerm = searchParam;

    map = new google.maps.Map(document.createElement('div'));



    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: myLocation,
        radius: 5000,
        type: [searchParam]
    }, processResults);
}

function processResults(results, status, pagination) {

    //var currentTerm = searchTerm;
    var currentTerm = document.getElementById(searchTerm);
    console.log(searchTerm);
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
    } else {

        searchResults = results;



       // searchResults.forEach(function(item) {
       //     console.log(item.name);
       // });

    //<i class="fa fa-caret-right fa-lg"></i><div data-clicked="true" class="expandCollapse">
    //        <div class="myProgress">
    //        <div class="myBar">
    //        <h3 class="category">Bars</h3>
    //        <p class="percentage">0%</p>
    //        </div> <!-- End myBar -->
    //    </div> <!-- End myProgress -->
    //    </div> <!-- End expandCollapse -->
    //    <div id="bars" class="showHide">
    //
    //
    //
    //
    //        <!-- THIS IS AN EXAMPLE OF WHAT GETS LOADED HERE
    //    <h4 class="location"><a href="location-detail.html">The Rhino</a></h4> -->
    //
    //    </div> <!-- End expandCollapse -->
    //


        //var currentCity = document.getElementById('current-city');
        //
        //
        //var arrow = document.createElement('i');
        //arrow.className='fa fa-caret-right fa-lg';
        //
        //currentCity.appendChild(arrow);
        //
        //var expCollapse = document.createElement('div');
        //expCollapse.className='expandCollapse';
        //expCollapse.setAttribute("data-clicked","true");
        ////expCollapse.style = 'padding-left: 20px; position: relative; margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; padding: 2px; font-weight: bold; width: 100%; cursor: pointer; border: 2px solid #aaa; border-radius: 30px;';
        //
        //
        //var myProgress = document.createElement('div');
        //myProgress.className='myProgress';
        ////myProgress.style = 'position: relative; width: 100%; height: 1.5rem; border-radius: 36px';
        //
        //var myBar = document.createElement('div');
        //myBar.className='myBar';
        ////myBar.style = 'width: 0px; height: 100%; background-color: #f38630; border-radius: 36px; display: inline-block';
        //
        //var heading = document.createElement('h3');
        //heading.className='category';
        //heading.innerHTML = searchTerm;
        ////heading.style = 'margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; padding-left: 20px; position: relative';
        //
        //var p = document.createElement('p');
        //p.className='percentage';
        //p.innerHTML = '0%';
        ////p.style = 'margin-top: auto; margin-bottom: auto; float: left; line-height: 1.5rem; position: absolute; line-height: 1.5rem; color: white; padding-left: 88%; text-align: right;width: 50px';
        //
        //var items = document.createElement('div');
        //items.className='showHide';
        //items.id=searchTerm;
        //items.style='display: block';
        //
        //
        ////var elements = document.createElement('div');
        //
        ////var placesList = document.getElementById('bars');
        //

        //var currentTerm = document.getElementById(searchTerm);

        for (var i = 0, place; place = results[i]; i++) {

            //console.log(place);
            var node = document.createElement("h4");
            node.className = "location";
            var myLink = "location-detail.html?User_Id=" + place.place_id;
            node.innerHTML = '\<a href=' + myLink + '\>' + place.name + '\</a>';
        //    items.appendChild(node); // += '<li>' + place.name + '</li>';
            currentTerm.appendChild(node); // += '<li>' + place.name + '</li>';



        }
        //currentCity.appendChild(expCollapse);
        //expCollapse.appendChild(myProgress);
        //myProgress.appendChild(myBar);
        //myBar.appendChild(heading);
        //myBar.appendChild(p);
        //currentCity.appendChild(items);



    }
}

function getResults() {
    return searchResults;
}
