$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    $('.project').each(function(){
        var pickOverlay = $(this).find('.overlay');
        var projectInfo = $(this).find('.project-info');
        var smallTitle = $(this).find('.small-title');
        var projectLink = $(this).find('.project-link');
        var head = $(this).find('h4');

        var animateIn = new TimelineMax();
        animateIn
        .fromTo(pickOverlay, 2, {skewX: 10, scale: 1.2}, {skewX:0, xPercent: 100,
             transformOrigin: '0% 100%',ease: Power4.easeOut
            })
        .from(projectInfo, 0.5, {scaleY:0, transformOrigin:'bottom left'}, '-=1.5')
        .from(smallTitle, 0.3, {autoAlpha:0, y:30, ease: Power4.easeOut}, '-=.8')
        .from(projectLink, .3, {autoAlpha:0, y:30, ease:Power4.easeOut}, '-=.8')
        .from(head,.3,{autoAlpha:0, y:30,ease:Power4.easeOut},'-=.8')
    
        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
        .setTween(animateIn)
        .addTo(controller);
        })

    
})