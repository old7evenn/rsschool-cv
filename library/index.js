let slideIndex = 1;
showSlide(slideIndex);

const currentSlide = (n) => showSlide(slideIndex = n)

function showSlide(n) {
  const slides = document.getElementsByClassName("slider fade")
  const dots = document.getElementsByClassName("dot")

  if (n > slides.length) slideIndex = 1

  if (n < 1)  slideIndex = slides.length 


  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}


const autoSlide = () =>{
  slideIndex++;
  showSlide(slideIndex);
}

setInterval(autoSlide, 5000);


// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//   button.addEventListener('click', function() {
//     if (button.classList.contains('btn--active')) {
//       button.classList.remove('btn--active');
//     } else {
//       buttons.forEach(btn => {
//         btn.classList.remove('btn--active');
//         btn.textContent = 'Buy'
//       });
//       button.classList.add('btn--active');
//     }
//     (button.textContent === 'Buy') ? button.textContent = 'Own' : button.textContent = 'Buy';
//   });
// });

console.log('1.Вёрстка валидная +10\n2.Вёрстка семантическая +16\n3.Вёрстка соответствует макету +54\n4.Общие требования к верстке +20');

