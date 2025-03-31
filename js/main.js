(function($){"use strict";$(window).stellar({responsive:!0,parallaxBackgrounds:!0,parallaxElements:!0,horizontalScrolling:!1,hideDistantElements:!1,scrollProperty:'scroll'});var fullHeight=function(){$('.js-fullheight').css('height',$(window).height());$(window).resize(function(){$('.js-fullheight').css('height',$(window).height())})};fullHeight();var loader=function(){setTimeout(function(){if($('#ftco-loader').length>0){$('#ftco-loader').removeClass('show')}},1)};loader();$.Scrollax();var burgerMenu=function(){$('body').on('click','.js-fh5co-nav-toggle',function(event){event.preventDefault();if($('#ftco-nav').is(':visible')){$(this).removeClass('active')}else{$(this).addClass('active')}})};burgerMenu();var onePageClick=function(){$(document).on('click','#ftco-nav a[href^="#"]',function(event){event.preventDefault();var href=$.attr(this,'href');$('html, body').animate({scrollTop:$($.attr(this,'href')).offset().top-70},500,function(){})})};onePageClick();var carousel=function(){$('.home-slider').owlCarousel({loop:!0,autoplay:!0,margin:0,animateOut:'fadeOut',animateIn:'fadeIn',nav:!1,autoplayHoverPause:!1,items:1,navText:["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.carousel-testimony').owlCarousel({center:!0,loop:!0,autoplay:!0,autoplaySpeed:2000,items:1,margin:30,stagePadding:0,nav:!1,navText:['<span class="ion-ios-arrow-back">','<span class="ion-ios-arrow-forward">'],responsive:{0:{items:1},600:{items:2},1000:{items:3}}})};carousel();$('nav .dropdown').hover(function(){var $this=$(this);$this.addClass('show');$this.find('> a').attr('aria-expanded',!0);$this.find('.dropdown-menu').addClass('show')},function(){var $this=$(this);$this.removeClass('show');$this.find('> a').attr('aria-expanded',!1);$this.find('.dropdown-menu').removeClass('show')});$('#dropdown04').on('show.bs.dropdown',function(){console.log('show')});var scrollWindow=function(){$(window).scroll(function(){var $w=$(this),st=$w.scrollTop(),navbar=$('.ftco_navbar'),sd=$('.js-scroll-wrap');if(st>150){if(!navbar.hasClass('scrolled')){navbar.addClass('scrolled')}}
if(st<150){if(navbar.hasClass('scrolled')){navbar.removeClass('scrolled sleep')}}
if(st>350){if(!navbar.hasClass('awake')){navbar.addClass('awake')}
if(sd.length>0){sd.addClass('sleep')}}
if(st<350){if(navbar.hasClass('awake')){navbar.removeClass('awake');navbar.addClass('sleep')}
if(sd.length>0){sd.removeClass('sleep')}}})};scrollWindow();var counter=function(){$('#section-counter, .hero-wrap, .ftco-counter').waypoint(function(direction){if(direction==='down'&&!$(this.element).hasClass('ftco-animated')){var comma_separator_number_step=$.animateNumber.numberStepFactories.separator(',')
$('.number').each(function(){var $this=$(this),num=$this.data('number');console.log(num);$this.animateNumber({number:num,numberStep:comma_separator_number_step},7000)})}},{offset:'95%'})}
counter();var contentWayPoint=function(){var i=0;$('.ftco-animate').waypoint(function(direction){if(direction==='down'&&!$(this.element).hasClass('ftco-animated')){i++;$(this.element).addClass('item-animate');setTimeout(function(){$('body .ftco-animate.item-animate').each(function(k){var el=$(this);setTimeout(function(){var effect=el.data('animate-effect');if(effect==='fadeIn'){el.addClass('fadeIn ftco-animated')}else if(effect==='fadeInLeft'){el.addClass('fadeInLeft ftco-animated')}else if(effect==='fadeInRight'){el.addClass('fadeInRight ftco-animated')}else{el.addClass('fadeInUp ftco-animated')}
el.removeClass('item-animate')},k*50,'easeInOutExpo')})},100)}},{offset:'95%'})};contentWayPoint();$('.image-popup').magnificPopup({type:'image',closeOnContentClick:!0,closeBtnInside:!1,fixedContentPos:!0,mainClass:'mfp-no-margins mfp-with-zoom',gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{verticalFit:!0},zoom:{enabled:!0,duration:300}});$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({disableOn:700,type:'iframe',mainClass:'mfp-fade',removalDelay:160,preloader:!1,fixedContentPos:!1})})(jQuery);$(function(){$(".progress").each(function(){var value=$(this).attr('data-value');var left=$(this).find('.progress-left .progress-bar');var right=$(this).find('.progress-right .progress-bar');if(value>0){if(value<=50){right.css('transform','rotate('+percentageToDegrees(value)+'deg)')}else{right.css('transform','rotate(180deg)')
left.css('transform','rotate('+percentageToDegrees(value-50)+'deg)')}}})
function percentageToDegrees(percentage){return percentage/100*360}
});

let socket;

function connectWebSocket() {
    socket = new WebSocket("wss://yourserver.com"); // Replace with your actual WebSocket server URL
    socket.onopen = () => console.log("WebSocket Connected");
    socket.onclose = () => console.log("WebSocket Closed");
    socket.onerror = (error) => console.log("WebSocket Error:", error);
}

connectWebSocket(); // Establish WebSocket when the page loads

// Close WebSocket when page is hidden (allowing bfcache)
window.addEventListener("pagehide", () => {
    if (socket) {
        socket.close();
    }
});

// Reconnect WebSocket when the page is shown again
window.addEventListener("pageshow", () => {
    if (!socket || socket.readyState === WebSocket.CLOSED) {
        connectWebSocket();
    }
});