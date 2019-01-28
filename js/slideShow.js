(function($){
    var activeSlide = $('.active'),
    homeSlide = $('.homeSlide'),
    slideNavPrev = $('.slideShow_nav-prev'),
    slideNavNext = $('.slideShow_nav-next');

    function init(){
        TweenLite.set(homeSlide.not(activeSlide), {autoAlpha: 0});
        TweenLite.set(slideNavPrev, {autoAlpha: .2});
    }

    init();

    function goToNextSlide(slideOut, slideIn){
        var tl = new TimelineLite(),
            size=$('slideShow_main-top').length,
            index = slideIn.index();

        if(slideIn.length!=0){
            tl.set(slideIn, {y:'100%', autoAlpha:1, className: '+=active'})
                .set(slideOut, {className: '-=active'})
                .to(slideOut, .5, {y:'-100%', ease: Power3.easeInOut}, 0)
                .to(slideIn, .5, {y: '-=100%',ease: Power3.easeInOut}, 0);
        }
        TweenLite.set(slideNavPrev, {autoAlpha: 1});
        if(index===size){
            TweenLite.to(slideNavNext, 0.3,{autoAlpha: 0.2})
        }

        if(index!==size){
            TweenLite.to(slideNavNext, .3, {autoAlpha:1});
        }
    }

    slideNavNext.click(function(e){
        e.preventDefault();
        var slideOut = $('.homeSlide.active'),
            slideIn = $('.homeSlide.active').next('.homeSlide');
        goToNextSlide(slideOut, slideIn);
    })

    function goToPreviousSlide(slideOut, slideIn){
		var tl = new TimelineLite(),
			slideOutH1=slideOut.find('h1'),
			slideOutP=slideOut.find('p'),
			slideInH1=slideIn.find('h1'),
			slideInP=slideIn.find('p'),
			index=slideIn.index(),
			size=$('.top .homeSlide').length;
		if(slideIn.length!=0){
			tl.set(slideIn, {y:'-100%', autoAlpha:1,className: '+=active'})
				.set(slideOut, {className: '-=active'})
				.to([slideOutH1, slideOutP], .3, {y:'+=15px', autoAlpha:0,ease:Power3.easeInOut}, 0)
				.to(slideOut, .5, {y:'100%', ease:Power3.easeInOut}, 0)
				.to(slideIn, .5, {y: '+=100%', ease:Power3.easeInOut}, 0)
				.fromTo([slideInH1, slideInP], .3, {y:'-=20px', autoAlpha:0},{autoAlpha:1, y:0, ease: Power1.easeInOut}, 0.3);
		}
		TweenLite.set(slideNavPrev, {autoAlpha:1});
		// console.log(index, size);
		if(index===0){
			TweenLite.to(slideNavPrev, .3, {autoAlpha:.2});
		}
		if(index!==size){
			TweenLite.to(slideNavNext, .3, {autoAlpha:1});
		}
    }

    slideNavPrev.click(function(e){
		e.preventDefault();
		var slideOut = $('.homeSlide.active'),
			slideIn = $('.homeSlide.active').prev('.homeSlide');
		
		goToPreviousSlide(slideOut, slideIn);
    });
    
    $(document).mousemove(function(event){
		var xPos = event.clientX/$(window).width()-.5;
		var yPos = event.clientY/$(window).height()-.5;

		TweenLite.to('.slideShow', .6, {
			rotationX: 5*yPos,
			rotationY:5*xPos,
			ease: Power1.easeOut,
			transformPerspective: 900,
			// transformOrigin: "center"
		})
	})
    
})(jQuery);