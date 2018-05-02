var heg = $(document).height();
var heg2 = (heg-100)+'px';
$('.header-fl-nav1').css('height',heg2);
$('.header-fl-nav2').css('height',heg2);
$('.header-fl-nav3').css('height',heg2);

$(function(){
	var timer = null;
	var i = 0;
	$pic = $('.example ul li');
	$num = $('.example ol li');
	var a = $num.length;
	$num.click(function(){
		clearInterval(timer);
		var i = $(this).index();
		$pic.eq(i).fadeIn(700).siblings().fadeOut(1000);
		$(this).addClass('seleted').siblings().removeClass('seleted');
		timer = setInterval(function aa(){
		if(i==a){
			i=0;
			$pic.eq(i).fadeIn(700).siblings().fadeOut(1000);
			$num.eq(i).addClass('seleted').siblings().removeClass('seleted');
			i++;
		}else{
			$pic.eq(i).fadeIn(700).siblings().fadeOut(1000);
			$num.eq(i).addClass('seleted').siblings().removeClass('seleted');
			i++;
		}
	},5000);
	})
	timer = setInterval(function aa(){
		if(i==a){
			i=0;
			$pic.eq(i).fadeIn(700).siblings().fadeOut(1000);
			$num.eq(i).addClass('seleted').siblings().removeClass('seleted');
			i++;
		}else{
			$pic.eq(i).fadeIn(700).siblings().fadeOut(1000);
			$num.eq(i).addClass('seleted').siblings().removeClass('seleted');
			i++;
		}
	},5000);
});
$btn = $('.index-list1-btn ul li');
$btn.click(function(){
	var index = $btn.index(this);
	$(this).addClass('active').siblings().removeClass('active');
	if(index==0){
		$("#one").attr ("src", "images/default/ic1-icon6.png");
		$("#two").attr ("src", "images/default/ic1-icon2.png");
		$("#three").attr ("src", "images/default/ic1-icon3.png");
		$("#four").attr ("src", "images/default/ic1-icon4.png");
		$("#five").attr ("src", "images/default/ic1-icon5.png");
	}
	if(index==1){
		$("#one").attr ("src", "images/default/ic1-icon1.png");
		$("#two").attr ("src", "images/default/ic1-icon7.png");
		$("#three").attr ("src", "images/default/ic1-icon3.png");
		$("#four").attr ("src", "images/default/ic1-icon4.png");
		$("#five").attr ("src", "images/default/ic1-icon5.png");
	}
	if(index==2){
		$("#one").attr ("src", "images/default/ic1-icon1.png");
		$("#two").attr ("src", "images/default/ic1-icon2.png");
		$("#three").attr ("src", "images/default/ic1-icon8.png");
		$("#four").attr ("src", "images/default/ic1-icon4.png");
		$("#five").attr ("src", "images/default/ic1-icon5.png");
	}
	if(index==3){
		$("#one").attr ("src", "images/default/ic1-icon1.png");
		$("#two").attr ("src", "images/default/ic1-icon2.png");
		$("#three").attr ("src", "images/default/ic1-icon3.png");
		$("#four").attr ("src", "images/default/ic1-icon9.png");
		$("#five").attr ("src", "images/default/ic1-icon5.png");
	}
	if(index==4){
		$("#one").attr ("src", "images/default/ic1-icon1.png");
		$("#two").attr ("src", "images/default/ic1-icon2.png");
		$("#three").attr ("src", "images/default/ic1-icon3.png");
		$("#four").attr ("src", "images/default/ic1-icon4.png");
		$("#five").attr ("src", "images/default/ic1-icon10.png");
	}
	$(this).find('a').find('i').css('display','block');
	$(this).siblings().find('a').find('i').hide();
	$('.index-list1-content').eq(index).show().siblings().hide();
})
$('.cr-list2 ul li').click(function(){
	var index = $('.cr-list2 ul li').index(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('.cr-list2-content').eq(index).fadeIn().siblings().hide();
})
$('.cu-list2 ul li').hover(function(){
	$(this).siblings().removeClass('active');
	$(this).find('.list-black').hide();
	$(this).find('.cu-list2-txt').animate({marginTop:"0"});
	$(this).animate({marginTop:"40px"});
	$(this).css('box-shadow','0px 0px 10px #666');
	$(this).addClass('active');
	$(this).siblings().find('.cu-list2-txt').animate({marginTop:"-270px"});
	$(this).siblings().animate({marginTop:"160px"});
	$(this).siblings().css('box-shadow','0px 0px 0px #666');
	$(this).siblings().find('.list-black').show();
})
$('.map ol li').click(function(){
	var index = $('.map ol li').index(this);
	$('.map ul li').eq(index).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active')
})
/*$('.nav ul li a span').parent('a').hover(function(){
	$(this).css('color','#f07c2e');
},function(){
	if($(this).hasClass('active')==true){
		$(this).css('color','#f07c2e');
	}else{
		$(this).css('color','#333');
	}
})*/
$('.nav ul li').hover(function(){
	$(this).find('a').find('span').parent('a').css('color','#f07c2e');
},function(){
	if($(this).find('a').find('span').parent('a').hasClass('active')==true){
		$(this).find('a').find('span').parent('a').css('color','#f07c2e');
	}else{
		$(this).find('a').find('span').parent('a').css('color','#333');
	}
})
$('.about-list3 ul li').click(function(){
	var index = $('.about-list3 ul li').index(this);
	$('.about-list3 ol li').eq(index).show().siblings().hide();
	$(this).addClass('active').siblings().removeClass('active');
})
/*$('.Box4 .Box4_con .conbox ul li').eq(0).find(('img')).animate({width:"275px"},{height:"250px"},{marginTop:"0"});*/
$Lf = $('.Box4 .Box4_con .btnl');
$Lr = $('.Box4 .Box4_con .btnr');
$nav2 = $('.about-list4 ol li');
var a = 0;
$Lf.click(function(){
	if( !$nav2.is(':animated') ){
	if(a==0){
		$nav2.eq(a).hide();
		a = 3;
		$nav2.eq(a).fadeIn(1001);
	}else{
		$nav2.eq(a).hide();
		a--;
		$nav2.eq(a).fadeIn(1001);
	}}
})
$Lr.click(function(){
	if( !$nav2.is(':animated') ){
	if(a==3){
		$nav2.eq(a).hide();
		a = 0;
		$nav2.eq(a).fadeIn(1001);
	}else{
		$nav2.eq(a).hide();
		a++;
		$nav2.eq(a).fadeIn(1001);
	}}
})
$('.details-list1 ul li').click(function () {
	$(this).addClass('active').siblings().removeClass('active');
})
$('.details-list2-btn a').eq(0).click(function () {
    var num = $(".details-list2-inp input").val();
    $(".details-list2-inp input").val(++num);
})
$('.details-list2-btn a').eq(1).click(function () {
    var num = $(".details-list2-inp input").val();
    if(num>0) {
        var num2 = num-1;
        $(".details-list2-inp input").val(num2);
    }
})
$('.details-content-bottom ul li').click(function () {
	var index = $('.details-content-bottom ul li').index(this);
	$(this).addClass('active').siblings().removeClass('active');
	$('.details-content-box').eq(index).show().siblings().hide();
})

