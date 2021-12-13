$(document).ready(() => {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
      });
    Particles.init({
        selector: '.background',
        maxParticles: 80,
        connectParticles: true,
        color: ["#FFFFFF"],
      });
      

    var scene = document.getElementById('firstSection');
    var parallaxInstance = new Parallax(scene, {
    });
    $('.main').addEventListener("mousemove", () => {
        parallaxInstance.friction(0.5, 0.5);
    })
    // init controller
    var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 100 } });

    // build scenes
    new ScrollMagic.Scene({ triggerElement: "#secondSection" })
        .setClassToggle("#secondSection", "text") // add class toggle
        .addIndicators() // add indicators (requires plugin)
        .addTo(controller);


})
