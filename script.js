// script.js - HydroHogs Website JavaScript
// Handles page loading, mobile menu, and animations

document.addEventListener('DOMContentLoaded', function() {
    // Hide page loader
    const pageLoader = document.getElementById('pageLoader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500); // Match transition duration
        }, 500); // Small delay to show loader briefly
    }

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = navMenu ? navMenu.querySelectorAll('a') : [];
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenuBtn && navMenu) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    function checkFade() {
        const triggerBottom = window.innerHeight * 0.8;

        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check
    checkFade();

    // Check on scroll
    window.addEventListener('scroll', checkFade);

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
