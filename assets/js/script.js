const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

if(navToggle) {
    navToggle.addEventListener ('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose) {
    navClose.addEventListener ('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    namMenu.classList.remove('show-menu');
};

const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader)

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('.active-links');
        } else {
            sectionClass.classList.remove('active-links');
        }
    });
};
window.addEventListener('scroll', scrollActive)


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});

//Darkmode 

window.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('theme-toggle');

    function applyTheme(theme) {
        if(theme === 'light') {
            document.body.classList.add('light-theme');
            toggleBtn.classList.remove('ri-sun-line')
            toggleBtn.classList.add('ri-moon-line')
        }
        else {
            document.body.classList.remove('light-theme');
            toggleBtn.classList.add('ri-sun-line');
            toggleBtn.classList.remove('ri-moon-line');

        }

        localStorage.setItem('theme', theme);
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme); 

    toggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light-theme');
        applyTheme(isLight ? 'dark' : 'light');
    })
})
// Mixitup animation
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork))

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'), // textarea, not label
    message = document.getElementById('message'); // <p id="message">

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactMessage.value === '') {
        message.textContent = 'Write all the input fields';

        setTimeout(() => {
            message.textContent = ''
        }, 3000)
    }
    else {
        emailjs.sendForm(
            "service_i266bxs",
            "template_2pqhimu",
            '#contact-form',
            "o70Mdwzy1akDN2FiW"
        ).then(
            () => {
                message.textContent = 'Message sent ✓';
                setTimeout(() => {
                    message.textContent = ''
                }, 5000)
            },
            (error) => { alert('OOPS! SOMETHING WENT WRONG...', error); }
        );

        contactName.value = '';
        contactEmail.value = '';
        contactMEssage.value = '';

    }
};


contactForm.addEventListener('submit', sendEmail);

const sr = ScrollReveal ({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home-data`);
sr.reveal(`.home-img-wrapper`, { delay: 500});
sr.reveal(`.home-social`, { delay: 600});
sr.reveal(`.services-card, .mix`, { interval: 100 });
sr.reveal(`.skills-web2, .resume-left, .contact-group`, { origin: 'left' });

sr.reveal(`.skills-web3, .resume-right, .contact-form`, { origin: 'right' });
// sr.reveal(`.servicer-card`, {interval: 600});


