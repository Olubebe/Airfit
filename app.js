const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)
// animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.anime_hero',{
    duration: 0.6,
    opacity:0,
    y:-150,
    stagger:0.3
});

gsap.from('.anime-services',{
    ScrollTrigger:'.anime-services',
    duration: 1,
    opacity:0,
    x:-150,
    stagger:0.3,
    delay:0.5
});

gsap.from('.anime-img',{
    ScrollTrigger:'.anime-services',
    duration: 1.2,
    opacity:0,
    x:-200,
});

gsap.from('.anime-membership',{
    ScrollTrigger:'.anime-membership',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:0.5
});
gsap.from('.anime-card',{
    ScrollTrigger:'.anime-card',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.1,
    delay:1
});

gsap.from('.anime-team',{
    ScrollTrigger:'.anime-team',
    duration: 1,
    opacity:0,
    y:-150,
    stagger:0.3,
    delay:1
});

gsap.from('.anime-email',{
    ScrollTrigger:'.anime-email',
    duration: 0.8,
    opacity:0,
    y:-150,
    stagger:0.25,
    delay:1
});

gsap.from('.anime-footer',{
    ScrollTrigger:'.anime-footer',
    duration: 0.6,
    opacity:0,
    y:-150,
    delay:1
});

