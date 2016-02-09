"use strict";      
var mySwiper = new Swiper ('.swiper-container', {
	direction: 'vertical',
	loop: false,
	onTransitionEnd: function(swiper){
		//alert(mySwiper.activeIndex)
		if(mySwiper.activeIndex == 2){
			run();
		}
    }
})
function run(){
	$('#run').html('0')
	function runadd(){
		setTimeout(function(){
			var year = $('#run').html();
			$('#run').html(parseInt(year, 10) + 1)
			if(year < 6){
				runadd();
			}
		}, 50)
	}
	runadd()
}     