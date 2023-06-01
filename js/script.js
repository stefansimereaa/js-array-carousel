// Recupero elementi dal DOM

// Buttons
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Gallery e array
const gallery = document.querySelector('.gallery');
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// Index immagini
let currentIndex = 0;

// Html per le immagini
let imageElements = '';

// Inserimento immagini con tag img
for(let i = 0; i < images.length; i++){
    imageElements += `<img src="${images[i]}" alt="ImageCarousel ${i + 1}">`;
}

// Inserisco immagini nel DOM
gallery.innerHTML = imageElements;

prevButton.addEventListener('click', function(){
    if(currentIndex === 0) return;

    const currentImage = gallery.querySelector(`img[src="${images[currentIndex]}"]`);
    currentImage.classList.remove('active');
    
    currentIndex--;
    
    const newImage = gallery.querySelector(`img[src="${images[currentIndex]}"]`);
    newImage.classList.add('active');
});

nextButton.addEventListener('click', function(){
    if(currentIndex === images.length - 1) return;
    
    const currentImage = gallery.querySelector(`img[src="${images[currentIndex]}"]`);
    currentImage.classList.remove('active');
    
    currentIndex++;
    
    const newImage = gallery.querySelector(`img[src="${images[currentIndex]}"]`);
    newImage.classList.add('active');
});
