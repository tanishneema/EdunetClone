let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = function () {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Nisha Rani',
    position: '',
    text:
      "She thinks not only of what a career in tech can do for her, but what skills she can use to make an impact on her community, country, and world. Once she finds what her passion is, a woman in tech thinks about what she can do to make it better for others. Let us share with you some of the stories that",
  },
  {
    name: 'Sharath Kumar',
    position: 'NSTI, Bangalore',
    text:
      'In India, farmers are mostly poor due to the low productivity (yield per hectare) of all major crops. Take paddy and wheat. Yield from a paddy field in India is 3,500-kg per hectare, while China and Bangladesh have these figures to boot 7,000-kg and 4,500-kg, respectively. The produce from Australia and the US are nearly',
  },
  {
    name: 'Heena Kaushar',
    position: 'NSTI Indore',
    text:
      "Agriculture is the primary source of livelihood for about 58% of India’s population. Indian farmers are mostly small or marginal, wherein 85% of them own less than one hectare of land.",
  },
  {
    name: 'Abhirami K',
    position: 'NSTI Bangalore',
    text:
      "The imposition of lockdown brings massive lifestyle change among the people, and the police struggle to find out ways of implementing such changes.  To restrict the spread of the virus across the country police have taken steps to enforce lockdown properly from the first day of the lockdown since 24th March 2020.",
  },
  {
    name: 'Deepak Kumar Singh',
    position: 'NSTI Mumbai',
    text:
      "In March 2020, our Government declared a nationwide lockdown as a response to the COVID-19 pandemic. Indian migrant workers during these testing times have faced multiple hardships. With factories and workplaces shut down millions of workers were forced to deal with the loss of income, food shortages, and uncertainty about their future.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, text } = testimonials[idx]

  testimonial.innerHTML = text
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setActiveSlide()
})

setBgToBody()

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}