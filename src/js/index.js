import LocomotiveScroll from 'locomotive-scroll';
import SplitType from "split-type";
import { gsap } from "gsap";

const imagesLoaded = require("imagesloaded");

let site = document.querySelector(".site");
let scrollContainer = document.querySelector("[data-scroll-container]");

export var scroll;

//let animationCount = 0;

document.fonts.ready.then(() => {
  setTimeout(() => {
    site.classList.remove("site");
    scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: false,
      getSpeed: true,
      multiplier: 0.8,

      smartphone: {
        smooth: false,
      },

      tablet: {
        smooth: false,
      },
    });
    scroll.on('call', () => {
      let animationText = new SplitType('.animate.is-inview');
      let animateSection = null;
      //console.log(animationText)

      window.matchMedia("(max-width: 768px)").matches
        ? animateSection = document.querySelector('.animate.mobile-animate-t.is-inview, .animate.animate-both.is-inview')
        : animateSection = document.querySelector('.animate.is-inview:not(.mobile-animate-t), .animate.animate-both.is-inview');

      //console.log("Animation Section");
      //console.log(animateSection);

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
  } , 100);
});



imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

document.addEventListener('lazyloaded', function(){
  scroll.update();
});

window.on('hashchange', function(e){ // listen if hashtag is being added to the URL

  location.href = location.href.replace(location.hash,"") //replace it with nothing
  console.log("bam!"); //enjoy it

});

