// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
if (menuToggle.querySelector('i').classList.contains('ri-menu-line')) {
menuToggle.querySelector('i').classList.replace('ri-menu-line', 'ri-close-line');
} else {
menuToggle.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line');
}
});
// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.add('hidden');
menuToggle.querySelector('i').classList.replace('ri-close-line', 'ri-menu-line');
}
const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});
});
});
// Portfolio Filtering
const portfolioFilters = document.querySelectorAll('.portfolio-filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioFilters.forEach(filter => {
filter.addEventListener('click', () => {
// Remove active class from all filters
portfolioFilters.forEach(f => f.classList.remove('active', 'bg-primary'));
// Add active class to clicked filter
filter.classList.add('active', 'bg-primary');
const filterValue = filter.getAttribute('data-filter');
portfolioItems.forEach(item => {
if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
item.style.display = 'block';
} else {
item.style.display = 'none';
}
});
});
});
// Typing Effect
const typingElement = document.querySelector('.typing-effect');
const phrases = ['Niraj Dev', 'Web Developer', 'UI/UX Designer', 'Frontend Expert'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
function typeText() {
const currentPhrase = phrases[phraseIndex];
if (isDeleting) {
typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
charIndex--;
typingSpeed = 50;
} else {
typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
charIndex++;
typingSpeed = 100;
}
if (!isDeleting && charIndex === currentPhrase.length) {
isDeleting = true;
typingSpeed = 1500; // Pause at end of phrase
} else if (isDeleting && charIndex === 0) {
isDeleting = false;
phraseIndex = (phraseIndex + 1) % phrases.length;
typingSpeed = 500; // Pause before typing next phrase
}
setTimeout(typeText, typingSpeed);
}
// Start typing effect after a delay
setTimeout(typeText, 1000);
// Cursor Trail Effect
const createCursorTrail = () => {
const trail = document.createElement('div');
trail.className = 'cursor-trail';
document.body.appendChild(trail);
setTimeout(() => {
trail.style.opacity = '0';
setTimeout(() => {
document.body.removeChild(trail);
}, 500);
}, 500);
return trail;
};
document.addEventListener('mousemove', e => {
const trail = createCursorTrail();
trail.style.left = `${e.clientX}px`;
trail.style.top = `${e.clientY}px`;
});
// Section Transition (Fade in on scroll)
const sectionTransitions = document.querySelectorAll('.section-transition');
const checkVisibility = () => {
sectionTransitions.forEach(section => {
const sectionTop = section.getBoundingClientRect().top;
const windowHeight = window.innerHeight;
if (sectionTop < windowHeight - 100) {
section.classList.add('visible');
}
});
};
// Check visibility on load
window.addEventListener('load', checkVisibility);
// Check visibility on scroll
window.addEventListener('scroll', checkVisibility);
// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
e.preventDefault();
// Simple form validation
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;
if (name && email && subject && message) {
// Create a success message
const successMessage = document.createElement('div');
successMessage.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50';
successMessage.innerHTML = `
<div class="bg-[#222222] p-8 rounded-lg max-w-md morph-bg">
<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary bg-opacity-10 rounded-full pulse">
<i class="ri-check-line text-primary ri-2x"></i>
</div>
<h3 class="text-xl font-semibold mb-2 text-center text-gradient">Message Sent!</h3>
<p class="text-gray-300 text-center mb-6">Thank you for your message! I will get back to you soon.</p>
<button class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-all w-full whitespace-nowrap close-message ripple glow-effect">Close</button>
</div>
`;
document.body.appendChild(successMessage);
document.querySelector('.close-message').addEventListener('click', () => {
document.body.removeChild(successMessage);
});
contactForm.reset();
} else {
// Create an error message
const errorMessage = document.createElement('div');
errorMessage.className = 'fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50';
errorMessage.innerHTML = `
<div class="bg-[#222222] p-8 rounded-lg max-w-md shake-on-hover">
<div class="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-500 bg-opacity-10 rounded-full">
<i class="ri-error-warning-line text-red-500 ri-2x"></i>
</div>
<h3 class="text-xl font-semibold mb-2 text-center">Error</h3>
<p class="text-gray-300 text-center mb-6">Please fill in all fields.</p>
<button class="bg-primary text-white px-6 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-all w-full whitespace-nowrap close-message ripple">Close</button>
</div>
`;
document.body.appendChild(errorMessage);
document.querySelector('.close-message').addEventListener('click', () => {
document.body.removeChild(errorMessage);
});
}
});
// Animated Background with Parallax Effect
function createParticles() {
const animatedBg = document.querySelector('.animated-bg');
const particleCount = 30;
for (let i = 0; i < particleCount; i++) {
const particle = document.createElement('div');
particle.className = 'floating-particle';
// Random size between 5px and 20px
const size = Math.random() * 15 + 5;
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
// Random position
const posX = Math.random() * 100;
const posY = Math.random() * 100;
particle.style.left = `${posX}%`;
particle.style.top = `${posY}%`;
// Random opacity
particle.style.opacity = Math.random() * 0.5 + 0.1;
// Add to background
animatedBg.appendChild(particle);
}
}
// Parallax effect on scroll
window.addEventListener('scroll', () => {
const scrollY = window.scrollY;
const animatedBg = document.querySelector('.animated-bg');
const particles = document.querySelectorAll('.floating-particle');
// Move background slightly with scroll
animatedBg.style.transform = `translateY(${scrollY * 0.05}px)`;
// Move particles at different speeds
particles.forEach((particle, index) => {
const speed = 0.02 + (index % 5) * 0.01;
const yPos = parseFloat(particle.style.top) + scrollY * speed;
particle.style.transform = `translateY(${scrollY * speed}px)`;
});
});
// Create particles on load
window.addEventListener('load', () => {
createParticles();
});

