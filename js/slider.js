sliderint = 1;
slideNext = 2;
$(document).ready(function(){
	$('#slider > img#1').fadeIn(300);
	startSlider();
});

function startSlider() {
	count = $('#slider>img').length;
	loop = setInterval(function(){
		if(slideNext > count){
			slideNext = 1;
		}
		
		$('#slider > img').fadeOut(300);
		$('#slider > img#'+slideNext).fadeIn(300);
		
		sliderint = slideNext;
		slideNext++;
		
	}, 2000);
}

function prev() {
	newSlide = sliderint-1;
	showSlide(newSlide);
}
function next() {
	newSlide = sliderint+1;
	showSlide(newSlide);
}

function showSlide(id) {
	stopSlider();
	if(id > count){
			id = 1;
		}else if(id < 1) {
			id=4;	
		}
	
	
	$('#slider > img').fadeOut(300);
		$('#slider > img#'+id).fadeIn(300);
		
		sliderint = id;
		slideNext = id+1;
}
function stopSlider() {
	window.clearInterval(loop);
}
$('#slider > img').hover(
function(){
	stopSlider();	
},function(){
	startSlider();
}
);