/* Variables */

const slide = document.querySelector(".slider-slide");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".previous");
let currentImageIndex = 0;
const slideCounter = document.getElementById("slide-counter");

let images = [
  "assets/images/coffee1.jpg",
  "assets/images/coffee2.jpg",
  "assets/images/coffee3.jpg",
];

function setActiveSlide(index) {
  slide.src = images[index];
}

setActiveSlide(currentImageIndex);

function next() {
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  setActiveSlide(currentImageIndex);
}
function prev() {
  if (currentImageIndex == 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex--;
  }
  setActiveSlide(currentImageIndex);
}

function updateSlideCounter(seconds) {
  slideCounter.textContent = seconds;
}

btnNext.addEventListener("click", function () {
  clearTimeout(autoSlideTimeout);
  next();
  setAutoSlide();
});

btnPrev.addEventListener("click", function () {
  clearTimeout(autoSlideTimeout);
  prev();
  setAutoSlide();
});

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    clearTimeout(autoSlideTimeout);
    next();
    setAutoSlide();
  } else if (event.key == "ArrowLeft") {
    clearTimeout(autoSlideTimeout);
    prev();
    setAutoSlide();
  }
});

/* setInterval(() => {
    next()
}, 3000); */

let autoSlideTimeout;

/* function setAutoSlide() {
  autoSlideTimeout = setTimeout(function () {
    next();
    setAutoSlide();
  }, 3000);
} */

function setAutoSlide() {
  let seconds = 3;

  function updateCounter() {
    if (seconds <= 0) {
      next();
      seconds = 3;
    }

    updateSlideCounter(seconds);
    seconds--;

    autoSlideTimeout = setTimeout(updateCounter, 1000);
  }

  updateCounter();
}

setAutoSlide();
