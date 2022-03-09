"use strict";

// create references to the modal...
const modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
const images = document.getElementsByClassName("myImages");
// the image in the modal
const modalImgage = document.getElementById("image01");
// and the caption in the modal
const captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  const img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (event) {
    modal.style.display = "block";
    modalImgage.src = this.src;
    captionText.textContent = this.alt;
  };
}

const span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    span.onclick();
});
