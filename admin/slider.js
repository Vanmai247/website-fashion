const images = [
    "/assets/img/6d42aeca-6c41-43b0-bd86-c30f520266c8.png",
    "/assets/img/slider-2.png",
    "/assets/img/slider-3.png",
    "/assets/img/slider-4.png",
    "/assets/img/slider-5.png"
];
let current = 0;
const img = document.getElementById('hero-slider');

function nextSlide() {
    current = (current + 1) % images.length;
    img.src = images[current];
}

setInterval(nextSlide, 5000); 