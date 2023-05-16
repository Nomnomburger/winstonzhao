import LocomotiveScroll from 'locomotive-scroll';
import SplitType from "split-type";
import { gsap } from "gsap";

const imagesLoaded = require("imagesloaded");

let site = document.querySelector(".site");
let scrollContainer = document.querySelector("[data-scroll-container]");

export var scroll;

//let animationCount = 0;

setTimeout(() => {
  site.classList.remove("site");
  scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    getSpeed: true,
    multiplier: 0.8,

    smartphone: {
      smooth: false,
    },

    tablet: {
      smooth: true,
    },
  });
  scroll.on('call', () => {
    let animationText = new SplitType('.animate');
    let animateSection = null;
    //console.log(animationText)

    window.matchMedia("(max-width: 768px)").matches
        ? animateSection = document.querySelector('.animate.mobile-animate-t, .animate.animate-both')
        : animateSection = document.querySelector('.animate:not(.mobile-animate-t), .animate.animate-both');

    console.log("Animation Section");
    console.log(animateSection);

    let tl= gsap.timeline();

    tl.to(animationText.chars, {
      y:0,
      stagger: 0.05,
      duration: 0.1,
      opacity: 100,
      onStart: function () {
        //console.log("Animation Finished");
        //console.log(animateSection);

        animateSection.classList.remove('animate');
        animateSection.classList.remove('animate-both');

        //animationCount++;
        //console.log(animationCount);

        //console.log(animateSection);
      },
    })


  })
} , 2000);


imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

document.addEventListener('lazyloaded', function(){
  scroll.update();
});

