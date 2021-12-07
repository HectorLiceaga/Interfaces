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