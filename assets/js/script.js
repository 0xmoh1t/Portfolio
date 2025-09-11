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