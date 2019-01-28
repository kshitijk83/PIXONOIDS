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
            size=$('slideShow_main-top').length;
        
        if(slideIn.length!=0){
            tl.set(slideIn, {y:'100%', autoAlpha:1, className: '+=active'})
                .set(slideOut, {className: '-=active'})
                .to(slideOut, .5, {y:'-100%', ease: Power3.easeInOut}, 0)
                .to(slideIn, .5, {y: '-=100%',ease: Power3.easeInOut}, 0);
        }
        TweenLite.set(slideNavPrev, {autoAlpha: 1});
    }

    slideNavNext.click(function(e){
        e.preventDefault();
        var slideOut = $('.homeSlide.active'),
            slideIn = $('.homeSlide.active').prev('.homeSlide');
        goToNextSlide(slideOut, slideIn);
    })
})(jQuery);