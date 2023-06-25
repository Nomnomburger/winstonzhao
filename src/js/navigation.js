window.navSelect = navSelect;

function navSelect() {
  var togglerOpen=document.getElementById("menu-open");
  var togglerClose=document.getElementById("menu-close");
  var navbar=document.getElementById("nav-overlay");
  var html=document.getElementById("html");

  console.log("menu clicked")

  if(togglerOpen.classList.contains('active')){
    togglerOpen.classList.remove('active');

    togglerClose.classList.add('active');

    navbar.style.bottom = '100%';

    html.classList.remove('noscroll');
  }
  else{
    togglerOpen.classList.add('active');

    togglerClose.classList.remove('active');

    navbar.style.bottom = '0';

    html.classList.add('noscroll');
  }
}