// Ripple Effect
document.addEventListener('click', function(e) {
const target = e.target;
if (target.classList.contains('ripple')) {
target.classList.add('active');
setTimeout(() => {
target.classList.remove('active');
}, 600);
}
});

// Magnetic Button Effect
const magneticButtons = document.querySelectorAll('.magnetic-button');
magneticButtons.forEach(button => {
button.addEventListener('mousemove', function(e) {
const rect = this.getBoundingClientRect();
const x = e.clientX - rect.left - rect.width / 2;
const y = e.clientY - rect.top - rect.height / 2;
const strength = 10; // Adjust the magnetic strength
this.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
});

button.addEventListener('mouseleave', function() {
this.style.transform = 'translate(0, 0)';
});
});

// 3D Tilt Effect for Cards
const cards = document.querySelectorAll('.rotate-3d');
cards.forEach(card => {
card.addEventListener('mousemove', function(e) {
const rect = this.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const angleX = (y - centerY) / 20;
const angleY = (centerX - x) / 20;
this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

card.addEventListener('mouseleave', function() {
this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});
});

// Initialize reveal text animation
document.querySelectorAll('.reveal-text').forEach(text => {
text.setAttribute('data-text', text.textContent);
});


// Add event listener to the GitHub link
document.getElementById('github-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.open('https://github.com/nirajdev147', '_blank'); // Open GitHub to a new tab
  });
  
// Add event listener to the Linkedin link
document.getElementById('linkedin-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.open('https://www.linkedin.com/in/nirajdev2085/', '_blank'); // Open Linkedin to a new tab
  });
  
// Add event listener to the Behance link
document.getElementById('behance-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.open('https://www.behance.net/24246c72', '_blank'); // Open Behance to a new tab
  });

// Optimize animations for mobile
const isMobile = window.matchMedia('(max-width: 640px)').matches;

if (isMobile) {
  // Reduce particle count on mobile
  const particleCount = 15; // Half of desktop

  // Disable heavy animations on mobile
  const disableHeavyAnimations = () => {
    document.querySelectorAll('.spotlight').forEach(el => {
      el.classList.remove('spotlight');
    });
    
    document.querySelectorAll('.rotate-3d').forEach(el => {
      el.classList.remove('rotate-3d');
    });
  }

  // Add touch event handlers for mobile
  document.addEventListener('touchstart', function(e) {
    // Handle touch events for buttons
    if (e.target.classList.contains('ripple')) {
      e.target.classList.add('active');
      setTimeout(() => {
        e.target.classList.remove('active');
      }, 300);
    }
  });

  // Optimize scroll performance on mobile
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkVisibility();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initialize mobile optimizations
  window.addEventListener('load', () => {
    disableHeavyAnimations();
    createParticles();
  });
}
