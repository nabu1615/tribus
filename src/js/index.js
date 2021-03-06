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
            slideNext: document.querySelector('.slides__arrow--next'),
            slidePrev: document.querySelector('.slides__arrow--prev'),
            wWidth: window.innerWidth,
            sectionNames: [],
            breakPoint: 960
        }

        const ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave',
                duration: 561
            }
        })


        window.onscroll = function() {
            if (window.scrollY > 0) {
                nodes.header.classList.add('active');
            } else {
                nodes.header.classList.remove('active');
            }
        };

        
        window.addEventListener('resize', () => {
            nodes.wWidth = window.innerWidth;

            if (nodes.wWidth <= nodes.breakPoint) {
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
    
                if (nodes.wWidth >=  nodes.breakPoint) {
                    id = id.replace('#', '');
                    switch (id) {
                        case 'about':
                        new TimelineMax()
                        .to(".sections", 2, {x: "-20%"});
                        break;
                        case 'services':
                        new TimelineMax()
                        .to(".sections", 2, {x: "-40%"});
                        break;
                        case 'team':
                        new TimelineMax()
                        .to(".sections", 2, {x: "-60%"});
                        break;
                        case 'contact':
                        new TimelineMax()
                        .to(".sections", 2, {x: "-80%"});
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
                
                if (nodes.wWidth >= nodes.breakPoint) {
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

        document.querySelector('.home--about').addEventListener('click', (e) => {
            new TimelineMax()
            .to(".sections", 1, {x: "-20%"});

            ctrl.scrollTo('#about');
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
                },
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
          });

          nodes.slideNext.addEventListener('click', () => {
            $('.slides').slick('slickNext');
          });

          nodes.slidePrev.addEventListener('click', () => {
            $('.slides').slick('slickPrev');
          });

          $('.team__wrapper').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 1550,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }
            ]
          });
    })()