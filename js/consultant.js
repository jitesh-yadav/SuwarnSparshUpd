//Hide video chat div initially
$('.fluidMedia').hide();

//Calender for showing appointments
$(document).ready(function() {	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		defaultDate: '2015-07-08',
		editable: false,
		eventLimit: true, // allow "more" link when too many events
		eventColor: '#FF6347',
		events: [
			{
				title: 'Call with Neeraj',
				start: '2015-07-08'
			},
			{
				id: 999,
				title: 'Call with Shweta',
				start: '2015-07-09T16:00:00'
			},
			{
				id: 999,
				title: 'Call with Rohan',
				start: '2015-07-16T16:00:00'
			},
			{
				title: 'Call with Brijesh',
				start: '2015-07-12T10:30:00',
				end: '2015-07-12T12:30:00'
			},
			{
				title: 'Call with Ankita',
				start: '2015-07-12T12:00:00'
			},
			{
				title: 'Call with Lakshmi Narayan',
				start: '2015-07-12T14:30:00'
			}
		]
	});
	
});

$('#userName').html(localStorage.getItem('consultantname'));

$('#logout').click(function(){
	localStorage.removeItem('consultantname');
	window.location.href = "index.html";
})

$('#startVideoChat').click(function() {
	$('.fluidMedia').show();
	$('#chatIframe').attr('src','https://beta.talky.io/SuwarnSparshConsultant');
	var $anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $($anchor.attr('href')).offset().top
	}, 1500, 'easeInOutExpo');
	event.preventDefault();
});
