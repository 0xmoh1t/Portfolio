
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20 
    ? header.classList.add('scroll-header') 
    : header.classList.remove('scroll-header');
};

window.addEventListener('scroll', scrollHeader)

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

