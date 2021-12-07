let slideImg = document.querySelectorAll('.images .slide');
let seconds = 3000;
let counter = 0;

slideImg[counter].style.display = 'block';

setInterval(nextImg, seconds);

function nextImg(){
    slideImg[counter].style.display = 'none';
    counter = (counter + 1) % slideImg.length;
    slideImg[counter].style.display = 'block';
}