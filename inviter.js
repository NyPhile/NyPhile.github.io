"use strict";      
var mySwiper = new Swiper ('.swiper-container', {
	direction: 'vertical',
	loop: false,
	onTransitionEnd: function(swiper){
		//alert(mySwiper.activeIndex)
		if(mySwiper.activeIndex == 2){
			run();
		}else if(mySwiper.activeIndex == 3){
			run3();
		}
    }
})
function run(){
	$('#run').html('0');
	var time = 50;
	function runadd(){
		setTimeout(function(){
			var year = $('#run').html();
			$('#run').html(parseInt(year, 10) + 1);
			if(year < 6){
				runadd();
			}
		}, time)
	}
	runadd()
}
function run3(){

}  