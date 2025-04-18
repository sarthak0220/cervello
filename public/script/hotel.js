//responsive navigation menu
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuBtn.classList.toggle('active');  // Ensure the button toggles its active state
});

//image slider 

const slides = document.getElementById('slides');
  const indicators = document.getElementById('indicators');
  const images = document.querySelectorAll('.slides img');
  const totalSlides = images.length;
  let currentIndex = 0;

  function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateIndicators(index);
  }

  function updateIndicators(index) {
    const dots = document.querySelectorAll('.indicator');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function createIndicators() {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('indicator');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider(currentIndex);
      });
      indicators.appendChild(dot);
    }
  }

  document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
  });

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider(currentIndex);
  });

  let autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
  }, 5000);

  createIndicators();