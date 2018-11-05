import '../scss/main.scss';
import Glide from '@glidejs/glide';


let controller = new ScrollMagic.Controller(),
    horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1, { x: "-20%" })
    .to("#js-slideContainer", 1, { x: "-40%" })
    .to("#js-slideContainer", 1, { x: "-60%" })
    .to("#js-slideContainer", 1, { x: "-80%" })

const nodes = {
    body: document.querySelector('body'),
    header: document.querySelector('header'),
    about: document.getElementById('about'),
    navIcon: document.querySelector('.nav__m-icon'),
    navUl: document.querySelector('.nav__wrapper'),
    navOverlay: document.querySelector('.nav__m-overlay'),
    logo: document.querySelector('.logo'),
    logoImage: document.querySelector('.logo__image'),
    navItems: document.querySelectorAll('.nav__item'),
    navAnchors: document.querySelectorAll('.nav__anchor'),
    footer: document.querySelector('.footer'),
    servicesItems: document.querySelector('.services__items')
};

nodes.about.addEventListener('click', (e) => {
    e.preventDefault();
    new TimelineMax().to("#js-slideContainer", 1, { x: "-20%" });
});

document.getElementById('services').addEventListener('click', (e) => {
    e.preventDefault();
    new TimelineMax().to("#js-slideContainer", 1, { x: "-40%" });
});

document.getElementById('team').addEventListener('click', (e) => {
    e.preventDefault();
    new TimelineMax().to("#js-slideContainer", 1, { x: "-60%" });
});

document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault();
    new TimelineMax().to("#js-slideContainer", 1, { x: "-80%" });
});

document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();
    nodes.body.removeAttribute('class');
    new TimelineMax().to("#js-slideContainer", 1, { x: "0%" });
});

// create scene to pin and link animation
new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
})
    .setPin("#js-wrapper")
    .setTween(horizontalSlide)
    .addTo(controller);
    //.addIndicators() // add indicators (requires plugin)

    // Header

    (() => {
        function toggleNav() {
            nodes.navUl.classList.toggle('active');
            nodes.header.classList.toggle('open');
            nodes.navOverlay.classList.toggle('active');
            nodes.footer.classList.toggle('open');
        }

        nodes.navIcon.addEventListener('click', (e) => {
            toggleNav();
        });

        nodes.logo.addEventListener('click', (e) => {
            nodes.navAnchors.forEach((item) => { 
                item.removeAttribute('class');
            });

            if (nodes.header.classList.contains('open')) {
                toggleNav();
            }
        });

        nodes.navOverlay.addEventListener('click', (e) => {
            toggleNav();
        });

        nodes.navItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                const sectionName = e.currentTarget.getAttribute('data-nav-item');

                nodes.navAnchors.forEach((item) => { 
                    item.removeAttribute('class');
                });
                
                nodes.body.removeAttribute('class');
                nodes.body.classList.add(sectionName);
                
                if (window.innerWidth >= 1000) {
                    e.target.classList.add('active');
                }

                if (nodes.header.classList.contains('open')) {
                    toggleNav();
                }
            });
        });


        const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 1,
            autoplay: 7000,
            mode: 'vertical'
        });

        glide.mount();
    })();