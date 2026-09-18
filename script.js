
var iconsList = ["</>", "💻", "📱", "📊", "⚙️"];
var currentIconIndex = 0;

var iconElement = document.getElementById("slider-icon");
var monitorElement = document.querySelector(".monitor-screen");

function changeMonitorIcon() {
    if (!iconElement) return;

    iconElement.style.opacity = "0";

    setTimeout(function () {
        currentIconIndex = (currentIconIndex + 1) % iconsList.length;
        iconElement.textContent = iconsList[currentIconIndex];
        iconElement.style.opacity = "1";
    }, 250);
}


setInterval(changeMonitorIcon, 2500);


if (monitorElement) {
    monitorElement.addEventListener("click", changeMonitorIcon);
    monitorElement.addEventListener("mouseenter", changeMonitorIcon);
}


var faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        var parentItem = question.parentElement;

        
        document.querySelectorAll(".faq-item").forEach(function (item) {
            if (item !== parentItem) {
                item.classList.remove("active");
                var toggleSymbol = item.querySelector(".faq-toggle");
                if (toggleSymbol) toggleSymbol.textContent = "+";
            }
        });

      
        parentItem.classList.toggle("active");
        var currentToggle = parentItem.querySelector(".faq-toggle");
        if (currentToggle) {
            currentToggle.textContent = parentItem.classList.contains("active") ? "-" : "+";
        }
    });
});


var currentSlideIndex = 0;
var testimonialSlides = document.querySelectorAll(".testimonial-slide");
var sliderDots = document.querySelectorAll(".dot");

function switchSlide(slideIndex) {
    if (!testimonialSlides.length) return;

    testimonialSlides.forEach(function (slide) {
        slide.classList.remove("active");
    });

    sliderDots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    currentSlideIndex = slideIndex;
    if (testimonialSlides[currentSlideIndex]) {
        testimonialSlides[currentSlideIndex].classList.add("active");
    }
    if (sliderDots[currentSlideIndex]) {
        sliderDots[currentSlideIndex].classList.add("active");
    }
}


sliderDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        switchSlide(index);
    });
});


setInterval(function () {
    if (testimonialSlides.length > 0) {
        var nextSlide = (currentSlideIndex + 1) % testimonialSlides.length;
        switchSlide(nextSlide);
    }
}, 5000);