import LocomotiveScroll from 'locomotive-scroll';
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const imagesLoaded = require("imagesloaded");

let site = document.querySelector(".site");
let scrollContainer = document.querySelector("[data-scroll-container]");
let animationText = null;

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
      reloadOnContextChange: true,

      smartphone: {
        smooth: false,
        reloadOnContextChange: true,
      },

      tablet: {
        smooth: false,
        breakpoint: 992,
        reloadOnContextChange: true,
      },
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach((section, index) => {
      let heading;
      heading = section.querySelector("span");
      console.log(heading);

      let split = new SplitType(heading);

      let animation = gsap.to(split.chars, {
        y:0,
        stagger: 0.05,
        duration: 0.1,
        opacity: 100,
      })

      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        toggleActions: "play none none none",
        animation: animation,
        markers: false,
      });

    });

  } , 100);
});



imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});

document.addEventListener('lazyloaded', function(){
  scroll.update();
});

screen.orientation.onchange = function (){
  // logs 'portrait' or 'landscape'
  console.log(screen.orientation.type.match(/\w+/)[0]);
  window.location.reload();
};

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
  let header = document.querySelectorAll(".bold-head");
  let age = document.querySelectorAll(".c-age-txt");

  age.forEach((element) => {
    element.classList.add("safari");
  });

  header.forEach((element) => {
    element.classList.add("safari");
  });
}


