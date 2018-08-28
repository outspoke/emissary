$(document).ready(function(){
  // clip-path polyfill for home page header
  ClipPath('.hero', '0% 0%, 100% 0%, 100% 80%, 0% 100%', 'hero-clip-path');

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

  // Home Page Header Animations
  // Randomized star twinkles
  $('#starfield-svg path[class^=star]').each(function(i, starPath){
    new TimelineMax({repeat: -1})
    .to(starPath, (Math.random() * 3 + 1).toFixed(2), {
      opacity: 1,
      ease: Power2.easeInOut,
    }, '+=' + (Math.random() * 1.5).toFixed(2))
    .to(starPath, (Math.random() * 3 + 1).toFixed(2), {
      opacity: 0,
      ease: Power2.easeInOut,
    }, '+=' + (Math.random() * 1.5).toFixed(2));
  });
  // Starship fade in
  if($('#starship #ship').length) {
    TweenMax.set('#starship #ship', { x: 46 });
    TweenMax.to('#starship #ship', 4, {
      y: '0%',
      delay: 0.1,
      ease: Power2.easeInOut,
    });
  }

  if($('#mobile-phone-image').length) {
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
  }



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

  // Product Pages
  if ($('.text-retargeting-primary-content, .managed-chat-primary-content').length >= 1) {
    // chat by text animation
    var chatByTextAnim = new TimelineMax()
    chatByTextAnim
      .to('#chatbytext', 0.5, {
        opacity: 1
      });
    new ScrollMagic.Scene({
      triggerElement: '#step-1',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(chatByTextAnim)
    .addTo(controller);

    // desktop modal animation 2
    var recruiterChatAnim = new TimelineMax()
    recruiterChatAnim
      .to('#recruiter-chat #avatar-mask', 1, {
        opacity: 0
      }).to('#recruiter-chat #chat-bubble', 1, {
        opacity: 1
      }, '-=0.5');
    new ScrollMagic.Scene({
      triggerElement: '#recruiter-chat',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(recruiterChatAnim)
    .addTo(controller);

    // clock fade
    var clockAnim = new TimelineMax()
    clockAnim
      .to('#clock', 0.5, {
        opacity: 1,
        onComplete: function() {
          console.log('complete');
          $('#clock').addClass('animated')
        }
      });
    new ScrollMagic.Scene({
      triggerElement: '#clock',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(clockAnim)
    .addTo(controller);

    // desktop - click
    var desktopUserInteract = new TimelineMax()
    desktopUserInteract
      .to('#desktop-user-interact', 0.5, {
        opacity: 1
      })
      .to('#desktop-user-interact #mouse-pointer', 0.5, {
        x: -94,
        y: -14,
        delay: 0.5
      })
      .to('#desktop-user-interact #button', 0.1, {
        opacity: 0.8
      })
      .to('#desktop-user-interact #button', 0.1, {
        opacity: '1',
        scale: 0.9,
        delay: 0.5
      })
      .to('#desktop-user-interact #button', 0.1, {
        opacity: '1',
        scale: 1,
        delay: 0.05
      })
      ;
    new ScrollMagic.Scene({
      triggerElement: '#desktop-user-interact',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(desktopUserInteract)
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
      .set('#ship', {
        x: 46
      })
      .to('#ship', 0.5, {
        x: 46,
        y: '15px'
      })
    new ScrollMagic.Scene({
      triggerElement: '#step-3',
      offset: 100
    })
    .setTween(rocketShipImageAnim)
    .addTo(controller);

    var rocketSmokeImageAnim = new TimelineMax({ repeat: -1 })
    rocketSmokeImageAnim
      .to('#smoke', 0.5, {
        y: '-0.96'
      });
    new ScrollMagic.Scene({
      triggerElement: '#ship',
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
      triggerElement: '#ship',
      triggerHook: 0.75,
      offset: 50
    })
    .setTween(rocketstarsImageAnim)
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
          backgroundPosition: "5% 80%"
        })
      )
      .addTo(controller);

    });
  }

  // 1-to-1 Texting
  // phone links
  if ($('#phone-links-graphic').length >= 1) {
    var phoneLinksAnim = new TimelineMax()
    var $phoneLinksStaggerElements = $('#phone-number-active #phone-link > polygon, #phone-number-active #phone-underline, #phone-number-active #e-logo');

    phoneLinksAnim
      .set($phoneLinksStaggerElements, { opacity: 0 })
      .to('#phone-number-active', 0.5, {
        opacity: 1,
        delay: 0.125
      })
      .staggerTo($phoneLinksStaggerElements, 0.5, {
        opacity: 1
      }, '0.125');

    new ScrollMagic.Scene({
      triggerElement: '#phone-links-graphic',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(phoneLinksAnim)
    .addTo(controller);
  }

  // browser extension
  var $browserExtensionGraphic = $('#browser-extension-graphic');
  if ($browserExtensionGraphic.length >= 1) {
    var browserExtensionAnim = new TimelineMax()
    var $extensionSidebarElements = $('#Group-22, #Group-32, #Group-40');

    browserExtensionAnim
      .from('#browser-extension-graphic #sidebar', 0.5, { x: '+=20px', delay: 0.5 })
      .to('#browser-extension-graphic #sidebar', 0.5, { opacity: 1 }, '-=0.25')
      .staggerFrom($extensionSidebarElements, 0.25, { opacity: 0, y: '-=4px' }, '-0.05');

    new ScrollMagic.Scene({
      triggerElement: '#browser-extension-graphic',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(browserExtensionAnim)
    .addTo(controller);
  }

  // platforms (power plug)
  var $platforms = $('#platforms');
  if ($platforms.length >= 1) {
    var platformsAnim = new TimelineMax()

    platformsAnim
      .to($platforms, 0.5, { opacity: 1, delay: 0.5 });

    new ScrollMagic.Scene({
      triggerElement: '#platforms',
      triggerHook: 0.75,
      offset: -100
    })
    .setTween(platformsAnim)
    .addTo(controller);
  }

  // Text Campaigns

  // outreach
  var $outreachGraphic = $('#outreach-graphic');
  if ($outreachGraphic.length >= 1) {
    var outreachAnim = new TimelineMax();
    var $outreachStaggerElements = $('#map-line-1, #map-bubble-1, #map-line-2, #map-bubble-2, #map-line-3, #map-bubble-3', $outreachGraphic);

    outreachAnim
      .to($outreachGraphic, 0.5, { opacity: 1, delay: 0.5 })
      .staggerTo($outreachStaggerElements, 0.5, { opacity: 1 }, '0.125');

    new ScrollMagic.Scene({
      triggerElement: '#outreach-graphic',
      triggerHook: 0.75,
      offset: -100
    })
    .setTween(outreachAnim)
    .addTo(controller);
  }

  // personalize messages
  var $personalizeMessagesGraphic = $('#personalize-messages-graphic');
  if ($personalizeMessagesGraphic.length >= 1) {
    var personalizeMessagesAnim = new TimelineMax();
    var $messageVar1 = $('#messages-tpl-input-1, #messages-tpl-output-1');
    var $messageVar2 = $('#messages-tpl-input-2, #messages-tpl-output-2');

    personalizeMessagesAnim
      .to($personalizeMessagesGraphic, 0.5, { opacity: 1, delay: 0.5 })
      .to('#messages-edit-pane', 0.5, { opacity: 1 })
      .staggerTo([$messageVar1, $messageVar2], 0.5, { opacity: 1 }, 0.5)
      .staggerTo([$messageVar1, $messageVar2], 1, { scaleX: 0.5 }, 0.5)
      .staggerTo([$messageVar1, $messageVar2], 1, { scaleX: 1.25 }, 0.5)
      .staggerTo([$messageVar1, $messageVar2], 1, { scaleX: 1}, 0.5);

    new ScrollMagic.Scene({
      triggerElement: '#personalize-messages-graphic',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(personalizeMessagesAnim)
    .addTo(controller);
  }

  // schedule
  var $scheduleCampaignsGraphic = $('#schedule-campaigns-graphic');
  if ($scheduleCampaignsGraphic.length >= 1) {
    var scheduleCampaignsAnim = new TimelineMax();
    var $calendarElements = $('#schedule-campaigns-graphic #date-selected, #schedule-campaigns-graphic #date-filled, #schedule-campaigns-graphic #date-time-filled');

    scheduleCampaignsAnim
      .set('#dates', { opacity: 0 })
      .from($scheduleCampaignsGraphic, 0.5, { opacity: 0 })
      .to('#dates', 0.25, { opacity: 1 }, '0.5')
      .staggerTo($calendarElements, 0.25, { opacity: 1, delay: 0.5 }, '0.75');

    new ScrollMagic.Scene({
      triggerElement: '#schedule-campaigns-graphic',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(scheduleCampaignsAnim)
    .addTo(controller);
  }

  // import data
  var $importDataGraphic = $('#import-data-graphic');
  if ($importDataGraphic.length >= 1) {
    var importDataAnim = new TimelineMax();
    var $importArrow = $('#arrow', $importDataGraphic);

    importDataAnim
      .from($importDataGraphic, 0.5, { opacity: 0, y: '20' })
      .from($importArrow, 0.5, { opacity: 0, y: '20' });

    new ScrollMagic.Scene({
      triggerElement: '#import-data-graphic',
      triggerHook: 0.75,
      offset: 100
    })
    .setTween(importDataAnim)
    .addTo(controller);
  }
  
  
});
