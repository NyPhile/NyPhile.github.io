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
		}else if(mySwiper.activeIndex == 4){
			//run4('#s5',['我','们','一','起','努','力','<br>','一','起','成','长'],400);
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
	function aniNumber(el, start, end, time){
		$(el).html(start);
		var timer = setInterval(function(){
			if(parseInt($(el).html(),10)>=end){
				clearInterval(timer);
				return;
			}
			$(el).html(parseInt($(el).html(),10)+1);
		},time)
	}
	function aniNumber2(el, start, time, n){
		var flag = 0;
		$(el).html(start);
		var timer = setInterval(function(){
			if(flag==n){
				clearInterval(timer);
				return;
			}
			var result = parseInt($(el).html(),10)+1 == 10?0:parseInt($(el).html(),10)+1
			$(el).html(result);
			flag += 1;
		},time)
	}
	aniNumber('#s31',0,8,130);
	aniNumber2('#s32',0,40,21);
	aniNumber2('#s33',1,45,21);
	aniNumber('#s34',0,4,100);
	aniNumber('#s35',1,7,85);
	aniNumber('#s36',0,7,80);
}
function runtext(el,arr,time){
	$(el).html('');
	var flag = 0;
	var timer = setInterval(function(){
		$(el).html($(el).html()+arr[flag]);
		flag += 1;
		if(flag == arr.length){
			clearInterval(timer);
		}
	},time)
}
function choose(el){
	var aaa = el.options[el.options.selectedIndex].innerHTML
	$('#select').addClass('active').html(aaa)
}


