// ============================================
// DOWNLOAD CV FUNCTION
// ============================================

function downloadCV() {
    const cvContent = `
TOMÁS IBARRA
Junior Developer & Physics Engineering Student
Montevideo, Uruguay

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ABOUT
Passionate junior developer and Physics & Mathematics Engineering student 
at UdelaR. Interested in programming, physics, and solving complex problems 
through code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TECHNICAL SKILLS

Languages
Python • C • C++ • JavaScript • SQL

Tools & Frameworks
Git • GitHub • Odoo • Postman • Selenium • Apache JMeter

Specializations
Software Testing • Data Analysis • Physics Modeling • Mathematical Analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE

Junior Developer
SISINFO
Developing and maintaining software solutions, collaborating with 
cross-functional teams.

Software Tester
SISINFO
Test automation with Selenium, Postman, and performance testing with 
Apache JMeter. Created and executed test plans, identified and documented bugs.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EDUCATION

Ingeniería Física Matemática
UdelaR (FING) - Currently Studying

Diplomatura en Testing de Software
CES - Completed 2023

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT

GitHub:   https://github.com/ttomasibarra
LinkedIn: https://linkedin.com/in/ttomasibarra
Email:    ttomasibarra@gmail.com
Phone:    +598 97 990 860

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
© 2026 Tomás Ibarra. All rights reserved.`;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Tomas_Ibarra_CV.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Animations are handled by CSS
    // This keeps the page clean and responsive
    console.log('Portfolio loaded');
});
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and skill categories
document.querySelectorAll('.experience-card, .language-card, .skill-category, .project-card, .stat-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ============================================
// NAVBAR BACKGROUND ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
    }
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toFixed(0) + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 16);
}

const statObserverOptions = {
    threshold: 0.5
};

const statObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber && !statNumber.classList.contains('animated')) {
                statNumber.classList.add('animated');
                const text = statNumber.textContent;
                const number = parseInt(text);
                if (!isNaN(number)) {
                    animateCounter(statNumber, number);
                }
            }
            statObserver.unobserve(entry.target);
        }
    });
}, statObserverOptions);

document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
});

// ============================================
// SMOOTH SCROLL FOR SCROLL ARROW
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const scrollArrow = document.querySelector('.hero-scroll');
    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        scrollArrow.style.cursor = 'pointer';
    }
});

// ============================================
// DARK MODE TOGGLE (Optional - commented out)
// ============================================

// Uncomment this section to enable dark mode toggle
/*
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }
}
*/

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollToTopBtn = document.createElement('div');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #3b82f6, #06b6d4);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
});
