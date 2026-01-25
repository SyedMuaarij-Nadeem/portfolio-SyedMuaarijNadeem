// Toggling Skill Tabs

const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills-active');
        })

        target.classList.add('skills-active');

        tabs.forEach(tab => {
            tab.classList.remove('skills-active');
        })

        tab.classList.add('skills-active');
    })
})

// Typing Animation
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('.typing', {
        strings: ["Software Engineer", "Flutter Developer", "Full Stack Developer", "UI/UX Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

//Mix it up Sorting

let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// Active link changing

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork));

//Portfolio Popup

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('work-button')) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;
    document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;
    document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

//Services Popup
const modalViews = document.querySelectorAll('.services-modal');
const modelBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

//Swiper Testimonial

let swiper = new Swiper(".testimonials-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

// Input Animation

const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Activating Sidebar

const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-sidebar');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
    })
}


// Theme Toggle
const themeButton = document.querySelector('.btn-theme');
const themeIcon = document.querySelector('.theme-icon');
const iconTheme = 'uil-sun';

// Previously selected theme
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Apply saved theme
if (selectedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('uil-moon', 'uil-sun');
}

// Theme button click handler
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');

    // Toggle icon
    if (isLightTheme) {
        themeIcon.classList.replace('uil-moon', 'uil-sun');
    } else {
        themeIcon.classList.replace('uil-sun', 'uil-moon');
    }

    // Save to localStorage
    localStorage.setItem('selected-theme', isLightTheme ? 'light' : 'dark');
    localStorage.setItem('selected-icon', isLightTheme ? 'uil-sun' : 'uil-moon');

    // Update images if needed
    updateImages(isLightTheme);
});

// Function to update images based on theme and viewport
function updateImages(isLightTheme) {
    const homeBg = document.querySelector('.home');
    const homeImg = document.querySelector('.home-img');
    const aboutImg = document.querySelector('.about-img');

    // Only update background if not in mobile view
    if (window.innerWidth > 576) {
        homeBg.style.backgroundImage = isLightTheme ?
            "url('assets/home-bg-white.jpg')" :
            "url('assets/bg-image.jpg')";
    } else {
        homeBg.style.backgroundImage = 'none';
    }

    // Always update mobile image
    if (homeImg) {
        homeImg.src = isLightTheme ?
            "assets/mobile-image-light.jpg" :
            "assets/mobile-img.jpg";
    }

    if (aboutImg) {
        aboutImg.src = isLightTheme ?
            "assets/about-image-light.jpg" :
            "assets/about-img.jpg";
    }
}

// Update images on load based on current theme
window.addEventListener('load', () => {
    const isLightTheme = document.body.classList.contains('light-theme');
    updateImages(isLightTheme);
});

// Update images on resize
window.addEventListener('resize', () => {
    const isLightTheme = document.body.classList.contains('light-theme');
    updateImages(isLightTheme);
});