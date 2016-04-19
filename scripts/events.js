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