$(document).ready(function(){

	$(".jo-show").addClass("jo-hide");
	var offsetTop = $(".jo-show").offset().top;

	var scrollTop = $(window).scrollTop();
	var windowHeight = $(window).height();

	var showPoint = scrollTop + windowHeight - 50;

	if(showPoint>offsetTop){
		$(".jo-show").addClass("animated bounceIn");
		$(".jo-show").removeClass("jo-hide");
	}

	$("#selengkapnya").click(function(){
	  $("html").animate({
	    scrollTop: 650
	  }, 1000);
	});

	var currentScrollTop = 0;
	$(window).scroll(function(){
		var newScrollTop = $(window).scrollTop();

		// if(c < currentScrollTop && a > b + b){
		// 	console.log("hide");
		// } else if(c > currentScrollTop && !(a <= b)) {
		// 	console.log("show");
		// }
		// c = currentScrollTop;

		// console.log("tadi "+currentScrollTop+" skrg "+newScrollTop);
		if(currentScrollTop > newScrollTop){
			// console.log("turun");
			// $("#jo-nav").show();
			$("#jo-nav").removeClass("animated slideOutUp");
			$("#jo-nav").addClass("animated slideInDown");
			// $("#jo-nav").addClass("BounceInDown");
			// $("#jo-nav").slideDown();
		} else {
			// $("#jo-nav").slideUp();
			// $("#jo-nav").removeClass("BounceInDown");
			$("#jo-nav").removeClass("animated slideInDown");
			$("#jo-nav").addClass("animated slideOutUp");
			// console.log("naik");
		}

		currentScrollTop = newScrollTop;

		$(".jo-show").each(function(i){
			var offsetTop = $(this).offset().top;

			var scrollTop = $(window).scrollTop();
			var windowHeight = $(window).height();

			// var delay = '0.'+i*2+'s';

			var showPoint = scrollTop + windowHeight - 50;

			if(showPoint>offsetTop){
				$(this).addClass("animated bounceIn");
				// $(this).css("animation-delay", delay);
				$(this).removeClass("jo-hide");
			}
		});
	});

	var width1 = 0;
	$("#jo-project-wrapper1 .jo-project").each(function(i){
	  width1 += $(this).width()
	});
	$("#left1").hover(function(){
	  $("#jo-project-wrapper1").animate({
	    scrollLeft: -1000
	  }, 5000, 'linear');
	}, function(){
	  $("#jo-project-wrapper1").stop()
	});
	$("#right1").hover(function(){
	  $("#jo-project-wrapper1").animate({
	    scrollLeft: width1
	  }, 5000, 'linear');
	}, function(){
	  $("#jo-project-wrapper1").stop()
	});

	var width2 = 0;
	$("#jo-project-wrapper2 .jo-project").each(function(i){
	  width2 += $(this).width()
	});

	$("#jo-project-wrapper2").animate({
	  scrollLeft: width2
	}, 5000, 'linear');
	
	$("#left2").hover(function(){
	  $("#jo-project-wrapper2").animate({
	    scrollLeft: -1000
	  }, 5000, 'linear');
	}, function(){
	  $("#jo-project-wrapper2").stop()
	});
	$("#right2").hover(function(){
	  $("#jo-project-wrapper2").animate({
	    scrollLeft: width2
	  }, 5000, 'linear');
	}, function(){
	  $("#jo-project-wrapper2").stop()
	});

	$("#jo-toggle").click(function(){
		$(".jo-pop-menu-wrapper").removeClass("bounceOutDown");
		$(".jo-pop-menu-wrapper").addClass("active animated bounceInUp");
	})
	$(".jo-pop-menu-wrapper .icon-close").click(function(){
		$(".jo-pop-menu-wrapper").removeClass("active bounceInUp");
		$(".jo-pop-menu-wrapper").addClass("active animated bounceOutDown");
	})
});


// $(document).ready(function(){
// 	$(".jo-show").addClass("jo-hide");
// 	$(window).scroll(function(){
// 		$(".jo-show").each(function(i){
// 			var offsetTop = $(this).offset().top;

// 			var value = 100;
// 			value*=i;

// 			var scrollTop = $(window).scrollTop();
// 			var windowHeight = $(window).height();

// 			var showPoint = scrollTop + windowHeight - value;

// 			if(showPoint>offsetTop){
// 				$(this).addClass("animated bounceIn");
// 				$(this).removeClass("jo-hide");
// 			}
// 		});
// 	});
// });

// $(document).ready(function(){
// 	var $window = $(window);
// 	var $aboutIcon = $("#about-icon");
// 	var $aboutImg = $("#about-img");

// 	$aboutIcon.addClass("jo-hide");
// 	$aboutImg.addClass("jo-hide");

// 	function isScrolled($elem, $window){
// 		var docViewTop = $window.scrollTop();
// 		var docViewBottom = docViewTop+$window.height();

// 		var elemTop = $elem.offset().top;
// 		var elemBottom = elemTop + $elem.height();

// 		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 	}

// 	if (isScrolled($aboutIcon, $window)) {
// 		$aboutIcon.addClass("animated bounceIn");
// 		$aboutIcon.removeClass("jo-hide");
// 	}
// 	if (isScrolled($aboutImg, $window)) {
// 		$aboutImg.addClass("animated bounceIn");
// 		$aboutImg.removeClass("jo-hide");
// 	}

// 	$(window).scroll(function(){
// 		if(isScrolled($aboutIcon, $window)){
// 			$aboutIcon.addClass("animated bounceIn");
// 			$aboutIcon.removeClass("jo-hide");
// 		}
// 		if (isScrolled($aboutImg, $window)) {
// 			$aboutImg.addClass("animated bounceIn");
// 			$aboutImg.removeClass("jo-hide");
// 		}
// 	})
// });

// $(document).ready(function(){
// 	var $window = $(window);
// 	var $elem = $("#about-icon");

// 	$elem.addClass("jo-hide");

// 	function isScrolled($elem, $window){
// 		var docViewTop = $window.scrollTop();
// 		var docViewBottom = docViewTop+$window.height();

// 		var elemTop = $elem.offset().top;
// 		var elemBottom = elemTop + $elem.height();

// 		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 	}
// 	$(window).scroll(function(){
// 		if(isScrolled($elem, $window)){
// 			$elem.addClass("animated bounceInUp");
// 			$elem.removeClass("jo-hide");
// 		}
// 	})
// });