 // responsive navigation menu
 const menuBtn = document.querySelector('.menu-btn');
 const navigation = document.querySelector('.navigation');

 menuBtn.addEventListener('click', () => {
     navigation.classList.toggle('active');
     menuBtn.classList.toggle('active');  // Toggle active state of button
 });

 // video slider navigation
 const btns = document.querySelectorAll('.nav-btn');
 const slides = document.querySelectorAll('.video-slide');
 const contents = document.querySelectorAll('.content');

 let currentSlide = 0;
 let slideInterval;

 const sliderNav = function(index) {
     btns.forEach((btn) => btn.classList.remove('active'));
     slides.forEach((slide) => slide.classList.remove('active'));
     contents.forEach((content) => content.classList.remove('active'));

     btns[index].classList.add('active');
     slides[index].classList.add('active');
     contents[index].classList.add('active');

     currentSlide = index;
 };

 btns.forEach((btn, i) => {
     btn.addEventListener('click', () => {
         sliderNav(i);
         resetAutoSlide(); // Restart the interval on manual navigation
     });
 });

 function autoSlide() {
     currentSlide = (currentSlide + 1) % slides.length;
     sliderNav(currentSlide);
 }

 function resetAutoSlide() {
     clearInterval(slideInterval);
     slideInterval = setInterval(autoSlide, 4500); 
 }

 // Start automatic slide
 slideInterval = setInterval(autoSlide, 4500);