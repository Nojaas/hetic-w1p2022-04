// Burger--------------------------------------------------------
var opener = document.getElementById('burger');
var x = document.getElementById('exit');
var y = document.getElementById('exit2');
var z = document.getElementById('exit3');
var blur = document.getElementById('page')

var menu = document.getElementById('menu');

opener.addEventListener('click', function () {
    menu.classList.toggle('ap');
    x.classList.toggle('cruce');
    y.classList.toggle('cruce2');
    z.classList.toggle('cruce3');


})
// ----------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});