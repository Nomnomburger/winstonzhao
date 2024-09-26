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

let loadingPercentage = 0;
let loading = document.getElementById('loading');
let loadingInterval = setInterval(function() {
  loadingPercentage++;
  if (loadingPercentage >= 99) {
    clearInterval(loadingInterval);
  }
  document.getElementById('loadingPercentage').innerText = loadingPercentage + '%';
}, 100);

// Show the loading indicator
loading.classList.add('show');


window.onload = function() {

  clearInterval(loadingInterval);
  document.getElementById('loadingPercentage').innerText = '100%';

  // Hide the loading indicator
  loading.classList.remove('show');

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

  } , 50);

  setTimeout(() => {
    loading.classList.add('displayNone');
  } , 1000);
};



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



/*window.onload = function() {


};

 */