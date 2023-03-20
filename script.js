'use strict';
console.log('hello')



let btn = document.querySelector('.converter')
let poljeHRK = document.querySelector('.valutaHRK')
let poljeE = document.querySelector('.valuta€')
let rezultat = document.querySelector('.prikaz')
let rezultat1 = document.querySelector('.prikaz1')
let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')
let btn3 = document.querySelector('.btn-3')
let box1 = document.querySelector('.history-text-box--1')
let box2 = document.querySelector('.history-text-box--2')
let box3 = document.querySelector('.history-text-box--3')

const pretvorbaValute = function (e) {
    e.preventDefault()

    if (poljeHRK.value > poljeE.value) {
        rezultat.innerText = ((poljeHRK.value / 7.5).toFixed(2))
        poljeE.value = ''; s

    } else {
        rezultat1.innerText = ((poljeE.value * 7.5).toFixed(2))
    }


}


//  btn.addEventListener('click', pretvorbaValute);

const move1 = function (e) {
    box1.classList.remove('hidden')
    box2.classList.add('hidden')
    box3.classList.add('hidden')
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')




    console.log('1')
}
const move2 = function (e) {
    box1.classList.add('hidden')
    box2.classList.remove('hidden')
    box3.classList.add('hidden')
    btn1.classList.remove('active')
    btn2.classList.add('active')
    btn3.classList.remove('active')


}
const move3 = function (e) {
    box3.classList.remove('hidden')
    box1.classList.add('hidden')
    box2.classList.add('hidden')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.add('active')
    console.log('3')
}


btn1.addEventListener('click', move1)
btn2.addEventListener('click', move2)
btn3.addEventListener('click', move3)




const convert = document.getElementById("convert");
const result = document.getElementById("result");
const result1 = document.getElementById("result1");
const from = document.getElementById("from");
const to = document.getElementById("to");
const amount = document.getElementById("amount");
convert.addEventListener("click", function () {
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.innerHTML = `${amt} ${fromCurrency} vrijedi ${total} ${toCurrency}`;
            result1.innerHTML = `Trenutni tečaj je ${rate} ${fromCurrency}  ${toCurrency} `;

        });

});
//slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')
let curSlide = 0;
const maxSlide = slides.length;


const createDots = function () {
    slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML('beforeend',
            `<button class="dots__dot" data-slide="${i}"></button>`
        );
    });
}
createDots()

const activateDot = function (slide) {
    document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
};
activateDot(0)


const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}
goToSlide(0);


//next slide
const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    goToSlide(curSlide)
    activateDot(curSlide)
}

const prevSlide = function () {
    if (curSlide === 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide)
    activateDot(curSlide)
}


btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
})

dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide)
        activateDot(slide)
    }
})


const section1 = document.querySelector('.section-1')
const heroBtn = document.querySelector('.hero-btn')
heroBtn.addEventListener('click', function () {
    section1.scrollIntoView({ behavior: "smooth" })

})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')

        }
    })
})
const hiddenElements = document.querySelectorAll('.hiddena');
hiddenElements.forEach((el) => observer.observe(el));

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
})