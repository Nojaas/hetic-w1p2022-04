var opener = document.getElementById('burger');
var x = document.getElementById('exit');
var y = document.getElementById('exit2');
var z = document.getElementById('exit3');

var menu = document.getElementById('menu');

opener.addEventListener('click', function () {
    menu.classList.toggle('ap');
    x.classList.toggle('cruce');
    y.classList.toggle('cruce2');
    z.classList.toggle('cruce3');



})
