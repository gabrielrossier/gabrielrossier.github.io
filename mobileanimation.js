$(document).ready(() => {
    anime({
        targets: '.arrowContainer .arrow-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        opacity:1,
        loop: true
      });
      var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
      // trigger animation by adding a css class
      .setClassToggle("#animate1", "show")
      .addTo(controller);
})

