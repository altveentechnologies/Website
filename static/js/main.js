/**
 * Altveen Technologies - Main JavaScript
 * Mobile nav, contact form, and shared interactions
 */
(function () {
    'use strict';

    // Mobile navigation toggle
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', mainNav.classList.contains('is-open'));
        });
        // Close on link click (for anchor or same-page nav)
        mainNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('is-open');
                }
            });
        });
    }

    // Contact form submits normally to Flask (POST to /contact); no JS intercept.

    // Smooth scroll for anchor links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        var id = anchor.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    });

    // Scroll-triggered animations: add .in-view when element enters viewport
    var animated = document.querySelectorAll('.animate-on-scroll');
    if (animated.length && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.1 });
        animated.forEach(function (el) { observer.observe(el); });
    }

    // Stats counter: animate numbers when stat item enters view
    var statItems = document.querySelectorAll('.stat-item');
    if (statItems.length && 'IntersectionObserver' in window) {
        var statObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var item = entry.target;
                if (!entry.isIntersecting || item.getAttribute('data-counted')) return;
                var numEl = item.querySelector('.stat-number[data-count]');
                if (!numEl) return;
                item.setAttribute('data-counted', '1');
                var target = parseInt(numEl.getAttribute('data-count'), 10);
                if (isNaN(target)) return;
                var duration = 1500;
                var start = 0;
                var startTime = null;
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    var progress = Math.min((timestamp - startTime) / duration, 1);
                    var easeOut = 1 - Math.pow(1 - progress, 3);
                    var current = Math.round(start + (target - start) * easeOut);
                    numEl.textContent = current;
                    if (progress < 1) requestAnimationFrame(step);
                    else numEl.textContent = target;
                }
                requestAnimationFrame(step);
            });
        }, { threshold: 0.3 });
        statItems.forEach(function (el) { statObserver.observe(el); });
    }

    // FAQ accordion
    var faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length) {
        faqItems.forEach(function (item) {
            var btn = item.querySelector('.faq-question');
            if (!btn) return;
            btn.addEventListener('click', function () {
                var isOpen = item.classList.contains('is-open');
                faqItems.forEach(function (other) { other.classList.remove('is-open'); });
                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        });
    }
})();
