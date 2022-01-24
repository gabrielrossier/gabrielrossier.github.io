$(document).ready(() => {

    //Makes the arrow shine like hell
    let arrowAnime = anime({
        targets: '.arrowContainer .arrow-path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function (el, i) { return i * 250 },
        direction: 'alternate',
        opacity: 1,
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
        .on('enter', function (e) {

            //Makes the arrow disapear when scrolled
            
            anime({
                targets: '.arrow-path',
                d: [
                    {value: "M91.7987 168L183.597 0H162.799L91.7987 137L17.7987 0H0L91.7987 168Z"},
                    {value: "M91.7987 0L183.597 159H162.799L91.7987 36L17.7987 159H0L91.7987 0Z"},
                ],
                duration: 1000,
                autoplay: true,
                easing: 'linear',
                elasticity: 500,
            });
            anime({
                targets: '.arrowContainer',
                translateY: 150,
            })
        })
        .on('leave', function (e) {
            anime({
                targets: '.arrow-path',
                d: [
                    {value: "M91.7987 0L183.597 159H162.799L91.7987 36L17.7987 159H0L91.7987 0Z"},
                    {value: "M91.7987 168L183.597 0H162.799L91.7987 137L17.7987 0H0L91.7987 168Z"},
                ],
                
                duration: 1000,
                autoplay: true,
                easing: 'linear',
                elasticity: 500,
            });
            anime({
                targets: '.arrowContainer',
                translateY: -150,
            })

        })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#trigger2",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50 // move trigger to center of element
    })
        // trigger animation by adding a css class
        .on('enter', function (e) {
            console.log("ici")
            //Makes the arrow disapear when scrolled
            anime({
                targets: '#animate2',
                opacity: 1,
                duration: 1000,
                translateX: 0,
            })

        })
        .on('leave', function (e) {
            arrowAnime.play()
            anime({
                targets: '#animate2',
                opacity: 0,
                duration: 1000,
                translateX: 250,
            })


        })
        .addTo(controller);
})

