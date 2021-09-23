// När man skrollar aktiveras funktionen
window.onscroll = function() {stickyNav()};

// hämta #navbar från html/css
var navbar = document.getElementById("navbar");

// hämtar positionen av navbaren
var sticky = navbar.offsetTop;

// lägger till klassen sticky på navbaren när man har skrollar till navbarens position och tar bort den när man skrollar upp igen
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}