import { scroll } from './index.js';
import { gsap } from 'gsap';
import SplitType from "split-type";

scroll.on('call', () => {
    let animationText = new SplitType('.animate');

    console.log(animationText)

    let animateSection = document.querySelector('.animate');

    console.log("Animation Section");
    console.log(animateSection)

    gsap.to(animationText.chars, {
        y:0,
        stagger: 0.05,
        duration: 0.1,
        opacity: 100,
        onStart: function () {
            console.log("Animation Finished");
            //animateSection.classList.remove('animate-txt');
            animateSection.classList.remove('animate');

            console.log(animateSection);
        },
    })

})


