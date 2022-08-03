let aboutFigures = document.querySelector('.about-figures'),
    headerFigures = document.querySelector('.bg-header'),
    contactUsFigures = document.querySelector('.contact-us__figures'),
    mainImage = document.querySelector('.main-img'),
    contactImage = document.querySelector('.contact-img');

window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth,
        y = e.clientY / window.innerHeight;
    aboutFigures.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    mainImage.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    headerFigures.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    contactUsFigures.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    contactImage.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});

