import '../scss/main.scss';

    (()=> {
        const nodes = {
            sections: document.querySelectorAll('section'),
            sectionsWrapper: document.querySelector('.sections'),
            navItems: document.querySelectorAll('.nav__item'),
            navAnchors: document.querySelectorAll('.nav__anchor'),
            body: document.querySelector('body'),
            header: document.querySelector('header'),
            navIcon: document.querySelector('.nav__m-icon'),
            navUl: document.querySelector('.nav__wrapper'),
            navOverlay: document.querySelector('.nav__m-overlay'),
            logo: document.querySelector('.logo'),
            logoImage: document.querySelector('.logo__image'),
            navItems: document.querySelectorAll('.nav__item'),
            navAnchors: document.querySelectorAll('.nav__anchor'),
            footer: document.querySelector('.footer'),
            services: document.querySelector('.slides'),
            slideNext: document.querySelector('.slides__next'),
            wWidth: window.innerWidth,
            sectionNames: []
        }

        const ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: 561
            }
        })
        
        window.addEventListener('resize', () => {
            nodes.wWidth = window.innerWidth;

            if (nodes.wWidth <= 1000) {
                nodes.sectionsWrapper.removeAttribute('style');
            }
        });

        function toggleNav() {
            nodes.navUl.classList.toggle('active');
            nodes.header.classList.toggle('open');
            nodes.navOverlay.classList.toggle('active');
            nodes.footer.classList.toggle('open');
        }

        nodes.navItems.forEach((item) => {
            let id = item.querySelector('a').getAttribute('href');
            nodes.sectionNames.push(id);
            item.addEventListener('click',  e => {
                e.preventDefault();
    
                ctrl.scrollTo(id);
    
                if (nodes.wWidth >= 980) {
                    id = id.replace('#', '');
                    switch (id) {
                        case 'about':
                        new TimelineMax()
                        .to(".sections", 1, {x: "-20%"});
                        break;
                        case 'services':
                        new TimelineMax()
                        .to(".sections", 1, {x: "-40%"});
                        break;
                        case 'team':
                        new TimelineMax()
                        .to(".sections", 1, {x: "-60%"});
                        break;
                        case 'contact':
                        new TimelineMax()
                        .to(".sections", 1, {x: "-80%"});
                        break;
                        default:
                            break;
                    }
                }
    
            })
        })

        nodes.sectionNames.forEach((section) => {
            new ScrollMagic.Scene({triggerElement: section})
            .setClassToggle('body', `body--${section.replace('#', '')}`)
            .addTo(ctrl);
        });

        nodes.navItems.forEach((item) => {
            const id = item.querySelector('a').getAttribute('href');
            item.addEventListener('click', (e) => {
                nodes.navAnchors.forEach((item) => { 
                    item.removeAttribute('class');
                });
                
                nodes.body.removeAttribute('class');
                nodes.body.classList.add(`body--${id.replace('#', '')}`);
                
                if (nodes.wWidth >= 1000) {
                    e.target.classList.add('active');
                }

                if (nodes.header.classList.contains('open')) {
                    toggleNav();
                }
            });
        }); 

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

            ctrl.scrollTo('#home');
        });

        nodes.navOverlay.addEventListener('click', (e) => {
            toggleNav();
        });

        document.getElementById('logo').addEventListener('click', (e) => {
            e.preventDefault();
            nodes.body.removeAttribute('class');
            new TimelineMax().to("#js-slideContainer", 1, { x: "0%" });
        });

        $('.slides').slick({
            infinite: true,
            vertical: true,
            verticalSwiping:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
          });

          nodes.slideNext.addEventListener('click', () => {
            $('.slides').slick('slickNext');
          });
    })()