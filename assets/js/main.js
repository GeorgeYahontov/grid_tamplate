
$(document).ready(function(){
	$('.menu-navbar__btn').on('click', function(){
		$(this).toggleClass('open');
	   $('.menu-navbar__list').stop(true, true).slideToggle(500);	
	});
});