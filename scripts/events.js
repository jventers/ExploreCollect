// JavaScript Document

/*-------------Initialize DatePicker-------------*/

	  
/*	  $('.firstDate, .secondDate').datepicker({
		maxDate: '+12m',
		beforeShow: function(input) {
	    $(input).css('background-color','#ff0');
	  },
	  onSelect: function(dateText, obj) {
	    $(this).css('background-color','');
	    alert('Selected: ' + dateText +
	      "\n\nid: " + obj.id +
	      "\nselectedDay: " + obj.selectedDay +
	      "\nselectedMonth: " + obj.selectedMonth +
	      "\nselectedYear: " + obj.selectedYear);
	  },
	  onClose: function(dateText, obj) {
	    $(this).css('background-color','');
	  }
	  });
*/

//var firstDate = $('.firstDate').datepick('getDate');
//var secondDate = $('.secondDate').datepick('getDate');

var firstDate = $(function() {
	$( "#start_date" ).datepicker();
});


var secondDate = $(function() {
	$( "#end_date" ).datepicker();
});


/*-------------Events-------------*/ 
function addEvents() {
    var eventBox = document.getElementById('eventBox');
    
    // Create div
    var newElement = document.createElement('div');//to hold events/locations info box
    newElement.setAttribute('id', "new-info-box");
    
    newElement.innerHTML = 'New event has been added!'; 
    
    eventBox.appendChild(newElement);
}

 $(document).ready(function() {
	 $('.firstDate, .secondDate').datepicker();
 });

/*------------CreateEvent------------------*/
$(document).on('click', '.toggle-btn', function() {
    $(this).toggleClass('toggle-btn-selected'); 
});

var myEventList = [];


function createEvent() {
	var eventName = document.getElementById('eventname').value;
	var start = document.getElementById('starttime').value;
	var location = document.getElementById('locationTextField').value;
	var date = document.getElementById('start_date').value;
	var image = document.getElementById('imageupload').value;

	var eventblock = document.createElement('li');
	myEventList.appendChild('\<img src=\"'+image+'\"\>\<div class=\"event-details\"\>\<h3\>'+eventName+'\</h3\>\<p\>'+start+' at '+location+'\</p\>\<p class=\"event-distance\">3 mi\</p\>\</div\>');
	alert("event created!")
}
function getMyEvents() {
	var i = 0;
	for(i=0;i<myEventList.length;i++){
		document.getElementById('event-list').appendChild(myEventList[i]);
	}
}