const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})

// Close the Modal

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		closeModal();
    closeModal2();
    closeModal3();
    closeModal4();
	}
});

document.addEventListener('keydown', function(event){
	if(event.key === "ArrowRight"){
    plusSlides(1)
    plusSlides2(1)
    plusSlides3(1)
	}
});

document.addEventListener('keydown', function(event){
	if(event.key === "ArrowLeft"){
    plusSlides(-1)
    plusSlides2(-1)
    plusSlides3(-1)
	}
});


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("email").textContent
  console.log(copyText)

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}










// Open the Modal UM /////////////////////
function openModal() {
  document.getElementById("myModal").style.display = "block";
  document.getElementById("slide1").style.display = "block";
  document.getElementById("slide1").id = null;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}





// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


//////////////////////////////////////////////////////






// Open the Modal DOIS /////////////////////
function openModal2() {
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("slide2").style.display = "block";
  // document.getElementById("slide2").id = null;
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

let slideIndex2 = 1;

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}




// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides2");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
  captionText.innerHTML = dots[slideIndex2-1].alt;
}

//////////////////////////////////////////////////////






// Open the Modal TRES /////////////////////
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
  document.getElementById("slide3").style.display = "block";
  // document.getElementById("slide3").id = null;
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

let slideIndex3 = 1;

// Next/previous controls
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}


// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides3");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3-1].style.display = "block";
  dots[slideIndex3-1].className += " active";
  captionText.innerHTML = dots[slideIndex3-1].alt;
}





// Open the Modal QUATRO /////////////////////
function openModal4() {
  document.getElementById("myModal4").style.display = "block";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}




