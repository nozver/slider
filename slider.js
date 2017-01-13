$(function(){
	/*ilk slider denemem*/
	
	/*
	$(".slider ul li").hide();
	$(".slider ul li:first").show();
	*/
	var sure = 2000;
	var toplamli = $(".slider ul li").length;
	var liWidth = 800;
	var toplamWidth = liWidth * toplamli;
	var liDeger = 0;
	$(".slider ul").css("width",toplamWidth + "px");
	
	$("a.sonraki").click(function(){
		if(liDeger < toplamli - 1){
			liDeger++;
			yeniWidth = liWidth * liDeger;
			$(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
		}else{
			liDeger=0;
			$(".slider ul").animate({marginLeft: "0"}, 500);
		}
		return false;
	})
	$("a.onceki").click(function(){
		if(liDeger  >0){
			liDeger--;
			yeniWidth = liWidth * liDeger;
			$(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
		}else{
		liDeger=4;
		$(".slider ul").animate({marginLeft: "-3200px"}, 500);
		}
		return false;
	})  
	
	/*otomatik değişme*/
	
	$.slider = function(){
		if(liDeger < toplamli -1){
			liDeger++;
			yeniWidth = liWidth * liDeger;
			$(".slider ul").animate({marginLeft: "-" + yeniWidth + "px"}, 500);
		}else{
			liDeger=0;
			$(".slider ul").animate({marginLeft: "0"}, 500);
		}
	}
	var don = setInterval("$.slider()",sure);
	$("#slider").hover(function(){
		clearInterval(don);
	},function(){
		
		don = setInterval("$.slider()",sure);
	})
});