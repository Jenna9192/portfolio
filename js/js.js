let slideshows = document.querySelectorAll(".slideshow_container");
let slideIndexes = new Array(slideshows.length).fill(0);

function showSlides(slideshowIndex) {
    let slides = slideshows[slideshowIndex].getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexes[slideshowIndex]++;
    if (slideIndexes[slideshowIndex] > slides.length) { slideIndexes[slideshowIndex] = 1; }

    slides[slideIndexes[slideshowIndex] - 1].style.display = "block";
}

// Initialize each slideshow
slideshows.forEach((_, i) => {
    showSlides(i);
    setInterval(() => showSlides(i), 2500); // Auto-slide every 3 seconds
});

// Manual navigation
function changeSlide(n, slideshowIndex) {
    let slides = slideshows[slideshowIndex].getElementsByClassName("slide");

    slideIndexes[slideshowIndex] += n;
    if (slideIndexes[slideshowIndex] > slides.length) { slideIndexes[slideshowIndex] = 1; }
    if (slideIndexes[slideshowIndex] < 1) { slideIndexes[slideshowIndex] = slides.length; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndexes[slideshowIndex] - 1].style.display = "block";
}