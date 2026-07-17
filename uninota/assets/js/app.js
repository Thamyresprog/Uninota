/* =========================================
   ACADEMICFLOW
========================================= */

console.log("AcademicFlow iniciado");

/* =========================================
   SCROLL HEADER EFFECT
========================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(2, 6, 23, 0.9)";
        header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";

    }else{

        header.style.background = "rgba(2, 6, 23, 0.5)";
        header.style.borderBottom = "1px solid rgba(255,255,255,0.05)";

    }

});

/* =========================================
   SMOOTH SCROLL NAVIGATION
========================================= */

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

/* =========================================
   HERO BUTTONS
========================================= */

const createAccountButtons = document.querySelectorAll('.btn-primary');

createAccountButtons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.transform = 'translateY(-4px) scale(1.02)';

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform = 'translateY(0px) scale(1)';

    });

});

/* =========================================
   FEATURE CARDS ANIMATION
========================================= */

const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 0 40px rgba(59,130,246,0.15)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform = 'translateY(0px)';
        card.style.boxShadow = 'none';

    });

});

/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
    '.feature-card, .step-card, .mockup-card, .simulator-box'
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            element.classList.add('active');

        }

    });

};

window.addEventListener('scroll', revealOnScroll);

/* =========================================
   INITIAL LOAD
========================================= */

revealOnScroll();

/* =========================================
   SIMULATOR PREVIEW
========================================= */

const simulatorButton = document.querySelector('#simulator .btn-primary');

if(simulatorButton){

    simulatorButton.addEventListener('click', () => {

        const inputs = document.querySelectorAll('#simulator input');

        const np1 = parseFloat(inputs[0].value) || 0;
        const np2 = parseFloat(inputs[1].value) || 0;
        const pim = parseFloat(inputs[2].value) || 0;

        const ms = (np1 / 4) + (np2 / 4) + (pim / 2);

        if(ms >= 7){

            alert(
                `Média Semestral: ${ms.toFixed(1)}\n\n✅ Aprovado direto!`
            );

        }else{

            const exameNecessario = (10 - ms).toFixed(1);

            alert(
                `Média Semestral: ${ms.toFixed(1)}\n\n⚠️ Exame necessário.\nVocê precisa de ${exameNecessario} pontos para média final 5.`
            );

        }

    });

}

/* =========================================
   TYPEWRITER EFFECT
========================================= */

const heroTitle = document.querySelector('.hero-content h1');

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = '';

let index = 0;

function typeWriter(){

    if(index < originalText.length){

        heroTitle.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeWriter, 20);

    }

}

window.addEventListener('load', () => {

    typeWriter();

});

/* =========================================
   FLOATING EFFECT MOCKUP
========================================= */

const mockup = document.querySelector('.dashboard-mockup');

let floatPosition = 0;

function floatingAnimation(){

    floatPosition += 0.02;

    mockup.style.transform =
    `translateY(${Math.sin(floatPosition) * 8}px)`;

    requestAnimationFrame(floatingAnimation);

}

floatingAnimation();