let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let m3 = document.getElementById('m3');
let m4 = document.getElementById('m4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    stars.style.transform = `translateX(${value * 0.25}px)`;
    moon.style.transform = `translateY(${value * 1.05}px)`;
    m3.style.transform = `translateY(${value * 0.4}px)`;
    m4.style.transform = `translateY(${value * 0.3}px)`;
    river.style.transform = `translateY(${value * 0.1}px)`;
    boat.style.transform = `translate(${value * 1}px, ${value * 0.1}px)`;


});