const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click',nextSlide);
prevBtn.addEventListener('click',prevSlide);

function nextSlide(){
    container.style.backgroundImage = `url(img/bcg-${counter})`
    counter++;

}

function prevSlide(){
    container.style.backgroundImage = `url(img/bcg-${counter})`
    counter--;
}