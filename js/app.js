/** code by webdevtrick ( https://webdevtrick.com ) **/
(function($) { 
  $(function() { 
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery);

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement; 
}

function clicked(event) {
	console.log(event.target.innerHTML);
	// let container = document.createElement("DIV");
	// document.body.appendChild(container);
	let val = event.target.innerHTML;
	let content = document.getElementsByClassName('infoContent');
	console.log(content);
	if (val === "Professional Exp") {
		
		content.innerHTML = "<a href='page/prof-exp.html'></a>";
		
	} 
	else if (val === "Contact") {
		
		content.innerHTML = 'hi just created contact info';
		
	}
	
}

var ul = document.getElementsByClassName('nav-list');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    console.log('ul clicked');
};

