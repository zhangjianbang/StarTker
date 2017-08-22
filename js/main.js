$(document).ready(function(){
	/*toggle方法*/
	$.fn.toggle = function( fn, fn2 ) {
		var args = arguments,guid = fn.guid || $.guid++,i=0,
		toggle = function( event ) {
			var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
			$._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
			event.preventDefault();
			return args[ lastToggle ].apply( this, arguments ) || false;
		};
		toggle.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}
		return this.click( toggle );
	};
	//通过滚动条改动导航菜单样式
	$(window).scroll(function(){
		let scrollTop = $(document).scrollTop();
		let four_height = 900 + $(".content_one").height()+$(".content_two").height()+$(".content_three").height();
		if(scrollTop >= four_height){
			//alert(four_height);
			$(".content_four .box_public .left").css({"margin-left":"0px","transition":"2s"});
			$("#yun").css({"right":"10%","transition":"1s"});
			$("#jiance").css({"right":"10%","transition":"2s"});
			$("#reply_1,#reply_2,#reply_3").css({"opacity":"1","transition":"1s","transition-delay":"2s"});
		}
		let two_height = $(".content_one").height()+700;
		if(scrollTop>=two_height){
		 	$("#speed").css({"margin-top":"100px","transition":"1s"});
		 	$("#speed+p").css({"right":"100px","transition":"1.5s"});
		}
		let three_height = $(".content_one").height()+$(".content_two").height()+700;
		if(scrollTop>=three_height){
			$("#lightbulb").css({"background-image":"url(img/on.jpg)","transition":"2s","transition-delay":"0.5s"});
			$("#lightbulb+p").css({"right":"100px","transition":"1.5s"});
			$(".content_three .left p").css({"margin-left":"0px","transition":"1.5s"});
		}
		/*
		if(scrollTop>=700){
			$(".daohang a").css({"color":"black","transition":"1s"});
			$(".logo").css({"background-image":"url(img/logo_black.png)","transition":"1s"});
			$(".header").css({"background-color":"rgba(0,0,0,0.2)"});
		}else if(scrollTop<700){
			$(".daohang a").css({"color":"white","transition":"1s"});
			$(".logo").css({"background-image":"url(img/logo_white.png","transition":"1s"});
			$(".daohang a").mouseover(function(){
				$(this).css({"color":"#acacac","transition":"1s"});
			});
			$(".daohang a").mouseout(function(){
				$(this).css({"color":"white","transition":"1s"});
			});
			$(".header").css({"background-color":"rgba(5,18,26,0.8)"});
		}*/
	});
	/*首页加载定位适配*/
	$(".section").css({"top":$(window).height()});
	$(".footer").css({"margin-top":$(window).height()});
	/*首页图片自适应分辨率---需要修改！*/
	var dowidth =  $(document).width();
	if (dowidth<1366) {
		$(".section_life").css({"transition":"2s","opacity":"1"});
		$(".section_life_inf").css({"transition":"2s","opacity":"1"});
	}else if(dowidth>1800){
		$(".section_life").css({"transition":"2s","opacity":"1"});
		$(".section_life_inf").css({"transition":"2s","opacity":"1"});
	}
	$("#show_line_inf").toggle(function(){
		$(".section_life_inf").css({"height":"0px","transition":"1s"});
		$("#show_line_inf").css({"transform":"rotate(0deg)","transition":"1s"});
	},function(){
		$(".section_life_inf").css({"height":"100px","transition":"1s"});
		$("#show_line_inf").css({"transform":"rotate(180deg)","transition":"1s"});
	});
	/*右侧侧拉菜单*/
	$("#show_menu").click(function(){
		$(".menu").css({"width":"25%","transition":"0.6s"});
		$(".shadow").css({"background-color":"rgba(0,0,0,0.5)","z-index":"100"});

	});
	$("#close_menu").click(function(){
		$(".menu").css({"width":"0","transition":"0.6s"});
		$(".shadow").css({"background-color":"rgba(0,0,0,0)","z-index":"-11"});
		$(".menu .ul_child li").css({"display":"none"});
		$(".ul_parent li i").css({"transform":"rotate(0deg)"});
	});
	$(".ul_parent li:nth-child(2)").toggle(function(){
		$(".menu .ul_child li").slideDown();
		$(".ul_parent li i").css({"transition":"0.5s","transform":"rotate(180deg)"});
	},function(){
		$(".menu .ul_child li").slideUp();
		$(".ul_parent li i").css({"transform":"rotate(0deg)"});
	});
	/*单页超链接信息显示*/
	$("#inf_show2 i").toggle(function(){
		$("#inf_fiv2").slideDown(500);
		$("#inf_show2 i").css({"transform":"rotate(180deg)","transition":"1s"});
	},function(){
		$("#inf_fiv2").slideUp(500);
		$("#inf_show2 i").css({"transform":"rotate(0deg)","transition":"1s"});
	});
	$("#inf_show i").toggle(function(){
		$("#inf_fiv").slideDown(500);
		$("#inf_show i").css({"transform":"rotate(180deg)","transition":"1s"});
	},function(){
		$("#inf_fiv").slideUp(500);
		$("#inf_show i").css({"transform":"rotate(0deg)","transition":"1s"});
	});
	$(".content_four .btn_public").toggle(function(){
		$("#inf_four").slideDown(500);
		$(".content_four .btn_public").html("收起");
	},function(){
		$("#inf_four").slideUp(500);
		$(".content_four .btn_public").html("了解更多");
	});
	$(".content_two .btn_public").toggle(function(){
		$("#inf_two").slideDown(500);
		$(".content_two .btn_public").html("收起");
	},function(){
		$("#inf_two").slideUp(500);
		$(".content_two .btn_public").html("了解更多");
	});
	/*单页第一页图片旋转*/
	$(".content_one .one_main #p_left").mouseover(function(){
		$(".content_one .one_main .one_left i").css({"transition":"0.5s","transform":" translate(0px,-5px)"});
	});
	$(".content_one .one_main #p_left").mouseout(function(){
		$(".content_one .one_main .one_left i").css({"transition":"0.5s","transform":" translate(0px,5px)"});
	});
	$(".content_one .one_main #p_center").mouseover(function(){
		$(".content_one .one_main .one_center i").css({"transition":"0.5s","transform":" translate(0px,-5px)"});
	});
	$(".content_one .one_main #p_center").mouseout(function(){
		$(".content_one .one_main .one_center i").css({"transition":"0.5s","transform":" translate(0px,0px)"});
	});
	$(".content_one .one_main #p_right").mouseover(function(){
		$(".content_one .one_main .one_right i").css({"transition":"0.5s","transform":" translate(0px,-5px)"});
	});
	$(".content_one .one_main #p_right").mouseout(function(){
		$(".content_one .one_main .one_right i").css({"transition":"0.5s","transform":" translate(0px,0px)"});
	});

});
