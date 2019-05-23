// const parallax = document.getElementById('parallax');

// window.addEventListener('scroll', function () {
//     let offset = window.pageYOffset;
//     // console.log(offset);
//     // console.log('offset * 0.7 = ' + offset * 0.7);
//     parallax.style.backgroundPositionY = offset * 0.85 + 'px';
// });

// Alternative for multiple images
const parallax = document.querySelectorAll(".parallax");
const horParallax = document.getElementById('fixed');
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    console.log(offset);
    if(offset > 80) {
        // horParallax.style.left = offset + 'px';
        // horParallax.style.transform = `translate(${offset}px, 0)`;
        // horParallax.style.opacity = 1;
        horParallax.classList.add('active');
    } else {
        // horParallax.style.transform = 'translate(-100%, 0)';
        // horParallax.style.opacity = 0;
        horParallax.classList.remove('active');
    }

    // horParallax.style.left = offset + 'px';

    parallax.forEach(function (prllx, i) {
        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
    })
})