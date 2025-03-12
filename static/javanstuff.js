let index = 0;
let isAutoSliding = true;
const slideDuration = 350; 
// Carosel do not touch!
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
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

        setTimeout(() => {
            if (index >= totalSlides) {
                carousel.style.transition = 'none';
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

// Form stuf
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var formData = new FormData(this);
    
    console.log('Form data being sent:');
    formData.forEach(function(value, key) {
        console.log(key + ": " + value);
    });

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

//Linking and boxes
document.addEventListener("DOMContentLoaded", function () {
    const statesLink = document.getElementById("States");

    const menu = document.createElement("div");
    menu.id = "statesMenu";
    Object.assign(menu.style, {
        display: "none",
        position: "fixed",
        top: "25%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff",
        border: "1px solid #ccc",
        padding: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        zIndex: "1000",
        width: "1000px",
    });

    const statesContainer = document.createElement("div");
    statesContainer.id ="State1"
    Object.assign(statesContainer.style, {
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "8px",
        padding: "10px",
        fontsize: "14px",
    });

    // Linking and stuf
    const stateLinks = [
        { name: "Alabama", link: "how-to-open-a-dispensary-in-alabama.html" },
        { name: "Alaska", link: "how-to-open-a-dispensary-in-alaska.html" },
        { name: "Arizona", link: "how-to-open-a-dispensary-in-arizona.html" },
        { name: "Arkansas", link: "how-to-open-a-dispensary-in-arkansas.html" },
        { name: "California", link: "how-to-open-a-dispensary-in-california.html" },
        { name: "Colorado", link: "how-to-open-a-dispensary-in-colorado.html" },
        { name: "Connecticut", link: "how-to-open-a-dispensary-in-connecticut.html" },
        //{ name: "Delaware", link: "BuddingEarly.html" },
        { name: "Florida", link: "how-to-open-a-dispensary-in-florida.html" },
        { name: "Georgia", link: "how-to-open-a-dispensary-in-georgia.html" },
        { name: "Hawaii", link: "how-to-open-a-dispensary-in-hawaii.html" },
        { name: "Idaho", link: "how-to-open-a-dispensary-in-idaho.html" },
        { name: "Illinois", link: "how-to-open-a-dispensary-in-illinois.html" },
        { name: "Indiana", link: "how-to-open-a-dispensary-in-indiana.html" },
        // { name: "Iowa", link: "BuddingEarly.html" },
        // { name: "Kansas", link: "BuddingEarly.html" },
        // { name: "Kentucky", link: "BuddingEarly.html" },
        // { name: "Louisiana", link: "BuddingEarly.html" },
        // { name: "Maine", link: "BuddingEarly.html" },
        // { name: "Maryland", link: "BuddingEarly.html" },
        // { name: "Massachusetts", link: "BuddingEarly.html" },
        // { name: "Michigan", link: "BuddingEarly.html" },
        // { name: "Minnesota", link: "BuddingEarly.html" },
        // { name: "Mississippi", link: "BuddingEarly.html" },
        // { name: "Missouri", link: "BuddingEarly.html" },
        // { name: "Montana", link: "BuddingEarly.html" },
        // { name: "Nebraska", link: "BuddingEarly.html" },
        // { name: "Nevada", link: "BuddingEarly.html" },
        // { name: "New Hampshire", link: "BuddingEarly.html" },
        { name: "New Jersey", link: "how-to-open-a-dispensary-in-New-Jersey.html" },
        // { name: "New Mexico", link: "BuddingEarly.html" },
        { name: "New York", link: "how-to-open-a-dispensary-in-new-york.html" },
        // { name: "North Carolina", link: "BuddingEarly.html" },
        // { name: "North Dakota", link: "BuddingEarly.html" },
        { name: "Ohio", link: "how-to-open-a-dispensary-in-ohio.html" },
        // { name: "Oklahoma", link: "BuddingEarly.html" },
        // { name: "Oregon", link: "BuddingEarly.html" },
        // { name: "Pennsylvania", link: "BuddingEarly.html" },
        // { name: "Rhode Island", link: "BuddingEarly.html" },
        // { name: "South Carolina", link: "BuddingEarly.html" },
        // { name: "South Dakota", link: "BuddingEarly.html" },
        // { name: "Tennessee", link: "BuddingEarly.html" },
        // { name: "Texas", link: "BuddingEarly.html" },
        // { name: "Utah", link: "BuddingEarly.html" },
        // { name: "Vermont", link: "BuddingEarly.html" },
        // { name: "Virginia", link: "BuddingEarly.html" },
        // { name: "Washington", link: "BuddingEarly.html" },
        // { name: "West Virginia", link: "BuddingEarly.html" },
        // { name: "Wisconsin", link: "BuddingEarly.html" },
        // { name: "Wyoming", link: "BuddingEarly.html" },
        // { name: "Washington, D.C.", link: "BuddingEarly.html" },
        // { name: "Virgin Islands", link: "BuddingEarly.html" }
    ];

    stateLinks.forEach(state => {
        const menubounds = document.createElement("div");
        menubounds.id = "menubounds";
        menubounds.textContent = state.name;
        Object.assign(menubounds.style, {
            padding: "8px",
            cursor: "pointer",
            transition: "background 0.3s",
            textAlign: "center",
            borderRadius: "4px"
        });

        menubounds.addEventListener("mouseover", () => menubounds.style.background = "#f0f0f0");
        menubounds.addEventListener("mouseout", () => menubounds.style.background = "transparent");
        menubounds.addEventListener("click", () => {
            window.location.href = state.link;
        });

        statesContainer.appendChild(menubounds);
    });

    menu.appendChild(statesContainer);
    document.body.appendChild(menu);

    statesLink.addEventListener("mouseenter", () => {
        menu.style.display = "block";
    });

    menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
    });
    document.addEventListener("click", (event) => {
        if (menu.style.display === "block" && event.target !== statesLink && !menu.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});


//dynamic footer position cause it doesnt like iphones
function positionFooter() {
    const getStarted = document.getElementById('getstarted');
    const footer = document.querySelector('.Footer');
    if (getStarted && footer) {
        const offset = getStarted.offsetTop + getStarted.offsetHeight * 10.15;
        footer.style.top = offset + 'px !important';
    }
}

document.addEventListener("DOMContentLoaded", positionFooter);
window.addEventListener("resize", positionFooter);
