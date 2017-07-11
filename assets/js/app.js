var controller = new ScrollMagic.Controller();

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
