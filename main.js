// const parallax = document.getElementById('parallax');

// window.addEventListener('scroll', function () {
//     let offset = window.pageYOffset;
//     // console.log(offset);
//     // console.log('offset * 0.7 = ' + offset * 0.7);
//     parallax.style.backgroundPositionY = offset * 0.85 + 'px';
// });

const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    parallax.forEach(function (prllx, i) {
        console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
    })
})