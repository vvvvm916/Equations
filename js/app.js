let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function renderMath() {
    if (typeof renderMathInElement === 'function') {
        renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }
}

function changeSlide(direction) {
    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    slides[currentSlideIndex].classList.add('active');
    renderMath();
}

// Revelación exclusiva: un solo paso a la vez dentro de la diapositiva actual
function toggleExclusiveStep(id) {
    const target = document.getElementById(id);
    if (!target) return;

    const currentSlide = slides[currentSlideIndex];
    const steps = currentSlide.querySelectorAll('.step-box');

    const isHidden = target.classList.contains('hidden');
    steps.forEach(step => step.classList.add('hidden'));

    if (isHidden) {
        target.classList.remove('hidden');
    }

    renderMath();
}
