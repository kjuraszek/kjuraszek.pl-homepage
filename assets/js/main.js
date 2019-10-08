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
		
		var toggleLettersInterval = window.setInterval(toggleLetters,1);
		var toggleRowsInterval = window.setInterval(toggleRows,1000);
		jQuery('body').css('cursor', 'none');
		document.title = setTitle()+' !';
	});
	
	
	});

function printLetters(){
	jQuery('.under').html('');
	var docWidth = jQuery(document).width();
	var docHeight = jQuery(document).height();
	if(docWidth < 575) {
		var fontWidth = 30;
		var rowHeight = 50;
	} else if(docWidth < 768) {
		var fontWidth = 20;
		var rowHeight = 40;
	}else if(docWidth < 992) {
		var fontWidth = 15;
		var rowHeight = 30;
	}else {
		var fontWidth = 9;
		var rowHeight = 18;
	}

	var letters=Math.floor(docWidth/fontWidth) - 1;
	var rows = Math.floor(docHeight/rowHeight);
	for (var i=0;i<rows;i++){
		var rowContent='';
		if( i == Math.floor(rows/2)){
			var h = Math.floor(letters/2) - 4;
			for (var j=0;j<letters;j++){
				var x = String.fromCharCode(Math.floor((Math.random() * 100) + 600));
				if(j < h || j > h + 8){
					rowContent+='<span class="letter">'+x+'</span>';
				} else if(j == h){
					rowContent+='<a id="portfolio-link" href="https://portfolio.kjuraszek.pl"><span class="portfolio-letter">P</span><span class="portfolio-letter">O</span><span class="portfolio-letter">R</span><span class="portfolio-letter">T</span><span class="portfolio-letter">F</span><span class="portfolio-letter">O</span><span class="portfolio-letter">L</span><span class="portfolio-letter">I</span><span class="portfolio-letter">O</span></a>';
				}
				
			}
		} else{
			
			for (var j=0;j<letters;j++){
				var x = String.fromCharCode(Math.floor((Math.random() * 100) + 600));
				rowContent+='<span class="letter">'+x+'</span>';
			}
		}
		jQuery('.under').append('<div class="my-row">'+rowContent+'</div>');
	}
	refreshMouseEvents();
	
}

function refreshMouseEvents(){

	jQuery("body").on("mouseover", "span.letter", function() {
		jQuery( this ).css({"color":"red","background":"red"});
	});
	jQuery("body").on("mouseout", "span.letter", function() {
		jQuery( this ).css({"color":"","background":""});
	});
}
function toggleLetters(){
	var len = jQuery('.letter').length - 1;	
	var num = Math.floor((Math.random() * len));	
	var el = '.letter:eq('+String(num)+')';
	jQuery(el).toggleClass("green");
}
function toggleRows(){
	var len = jQuery('.my-row').length - 1;	
	var num = Math.floor((Math.random() * len));
	for(var i = 0; i < len; i++){
		if(i == num){
			jQuery('.my-row:eq('+String(i)+') .letter').css({"color":"black","background":"red"});
		} else {
			jQuery('.my-row:eq('+String(i)+') .letter').css({"color":"","background":""});
		}
	}
}
function setTitle(){
	var title='';
	for(var i=0;i<13;i++){
		title+=String.fromCharCode(Math.floor((Math.random() * 100) + 600));
	}
	return title;
}