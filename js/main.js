// $('.responsive').slick({
//     dots: true,
//       prevArrow: $('.prev'),
//       nextArrow: $('.next'),
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
// });
// Simple Alert
function Coming_Soon() {
  alert("Coming Soon!");
}

// Theme Toggle
function ThemeToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Upper Left Slide
let slide1Index = 0;
const slide1Wrapper = document.getElementById("slides1");
let slides1Item = slide1Wrapper.getElementsByClassName("mySlides-left");
let dots1Item = slide1Wrapper.getElementsByClassName("WeirdAndRound");
let captionText1Item = slide1Wrapper.querySelector("text");

function currentSlideLeft(n) {
  let curr1Index = n;
  for (j = 0; j <= slides1Item.length - 1; j++) {
    slides1Item[j].style.display = "none";
    slides1Item[j].classList.remove("show");
    dots1Item[j].classList.remove("active");
  }

  console.log("curr index", n);
  if (n > slides1Item.length - 1) {
    curr1Index = 0;
  } else if (n < 0) {
    curr1Index = slides1Item.length - 1;
  }

  slides1Item[curr1Index].style.display = "block";
  slides1Item[curr1Index].classList.add("show");
  dots1Item[curr1Index].classList.add("active");
  // captionText1Item.innerHTML = dots1Item[curr1Index].alt;
  slide1Index = curr1Index;
}
function nextSlides(n) {
  if (n === -1) {
    currentSlideLeft(slide1Index - 1);
  } else {
    currentSlideLeft(slide1Index + 1);
  }
}
//

// bottom slide

let slide2Index = 0;
const slides2Wrapper = document.getElementById("slides2");
let slides2Item = slides2Wrapper.getElementsByClassName("mySlides");
let dots2Item = slides2Wrapper.getElementsByClassName("demo");
let captionText2Item = slides2Wrapper.querySelector(".captionHolder");

function showSlides(n) {
  let currIndex = n;
  for (i = 0; i <= slides2Item.length - 1; i++) {
    slides2Item[i].style.display = "none";
    dots2Item[i].classList.remove("active");
  }

  console.log("curr index", n);
  if (n > slides2Item.length - 1) {
    currIndex = 0;
  } else if (n < 0) {
    currIndex = slides2Item.length - 1;
  }

  slides2Item[currIndex].style.display = "block";
  dots2Item[currIndex].classList.add("active");
  captionText2Item.innerHTML = dots2Item[currIndex].alt;
  slide2Index = currIndex;
}

function plusSlides(n) {
  if (n === -1) {
    showSlides(slide2Index - 1);
  } else {
    showSlides(slide2Index + 1);
  }
}

window.onload = function () {
  showSlides(0);
  currentSlideLeft(0);
};
