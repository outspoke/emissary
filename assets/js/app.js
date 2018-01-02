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
        triggerElement: $stepImg[0],
        triggerHook: 0.75,
        offset: -100
      })
      .setTween(
        TweenMax.from($stepImg, 0.5, {
          opacity: 0,
          scale: "0.9"
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
