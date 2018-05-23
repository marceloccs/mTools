$(document).ready(function() {
	$('.slider').bxSlider();
    $(document).scroll(function () {
    	verifyScroll ();
    });
    verifyScroll ();
});

function verifyScroll (){
	var scroll = $(this).scrollTop();
    var topDist = $("nav").position();
    if (scroll > topDist.top) {
        $('nav').addClass("navbar-custom-bg");
        $('nav').removeClass("navbar-custom-transition-bg");
    } else {
    	$('nav').addClass("navbar-custom-transition-bg");
        $('nav').removeClass("navbar-custom-bg");
    }
} 