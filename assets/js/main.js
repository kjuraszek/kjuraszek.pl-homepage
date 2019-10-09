jQuery( document ).ready(function() {
	document.oncontextmenu = function() {return false;};
	document.title = setTitle()+' ?';

	jQuery(document).mousedown(function(e){ 
		if( e.button == 2 ) { 
			alert("Please, don't use right mouse button!"); 
			return false; 
		} 
		return true;
	});
	
	printLetters();

	jQuery(".x-img").click(function() {
		jQuery(".banner").fadeOut(1200);
		jQuery(".under").fadeIn(1200).css({"z-index":"1"});
		jQuery(".banner").delay(1200).queue(function(){jQuery(this).detach()});
		jQuery(window).resize(printLetters);
		
		window.setInterval(toggleLetters,1);
		window.setInterval(toggleRows,1000);
		jQuery('body').css('cursor', 'none');
		document.title = setTitle()+' !';
	});

	
});

function printLetters(){
	// prints rows with  random characters
	jQuery('.under').html('');
	var docWidth, docHeight, fontWidth, rowHeight, letters, rows, rowContent, indexOfPortfolio, randomChar;
	docWidth = jQuery(document).width();
	docHeight = jQuery(document).height();
	if(docWidth < 575) {
		fontWidth = 30;
		rowHeight = 50;
	} else if(docWidth < 768) {
		fontWidth = 20;
		rowHeight = 40;
	} else if(docWidth < 992) {
		fontWidth = 15;
		rowHeight = 30;
	} else {
		fontWidth = 9;
		rowHeight = 18;
	}

	letters = Math.floor(docWidth/fontWidth) - 1;
	rows = Math.floor(docHeight/rowHeight);
	for (var i = 0; i < rows; i++){
		rowContent = '';
		if(i == Math.floor(rows/2)){
			indexOfPortfolio = Math.floor(letters/2) - 4;
			for (var j = 0; j < letters; j++){
				randomChar = String.fromCharCode(Math.floor((Math.random() * 100) + 600));
				if(j < indexOfPortfolio || j > indexOfPortfolio + 8){
					rowContent += '<span class="letter">' + randomChar + '</span>';
				} else if(j == indexOfPortfolio){
					rowContent += '<a id="portfolio-link" href="https://portfolio.kjuraszek.pl"><span class="portfolio-letter">P</span><span class="portfolio-letter">O</span><span class="portfolio-letter">R</span><span class="portfolio-letter">T</span><span class="portfolio-letter">F</span><span class="portfolio-letter">O</span><span class="portfolio-letter">L</span><span class="portfolio-letter">I</span><span class="portfolio-letter">O</span></a>';
				}
				
			}
		} else {
			for (var j = 0; j < letters; j++){
				randomChar = String.fromCharCode(Math.floor((Math.random() * 100) + 600));
				rowContent += '<span class="letter">' + randomChar + '</span>';
			}
		}
		jQuery('.under').append('<div class="my-row">'+rowContent+'</div>');
	}
	refreshMouseEvents();
	
}

function refreshMouseEvents(){
	// attaches mouseover and mouseout event handlers to .letter
	jQuery("body").on("mouseover", "span.letter", function() {
		jQuery( this ).css({"color":"red","background":"red"});
	});
	jQuery("body").on("mouseout", "span.letter", function() {
		jQuery( this ).css({"color":"","background":""});
	});
	// attaches mousewheel event handler
	jQuery('body').bind('mousewheel DOMMouseScroll', function(e){
		// changes span.letter color depending on mousewheel
		var currentColor, newColor, step;
		currentColor = parseInt(jQuery('.green').css('color').replace(/\s|rgb|\(|\)/g,'').split(',')[1]);
		step = 20;
		if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ){
			if(currentColor > step){
				newColor = currentColor - step;
			} else {
				newColor = 0;
			}
		} else {
			if(currentColor < 255 - step){
				newColor = currentColor + step;
			} else {
				newColor = 255;
			}
		}
		jQuery('head style').html('.letter.green{color:rgb(0,' + newColor + ',0);}');
	});
}

function toggleLetters(){
	// toggles color of random .letter
	var len, num, el;
	len = jQuery('.letter').length - 1;	
	num = Math.floor((Math.random() * len));	
	el = '.letter:eq('+String(num)+')';
	jQuery(el).toggleClass("green");
}

function toggleRows(){
	// toggles background color of random .my-row
	var len, num;
	len = jQuery('.my-row').length - 1;	
	num = Math.floor((Math.random() * len));
	for(var i = 0; i < len; i++){
		if(i == num){
			jQuery('.my-row:eq('+String(i)+') .letter').css({"color":"black","background":"red"});
		} else {
			jQuery('.my-row:eq('+String(i)+') .letter').css({"color":"","background":""});
		}
	}
}

function setTitle(){
	// sets random title tag
	var title='';
	for(var i=0;i<13;i++){
		title+=String.fromCharCode(Math.floor((Math.random() * 100) + 600));
	}
	return title;
}
