let index = 0;
let isAutoSliding = true;
const slideDuration = 350; // Animation time in ms

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    // Clone first and last few slides for smooth infinite effect
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const thirdClone = slides[2].cloneNode(true);
    const lastClone = slides[totalSlides - 1].cloneNode(true);
    
    carousel.appendChild(firstClone);
    carousel.appendChild(secondClone);
    carousel.appendChild(thirdClone);
    carousel.insertBefore(lastClone, slides[0]);

    function moveSlide(step) {
        index += step;

        carousel.style.transition = 'transform 0.3s ease-in-out';
        carousel.style.transform = `translateX(-${index * 25}%)`;

        // Handle infinite looping
        setTimeout(() => {
            if (index >= totalSlides) {
                carousel.style.transition = 'none'; // Remove transition to prevent jump
                index = 0;
                carousel.style.transform = `translateX(-${index * 25}%)`;
            } else if (index < 0) {
                carousel.style.transition = 'none';
                index = totalSlides - 1;
                carousel.style.transform = `translateX(-${index * 25}%)`;
            }
        }, slideDuration);
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', function () {
            moveSlide(1);
            isAutoSliding = false;
        });

        prevButton.addEventListener('click', function () {
            moveSlide(-1);
            isAutoSliding = false;
        });
    }

    function autoSlide() {
        if (isAutoSliding) {
            moveSlide(1);
        }
        setTimeout(autoSlide, 2000);
    }

    setTimeout(autoSlide, 2000);
});


// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Create a FormData object to hold form values
    var formData = new FormData(this);
    
    // Log FormData for debugging
    console.log('Form data being sent:');
    formData.forEach(function(value, key) {
        console.log(key + ": " + value);
    });

    // Use Fetch API to send data to Zapier webhook
    fetch('https://hooks.zapier.com/hooks/catch/21636280/2aawbx7/', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        console.log('Response from Zapier:', response);
        return response.json();
    })
    .then(data => {
        console.log('Zapier response data:', data);
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});

document.getElementById('menu-image').addEventListener('click', function() {
    console.log("GotIt")
    const headerMenu = document.getElementById('HeaderMenu');
    headerMenu.classList.toggle('open');
});
