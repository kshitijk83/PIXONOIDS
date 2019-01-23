    // var slider = $('.scroll-slider');
    // var slides = $('.scroll-slide');
    // var slideWrapper = $('.slide-wrapper');
    // var firstSlide = slides.first();

    // var settings ={},
    //     resizing=false,
    //     scrollController=null,
    //     scrollTween = null,
    //     progress=0,
    //     scrollScene=null;

    // function scrollSlider(options){
    //     settings = $.extend({
    //         slider: '.scroll-slider',
    //         slides: '.scroll-slide',
    //         slideWrapper: '.slider-wrapper',
    //         slideWidth: null,
    //         slideHeight: null
    //     }, options)

    //     // on resize we have to set dimensions each time
    //     // we will invoke setDimensions each time 
    //     $(window).on('resize', function(){
    //         clearTimeout(resizing); // clearing out resizing
    //         // if under time limit resizing occurs
    //         resizing = setTimeout(function(){
    //             setDimensions();
    //         },250)
    //     });
    // }

    // function setDimensions(){
    //     settings.slideWidth = firstSlide.width();
    //     settings.slideHeight = firstSlide.height();
        
    //     console.log(settings.slideWidth);
    //     console.log(settings.slideHeight);

    //     settings.sliderWidth = Math.ceil(settings.slideWidth*slides.length);
    //     settings.sliderHeight = firstSlide.outerHeight(true); // including offset

    //     // set width and height
    //     slideWrapper.width(settings.sliderWidth);

    //     setScene();

    // }

    // function setScene(){
    //     var xDist = -slides.width()*(slides.length-1),
    //     tlParams = { x: xDist, ease: Power2.easeInOut };
    //     if(scrollScene!=null&&scrollTimeline!=null){
    //         progress = 0;
    //         scrollScene.progress(progress);
    //         console.log(progress);
    //         scrollTimeline.to(slideWrapper, 4, tlParams);
    //         scrollScene.setTween(scrollTimeline);
    //         scrollScene.refresh();
    //     } else{
    //         scrollController = new ScrollMagic.Controller();
    //         scrollTimeline = new TimelineMax();
    //         scrollTimeline.to(slideWrapper, 2, tlParams)
    //             .progress(progress);
            
    //         // create scene to pin and link animation
    //         scrollScene = new ScrollMagic.Scene({
    //             triggerElement: settings.slider,
    //             triggerHook: 'onLeave',
    //             duration: settings.sliderWidth
    //         })
    //         .setPin(settings.slider)
    //         .setTween(scrollTimeline)
    //         .addTo(scrollController)
    //         .on('start', function(){
    //             scrollTimeline.time(0);
    //         })
    //     }
    // }

    // $(document).ready(function(){
    //     scrollSlider();
    // })


!(function($) {

    'use strict';
  
    var $slider = $('.scroll-slider'),
        $slides = $('.scroll-slide'),
        $sliderWrapper = $('.scroll-wrapper'),
        $firstSlide = $slides.first();

    var settings = {},
        resizing = false,
        scrollController = null,
        scrollTween = null,
        scrollTimeline = null,
        progress = 0,
        scrollScene = null;

    function scrollSlider(options) {

        // Default
        settings = $.extend({
            slider: '.scroll-slider',
            sliderWrapper: '.scroll-wrapper',
            slides: '.scroll-slide',
            slideWidth: null,
            slideHeight: null,
        }, options);

        // Set dimensions
        // setDimensions();
        
        // On resize        
        $(window).on( 'resize', function() {
          clearTimeout(resizing);
          resizing = setTimeout(function() {
            setDimensions();
          }, 250); 
        });
      
    }

    function setDimensions() {

        settings.slideWidth = $firstSlide.width();
        settings.slideHeight = $firstSlide.height();
      
        console.log(settings.slideWidth);
        console.log(settings.slideHeight);

        // Calculate slider width and height
        settings.sliderWidth = Math.ceil((settings.slideWidth * $slides.length));
        settings.sliderHeight = $firstSlide.outerHeight(true);

        // Set slider width and height
        $sliderWrapper.width(settings.sliderWidth);
        //$sliderWrapper.height(settings.sliderHeight);

        // Set scene
        setScene();

        //resizing = false;
    }

    function setScene() {

      var xDist = -$slides.width() * ( $slides.length - 1 ),
          tlParams = { x: xDist, ease: Power2.easeInOut };
              
      if (scrollScene != null && scrollTimeline != null) {
          
          progress = 0;
          scrollScene.progress(progress);

          scrollTimeline = new TimelineMax();
          scrollTimeline.to( $sliderWrapper, 4, tlParams );

          scrollScene.setTween(scrollTimeline);
        
          scrollScene.refresh();
        
      } else {
          console.log("asdfasf");
          // Init ScrollMagic controller
          scrollController = new ScrollMagic.Controller();

          //Create Tween
          scrollTimeline = new TimelineMax();
          scrollTimeline.to( $sliderWrapper, 2, tlParams );
          scrollTimeline.progress( progress );
        
          // Create scene to pin and link animation
          scrollScene = new ScrollMagic.Scene({
              triggerElement: settings.slider,
              triggerHook: .4,
              duration: settings.sliderWidth
          })
          .setPin(settings.slider)
          .setTween(scrollTimeline)
          .addTo(scrollController)
          scene.addIndicators({
                name: "pin scene",
                colorEnd: "#FFFFFF"})
          .on('start', function (event) {
            scrollTimeline.time(0);
          });
      }
        
    }
    
  $(document).ready(function() {
    scrollSlider(); 
  });
    
})(jQuery);

