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

document.addEventListener('DOMContentLoaded', function () {
    var elements = document.getElementsByClassName("draggable");

    for (var i = 0; i < elements.length; i++) {
        dragElement(elements[i]);
    }
});

function dragElement(elt) {
    var curr_x = 0, curr_y = 0, old_x = 0, old_y = 0;
    elt.onmousedown = elementGrab;

    function elementGrab(e) {
        e.preventDefault();
        // get the element's current position (where clicked)
        curr_x = e.clientX;
        curr_y = e.clientY;

        // move the element when clicked, held, and dragged
        document.onmousemove = elementDrag;
        
        // let go of the element when not clicked
        document.onmouseup = elementRelease;
    }

    function elementDrag(e) {
        e.preventDefault();
        // calculate element's new position
        old_x = curr_x - e.clientX;
        old_y = curr_y - e.clientY;
        curr_x = e.clientX;
        curr_y = e.clientY;
        // move the element to new position
        elt.style.left = (elt.offsetLeft - old_x) + "px";
        elt.style.top = (elt.offsetTop - old_y) + "px";
    }

    function elementRelease() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}