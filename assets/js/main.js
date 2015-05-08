$(document).ready(function() {

	$('#fullpage').fullpage( {	
	
	sectionsColor: ['#17baef', '#f5f5f5', '#f5f5f5', '#17baef', '#f5f5f5', '#17baef'],
				responsive: 900,
				anchors: ['stronaGlowna', 'oNas', 'zespol', 'coRobimy', 'wydarzenia', 'kontakt'],
				menu: '#menu',
				scrollOverflow: true

	});

    /* ======= Fixed header when scrolled ======= */
    $('#header').addClass('navbar-fixed-top');

});