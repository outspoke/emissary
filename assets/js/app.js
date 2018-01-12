$(document).ready(function(){
  // Init Bootstrap elements
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  // Init slick slider
  $('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pausOnFocus: false,
    pauseOnHover: false,
    touchMove: false,
    dots: false,
    arrows: false,
  });

  // Dynamic Pricing Table
  $('[data-show-table-column]').click(function(){
    var col = $(this).data('show-table-column');
    $('.pricing-table').find('td,th').filter(':nth-child(n+2)').hide();
    $('.pricing-table').find('td,th').filter(':nth-child(' + col + ')').show();
  });

  // Scroll animations
  var controller = new ScrollMagic.Controller();

  // Top Bar Nav BG + Shadow
  new ScrollMagic.Scene({
    offset: '1px'
  })
  .setClassToggle('.primary-nav', 'is-stuck')
  .addTo(controller);

  // Paralaxify the header
  new ScrollMagic.Scene({
    triggerElement: '#homeSlider',
    triggerHook: 0,
    duration: $('#homeSlider').height(),
  })
  .setTween(
    TweenMax.to('#homeSlider', 1, {
      y: "10%"
    })
  )
  .addTo(controller);

  // Icon 1
  new ScrollMagic.Scene({
    triggerElement: '#icon1',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#icon1', 0.5, {
      opacity: 0,
      x: "-5%"
    })
  )
  .addTo(controller);

  // Icon 2
  new ScrollMagic.Scene({
    triggerElement: '#icon2',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#icon2', 0.5, {
      opacity: 0,
      x: "5%",
      y: "-5%"
    })
  )
  .addTo(controller);

  // Icon 3
  new ScrollMagic.Scene({
    triggerElement: '#icon3',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#icon3', 0.5, {
      opacity: 0,
      scale: '0.8'
    })
  )
  .addTo(controller);

  // Icon 4
  new ScrollMagic.Scene({
    triggerElement: '#icon4',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#icon4', 0.5, {
      opacity: 0,
      x: "5%"
    })
  )
  .addTo(controller);

  // Icon 5
  new ScrollMagic.Scene({
    triggerElement: '#icon5',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#icon5', 0.5, {
      opacity: 0,
      x: "-5%"
    })
  )
  .addTo(controller);

  // CTA
  new ScrollMagic.Scene({
    triggerElement: '#cta-icon',
    triggerHook: 0.75
  })
  .setTween(
    TweenMax.from('#cta-icon', 0.5, {
      opacity: 0,
      y: "10%"
    })
  )
  .addTo(controller);

  // Product Pages
  if ($('.text-retargeting-primary-content, .managed-chat-primary-content').length >= 1) {
    $('.steps > .step').each(function() {
      var $step = $(this);
      var $stepText = $step.find('.step-text');
      var $stepNumIcon = $step.find('.bg-icon');
      var $stepImg = $step.find('.step-image img');

      new ScrollMagic.Scene({
        triggerElement: $step[0],
        triggerHook: 0.75,
        offset: -100
      })
      .setTween(
        TweenMax.from($stepText, 0.5, {
          opacity: 0,
          y: "-5%"
        })
      )
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: $stepNumIcon[0],
        triggerHook: 0.75,
        offset: 50
      })
      .setTween(
        TweenMax.from($stepNumIcon[0], 0.5, {
          backgroundPosition: "0 80%"
        })
      )
      .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: $stepNumIcon[0],
        triggerHook: 0.75,
        offset: 50
      })
      .setTween(
        TweenMax.from($stepNumIcon[0], 0.5, {
          backgroundPosition: "0 80%"
        })
      )
      .addTo(controller);


      // desktop modal animation
      var screenshotImageAnim = new TimelineMax()
      screenshotImageAnim
        .to('#screenshot-image-overlay', 0.5, {
          opacity: 0.5
        }).to('#screenshot-image-modal', 0.5, {
          opacity: 1
        });
      new ScrollMagic.Scene({
        triggerElement: '#screenshot-image',
        triggerHook: 0.75,
        offset: 100
      })
      .setTween(screenshotImageAnim)
      .addTo(controller);

      // text message animation
      var mobileImageAnim = new TimelineMax()
      mobileImageAnim
        .to('#mobile-phone-avatar', 0.5, {
          opacity: 1
        }).to('#mobile-phone-message', 0.5, {
          opacity: 1
        }, '-=0.25');
      new ScrollMagic.Scene({
        triggerElement: '#mobile-phone-image',
        triggerHook: 0.75,
        offset: 100
      })
      .setTween(mobileImageAnim)
      .addTo(controller);

      // desktop website animation
      var desktopWebImageAnim = new TimelineMax()
      desktopWebImageAnim
        .to('#desktop-website', 1, {
          opacity: 1,
          y: 14
        });
      new ScrollMagic.Scene({
        triggerElement: '#desktop-web-image', 
        triggerHook: 0.75,
        offset: 150
      })
      .setTween(desktopWebImageAnim)
      .addTo(controller);

      // rocket ship animation
      var rocketShipImageAnim = new TimelineMax()
      rocketShipImageAnim
        .to('#ship', 1.5, {
          y: '15px'
        })
        .to('#smoke', 1.5, {
          y: '-0.98'
        }, '-=0.5');
      new ScrollMagic.Scene({
        triggerElement: '#rocket-image', 
        triggerHook: 0.75,
        offset: 100
      })
      .setTween(rocketShipImageAnim)
      .addTo(controller);
      
      var rocketSmokeImageAnim = new TimelineMax({ repeat: -1 })
      rocketSmokeImageAnim
        .to('#smoke', 0.5, {
          y: '2px'
        })
        .to('#smoke', 0.5, {
          y: '-0.96'
        }, '-=0.5');
      new ScrollMagic.Scene({
        triggerElement: '#rocket-image', 
        triggerHook: 0.75,
        offset: 100
      })
      .setTween(rocketSmokeImageAnim)
      .addTo(controller);
      
      var rocketstarsImageAnim = new TimelineMax({ repeat: -1 })
      rocketstarsImageAnim
        .to('#stars', 0.5, {
          y: '1px'
        })
        .to('#stars', 0.5, {
          y: '-0.96'
        }, '-=0.5');
      new ScrollMagic.Scene({
        triggerElement: '#stars', 
        triggerHook: 0.75,
        offset: 50
      })
      .setTween(rocketstarsImageAnim)
      .addTo(controller);


    });
    

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 100
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  }
  
});
