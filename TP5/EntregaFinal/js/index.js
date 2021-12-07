'use strict';

window.onload = function(){
    setTimeout(change, 1500);
    }

    function change(){
        var loader = document.getElementById("loader");
    loader.classList.toggle('ocult');
    var wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('ocult');
    }


var cardRomero = document.getElementById('cardRomero');
var cardJackson = document.getElementById('cardJackson');
var cardPersonas = document.querySelectorAll(".person");
var cardApar = document.getElementById('cardApar');
var cardStud = document.getElementById('cardStud');
var personas = document.getElementById('personas');
var instituciones = document.getElementById('instituciones');
var empresas = document.getElementById('empresas');

personas.addEventListener('click', changeCardP);
instituciones.addEventListener('click', changeCardI);
empresas.addEventListener('click', changeCardE);

function changeCardP(){
    cardPersonas.forEach(element => {
        element.style.display = 'block';
    });
    cardApar.style.display = 'none';
    cardStud.style.display = 'none';
    personas.classList.add('header_brooks');
    instituciones.classList.remove('header_brooks');
    empresas.classList.remove('header_brooks');
}

function changeCardI(){
    cardPersonas.forEach(element => {
        element.style.display = 'none';
    });
    cardApar.style.display = 'block';
    cardStud.style.display = 'none';
    personas.classList.remove('header_brooks');
    instituciones.classList.add('header_brooks');
    empresas.classList.remove('header_brooks');
}

function changeCardE(){
    cardPersonas.forEach(element => {
        element.style.display = 'none';
    });
    cardApar.style.display = 'none';
    cardStud.style.display = 'block';
    personas.classList.remove('header_brooks');
    instituciones.classList.remove('header_brooks');
    empresas.classList.add('header_brooks');
}
