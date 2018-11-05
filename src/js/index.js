import '../scss/main.scss'


let controller = new ScrollMagic.Controller(),
    horizontalSlide = new TimelineMax()
    // animate panels
    .to("#js-slideContainer", 1, { x: "-20%" })
    .to("#js-slideContainer", 1, { x: "-40%" })
    .to("#js-slideContainer", 1, { x: "-60%" })
    .to("#js-slideContainer", 1, { x: "-80%" })

document.getElementById('about').addEventListener('click', (e) => {
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
        const nodes = {
            header: document.querySelector('header'),
            navIcon: document.querySelector('.nav__m-icon'),
            navUl: document.querySelector('.nav__wrapper'),
            navOverlay: document.querySelector('.nav__m-overlay'),
            logo: document.querySelector('.logo'),
            logoImage: document.querySelector('.logo__image'),
            navItems: document.querySelectorAll('.nav__item'),
            footer: document.querySelector('footer')
        };

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
            if (nodes.header.classList.contains('open')) {
                toggleNav();
            }
        });

        nodes.navOverlay.addEventListener('click', (e) => {
            toggleNav();
        });

        nodes.navItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                if (nodes.header.classList.contains('open')) {
                    toggleNav();
                }
            });
        });

    })();