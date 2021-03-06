$(document).ready(function(){

/** For sticky navigation */
$('.js--section-features').waypoint(function(direction){
	if(direction === 'down'){
		$('nav').addClass('sticky');
	}else{
		$('nav').removeClass('sticky');
	}
},
    {
	  offset: '60px;'
	});

/** Scroll on button */ 
$('.js--scroll-to-plans').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});
$('.js--scroll-to-start').click(function(){
	$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});


/* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

/** Animation on Scroll */
$('.js--wp-1').waypoint(function(){
	$('.js--wp-1').addClass('animated bounceInDown');
}, {
	offset: '50%'
});

$('.js--wp-2').waypoint(function(){
	$('.js--wp-2').addClass('animated fadeInUp');
}, {
	offset: '50%'
});

$('.js--wp-3').waypoint(function(){
	$('.js--wp-3').addClass('animated fadeIn');
}, {
	offset: '50%'
});

$('.js--wp-4').waypoint(function(){
	$('.js--wp-4').addClass('animated pulse');
}, {
	offset: '50%'
});


/* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('menu')) {
            icon.addClass('close');
            icon.removeClass('menu');
        } else {
            icon.addClass('menu');
            icon.removeClass('close');
        }        
    });

/** Map */    
var map = new GMaps({
  div: '.map',
  lat: 6.5480357,
  lng: 3.1438709,
  zoom: 12
});

map.addMarker({
  lat: 6.5480357,
  lng: 3.1438709,
  title: 'Lagos',
  infoWindow: {
	  content: '<p>Our Lagos HQ</p>'
	}
});

});

