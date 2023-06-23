const nav = document.querySelector("nav");
const navBtn = document.querySelector(".nav-buttons");
const title = document.querySelector(".initials");
const navLogo = document.querySelector(".nav-logo");

const titleOptions = {};

setTimeout(() => {
  const titleObserver = new IntersectionObserver(
      function(entries, titleObserver) {
        entries.forEach(entry => {
          //console.log(entry.target);

          if (!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
            navBtn.classList.add("nav-scrolled-btn");
            navLogo.classList.add("nav-scrolled-logo");
          }
          else {
            nav.classList.remove("nav-scrolled");
            navBtn.classList.remove("nav-scrolled-btn");
            navLogo.classList.remove("nav-scrolled-logo");
          }


        })
      },
      titleOptions);

  titleObserver.observe(title);
} , 2600);

