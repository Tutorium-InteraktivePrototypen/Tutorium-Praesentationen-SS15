$(document).ready(function(){
	
	var slides = 0;
	var currentSlide = 0;
		
	$("article").each(function(){
		slides++;
	});
	
	currentSlide = slides - 2;
	changeSlide();
	
	function changeSlide()	{
		$("article").css("transform", "translateY(" + -currentSlide * 1080 + "px)");	
		$(".bar").css("width", ((currentSlide + 1) / slides) * 100 + "%");	
	}
	
  	//! Key  Input
	document.addEventListener("keydown", function(e) {
		if (e.keyCode == 13) {
			 toggleFullScreen();
		} else if (e.keyCode == 37 || e.keyCode == 38)	{
			if (currentSlide != 0)	{
				currentSlide--;
			}		 
			changeSlide();
		} else if (e.keyCode == 39 || e.keyCode == 40)	{
			if(currentSlide < slides -1)	{
				currentSlide++;
			}
			changeSlide();
		}
	}, false);
	
	function toggleFullScreen() {
	  if (!document.fullscreenElement &&	 // alternative standard method
		   !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {	 // current working methods
		 if (document.documentElement.requestFullscreen) {
		   document.documentElement.requestFullscreen();
		 } else if (document.documentElement.msRequestFullscreen) {
		   document.documentElement.msRequestFullscreen();
		 } else if (document.documentElement.mozRequestFullScreen) {
		   document.documentElement.mozRequestFullScreen();
		 } else if (document.documentElement.webkitRequestFullscreen) {
		   document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		 }
	  } else {
		 if (document.exitFullscreen) {
		   document.exitFullscreen();
		 } else if (document.msExitFullscreen) {
		   document.msExitFullscreen();
		 } else if (document.mozCancelFullScreen) {
		   document.mozCancelFullScreen();
		 } else if (document.webkitExitFullscreen) {
		   document.webkitExitFullscreen();
		 }
	  }
	}


});