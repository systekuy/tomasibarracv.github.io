// ============================================
// PARTICLE SYSTEM
// ============================================

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
            this.vx *= -1;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
            this.vy *= -1;
        }

        // Keep within bounds
        this.x = Math.max(this.radius, Math.min(this.canvas.width - this.radius, this.x));
        this.y = Math.max(this.radius, Math.min(this.canvas.height - this.radius, this.y));
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

class ParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 30;

        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        this.createParticles();
        this.animate();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }

    animate() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });

        // Draw connections between nearby particles
        this.drawConnections();

        requestAnimationFrame(() => this.animate());
    }

    drawConnections() {
        this.ctx.strokeStyle = 'rgba(0, 255, 136, 0.1)';
        this.ctx.lineWidth = 1;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

// ============================================
// TERMINAL TYPING ANIMATION
// ============================================

class TerminalTyper {
    constructor() {
        this.typingText = document.getElementById('typingText');
        this.terminalOutput = document.getElementById('terminalOutput');
        this.isTyping = false;
        this.start();
    }

    async start() {
        await this.sleep(500);
        await this.typeCommand('whoami');
        await this.sleep(300);
        await this.showOutput([
            '╭──────────────────────────────────────────────────────────╮',
            '│ Tomás Ibarra | Junior Developer & Physics Student       │',
            '│ Location: Montevideo, Uruguay                           │',
            '│ Passion: Programming, Physics, Problem Solving          │',
            '╰──────────────────────────────────────────────────────────╯'
        ]);
        
        await this.sleep(1000);
        await this.typeCommand('skills');
        await this.sleep(300);
        await this.showOutput([
            '$ Languages: Python | C | C++ | JavaScript',
            '$ Tools: SQL | Git | Odoo | Postman | Selenium',
            '$ Interests: Data Science | Physics | Mathematics'
        ]);

        await this.sleep(1000);
        await this.typeCommand('status');
        await this.sleep(300);
        await this.showOutput([
            '✓ Available for opportunities',
            '✓ Open to collaboration',
            '✓ Passionate about impact-driven projects'
        ]);

        await this.sleep(2000);
        // Keep looping
        this.start();
    }

    async typeCommand(command) {
        this.isTyping = true;
        for (let char of command) {
            this.typingText.textContent += char;
            await this.sleep(50);
        }
        this.typingText.textContent = '';
        this.isTyping = false;
    }

    async showOutput(lines) {
        this.terminalOutput.innerHTML = '';
        for (let line of lines) {
            const outputLine = document.createElement('div');
            outputLine.className = 'output-line';
            outputLine.textContent = line;
            this.terminalOutput.appendChild(outputLine);
            await this.sleep(100);
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ============================================
// DOWNLOAD CV FUNCTION
// ============================================

function downloadCV() {
    // Create a simple CV text file
    const cvContent = `
╔═══════════════════════════════════════════════════════════════════╗
║                    TOMÁS IBARRA - DEVELOPER                      ║
║                  Junior Developer & Physics Student                ║
║                     Montevideo, Uruguay                            ║
╚═══════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Age: 21
Location: Montevideo, Uruguay

Passionate junior developer and Physics & Mathematics Engineering 
student at UdelaR. Interested in programming, physics, and solving 
complex problems through code.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Programming Languages:
  • Python        • C/C++          • JavaScript    • SQL

Tools & Frameworks:
  • Git           • GitHub         • Odoo          • Postman
  • Selenium      • Apache JMeter

Specializations:
  • Software Testing    • Data Analysis       • Physics Modeling
  • Mathematical Analysis

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Junior Developer at SISINFO
  • Developed and maintained software solutions
  • Collaborated with cross-functional teams
  • Participated in full development lifecycle

Software Tester at SISINFO
  • Created and executed test plans
  • Identified and documented bugs
  • Automation testing with Selenium and Postman

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ingeniería Física Matemática (Physics & Mathematics Engineering)
  UdelaR (FING) - Currently Studying
  
Diplomatura en Testing de Software (Software Testing)
  CES - Completed 2023

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GitHub:   https://github.com/ttomasibarra
LinkedIn: https://linkedin.com/in/ttomasibarra
Email:    ttomasibarra@gmail.com
Phone:    +598 97 990 860

═══════════════════════════════════════════════════════════════════════`;

    // Create blob and download
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
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    new ParticleSystem('particleCanvas');
    
    // Initialize terminal typer
    new TerminalTyper();
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
