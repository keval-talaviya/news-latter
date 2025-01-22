var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  cursorinner.style.left = e.clientX + 'px';
  cursorinner.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

$(document).ready(function() {
  var currentPath = window.location.pathname.split("/").pop();
  $('.menu-item').each(function() {
    var menuItemPath = $(this).data('url');
    if (menuItemPath === currentPath) {
      $(this).addClass('active');
      $(this).parents('.sub-menu').addClass('open');
      $(this).parents('.sub-menu').children('.sub-menu-list').css('display', 'block');
    }
  });
});

(function($) {

	"use strict";

	 $('.label.ui.dropdown')
  .dropdown();

		$('.no.label.ui.dropdown')
		  .dropdown({
		  useLabels: false
		});

		$('.ui.button').on('click', function () {
		  $('.ui.dropdown')
		    .dropdown('restore defaults')
		})

	 
})(jQuery);
