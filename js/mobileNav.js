"use strict";

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("myLinksFooter");
  if (x.style.display && y.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
    document.querySelector(".topnav").style.borderBottom = "none";
  } else {
    x.style.display = "block";
    y.style.display = "block";
    document.querySelector(".topnav").style.borderBottom = "solid 1px black";
  }
}
