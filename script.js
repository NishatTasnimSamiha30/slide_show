let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slideshow');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
   
}

function goNext() {
    slideIndex++;
    showSlides();
}

function goBack() {
    slideIndex--;
    showSlides();
}

// call slideshow
showSlides();
