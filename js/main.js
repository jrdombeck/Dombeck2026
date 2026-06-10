/* ============================================
   LongForm AI — Landing Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Hamburger Menu ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // --- Navbar scroll effect ---
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // --- FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            const isOpen = this.getAttribute('aria-expanded') === 'true';
            const answer = this.nextElementSibling;

            // Close all other FAQ items
            faqQuestions.forEach(function(q) {
                if (q !== question) {
                    q.setAttribute('aria-expanded', 'false');
                    q.nextElementSibling.classList.remove('open');
                }
            });

            // Toggle current
            if (isOpen) {
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('open');
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('open');
            }
        });
    });

    // --- Intersection Observer for fade-in animations ---
    const animateElements = document.querySelectorAll('.card, .process-step, .pricing-card, .testimonial-card, .faq-item, .cta-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = (index * 0.08) + 's';
        observer.observe(el);
    });

    // --- Smooth scroll for anchor links (fallback for older browsers) ---
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 72;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
