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
$('.arr').click(function(){
	mySwiper.slideNext();
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
	aniNumber2('#s33',0,245,2);
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

var imgUrl = 'http://nyphile.github.io/images/share.png';
var lineLink = 'http://nyphile.github.io/';
var descContent = "王震&张宁毓 婚礼请柬";
var shareTitle = '我们结婚啦！';
var appid = '';
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
                            "appid": appid,
                            "img_url": imgUrl,
                            "img_width": "300",
                            "img_height": "300",
                            "link": lineLink,
                            "desc": descContent,
                            "title": shareTitle
                            }, function(res) {
                            _report('send_msg', res.err_msg);
                            })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
                            "img_url": imgUrl,
                            "img_width": "300",
                            "img_height": "300",
                            "link": lineLink,
                            "desc": descContent,
                            "title": shareTitle
                            }, function(res) {
                            _report('timeline', res.err_msg);
                            });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
                            "content": descContent,
                            "url": lineLink,
                            }, function(res) {
                            _report('weibo', res.err_msg);
                            });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        // 发送给好友
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            shareFriend();
            });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv){
            shareTimeline();
            });
        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv){
            shareWeibo();
            });
        }, false);

if(typeof navigator != "undefined"){
	$('#ua')[0].value=navigator.userAgent
};
(function(){
	var form = document.getElementById('form_5379');
	form.onsubmit = function(){
			if(form.elements['name'].value == ''){
				alert('"姓名" 为必填项，请填写完整。');
				form.elements['name'].focus();
				return false;
			}
			if(form.elements['people'].value == ''){
				alert('"人数" 为必填项，请填写完整。');
				form.elements['people'].focus();
				return false;
			}
	};
})();

function sunmitForm(){
	document.form_5379.submit();
}

window.showSuc = function(){
	alert('提交成功！')
	$('#submit').css({"background":"#999"}).attr("onclick","");
}