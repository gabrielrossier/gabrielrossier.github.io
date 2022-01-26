var scrolled = false
var scrollAnimationRunning = false
$(document).ready(() => {

  //FLICKITY 
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


  //PARTICLES
  Particles.init({
    selector: '.background',
    maxParticles: 80,
    connectParticles: true,
    color: ["#FFFFFF"],
  });


  //PARALAX
  var scene = document.getElementById('firstSection');
  var parallaxInstance = new Parallax(scene, {
  });
  $('.main').mousemove(() => {
    parallaxInstance.friction(0.5, 0.5);
  }) 


  //ANIMEJS
  var tl = anime.timeline({
    easing: 'linear',
    duration: 500
  });
  tl.add({
    targets: '.backgroundtext',
    keyframes: [
      {
        translateY: -100,
        opacity: 0
      },
      {
        translateY: 0,
        opacity: 1
      },
    ],
    complete: function(anim) {
      anime({
        targets: '.infoText',
        keyframes: [
          {
            translateY: 40,
            opacity: 0
          },
          {
            translateY: 0,
            opacity: 1
          },
        ],
        easing:'linear'

      })
      anime({
        targets: '.userIcon',
        keyframes: [
          {
            translateY: -40,
            opacity: 0
          },
          {
            translateY: 0,
            opacity: 1
          },
        ],
        easing:'linear'
      })
      }
  });
  document.addEventListener("wheel",()=>{
    
    //this if prevent scroll if animation is not finished
    if(!scrollAnimationRunning)
    {
      !scrolled ? scrollDown() : scrollUp()
    }
  })

})

function scrollDown()
{
  scrollAnimationRunning = true

  anime({
    duration: 500,
    targets: '#secondSection',
    keyframes: [
      {
        translateY: -800,
        opacity: 1
      },
    ],
    loop: false,
    easing: 'linear',
  })
  anime({
    duration: 500,
    targets: '#firstSection',
    keyframes: [
      {
        translateY: -1000,
        opacity: 1
      },
    ],
    loop: false,
    easing: 'linear',
    complete:()=>{
      scrollAnimationRunning = false;
    }
  })
  scrolled = true
}

function scrollUp()
{
  scrollAnimationRunning = true
  anime({
    duration: 500,
    targets: '#secondSection',
    keyframes: [
      {
        translateY: 0,
        opacity: 1
      },
    ],
    loop: false,
    easing: 'linear',

  })
  anime({
    duration: 500,
    targets: '#firstSection',
    keyframes: [
      {
        translateY: 0,
        opacity: 1
      },
    ],
    loop: false,
    easing: 'linear',
    complete:()=>{
      scrollAnimationRunning = false;
    }
  })
  scrolled = false
}
