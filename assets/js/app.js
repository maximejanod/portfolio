import Vue from 'vue'

Vue.config.delimiters = ['${', '}'];

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
/* require('../css/app.css'); */
require('bootstrap');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/*//////////////////////////////////////////////////////////////////////////////////*/
/*//////////////////////////// FULLSCREEN SCROLL DOWN //////////////////////////////*/
/*//////////////////////////////////////////////////////////////////////////////////*/

jQuery(document).ready(function($){
    // Defining a function to fullscreen size for #header 
    function fullscreen(){
        jQuery('#Fullscreen_bloc').css({
        width: jQuery(window).width(),
        height: jQuery(window).height(),
        });
    }
    fullscreen();
    
    // Run the function in case of window resize
    jQuery(window).resize(function() {
    fullscreen(); 
    });
});

// Scroll Top

$(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        
        var target = this.hash;
        var $target = $(target);
        
        $('html, body').stop().animate({
        'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
        window.location.hash = target;
        });
		});
		
		$('#myBtn').on('click',function(){
			console.log('test');
			$('html,body').animate({scrollTop:0},600,'swing'); // For Safari
			return false;
			
		});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
/*/////////////////////////////////// PROGRESS BAR SCROLL /////////////////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////////////////////////////////*/

var h = document.documentElement,
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight',
  progress = document.querySelector('.progress'),
  scroll;

document.addEventListener('scroll', function() {
  scroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  progress.style.setProperty('--scroll', scroll + '%');
});

/*/////////////////////////////////////////////////////////////////////////////////////////////////*/
/*/////////////////////////////////////// TECHNOLOGIE /////////////////////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////////////////////////////////*/

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );