"use strict";

// const alert = document
//   .querySelector(".alert")
//   .addEventListener("click", function () {
//     console.log("pass");
//     const demo = document.querySelector(".demo");
//     demo.style.display = "block";
//     // demo.fadeout = "200";
//   });

//

$(".alert").click(function () {
  console.log("pass");
  $(".demo").show();
  $(".demo").fadeOut(5000);
  // $(".demo").fadeOut(22500);
});
