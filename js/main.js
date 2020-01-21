// variables

let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-left'),
    arrowLeft = document.querySelector('#arrow-right'),
    current = 0;

// func clear all images

function reset() {
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//initialize slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
}

//show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}

//show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowRight.addEventListener('click', function() {
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

// left arrow click
arrowLeft.addEventListener('click',function() {
    if(current === sliderImages.length -1) {
        current = -1;
    }
    slideRight();
});
   
//run

startSlide();