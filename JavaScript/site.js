// Shared site JavaScript
// 1) Set current year in all footers
// 2) Simple mobile nav toggle if a `.nav-toggle` exists
// 3) Basic form submit prevention for demo

(function () {
  // Current year filler for elements with class "current-year"
  document.addEventListener('DOMContentLoaded', function () {
    var yearEls = document.querySelectorAll('.current-year');
    var y = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = y; });

    // Mobile nav toggle (optional)
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
    }

    // Prevent default on demo forms (keeps page from navigating)
    var forms = document.querySelectorAll('form');
    forms.forEach(function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = f.querySelector('button[type="submit"]');
        if (btn) {
          var original = btn.textContent;
          btn.textContent = 'Submitted';
          setTimeout(function () { btn.textContent = original; }, 2000);
        }
      });
    });

    // ANIMATIONS: add animate-on-scroll to common elements if not present
    var toAnimateSelectors = ['.card', 'section h2', '.hero h2', '.hero p', '.slide', 'nav a'];
    toAnimateSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, idx) {
        if (!el.classList.contains('animate-on-scroll') && !el.classList.contains('entrance')) {
          // hero specific elements use .entrance
          if (sel.indexOf('.hero') === 0) {
            el.classList.add('entrance');
            // stagger hero pieces
            if (idx === 0) el.classList.add('reveal-delay-1');
            else el.classList.add('reveal-delay-2');
          } else {
            el.classList.add('animate-on-scroll');
            if (idx % 3 === 0) el.classList.add('reveal-delay-1');
            else if (idx % 3 === 1) el.classList.add('reveal-delay-2');
            else el.classList.add('reveal-delay-3');
          }
        }
      });
    });

    // If GSAP is available, use it for richer scroll animations; otherwise use IntersectionObserver
    var hasGSAP = typeof window.gsap !== 'undefined';
    if (hasGSAP) {
      try {
        var gsap = window.gsap;
        if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

        // Hero entrance
        if (document.querySelector('.hero')) {
          gsap.from('.hero h1, .hero h2, .hero p', {
            y: 28,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12
          });
        }

        // Section headers
        gsap.utils.toArray('section h2').forEach(function (el) {
          gsap.from(el, {
            y: 22,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' }
          });
        });

        // Cards and slides
        gsap.utils.toArray('.card, .slide').forEach(function (el) {
          gsap.from(el, {
            y: 26,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.06,
            scrollTrigger: { trigger: el, start: 'top 88%' }
          });
        });

        // Nav link micro-motion
        document.querySelectorAll('nav a').forEach(function (a) {
          a.addEventListener('mouseenter', function () { gsap.to(a, { y: -4, duration: 0.18 }); });
          a.addEventListener('mouseleave', function () { gsap.to(a, { y: 0, duration: 0.18 }); });
        });

      } catch (e) {
        // If GSAP fails, fall back to IntersectionObserver
        attachIntersectionObserver();
      }
    } else {
      attachIntersectionObserver();
    }

    function attachIntersectionObserver() {
      var ioOptions = { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 };
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, ioOptions);

      document.querySelectorAll('.animate-on-scroll, .entrance').forEach(function (el) { io.observe(el); });

      // Hero entrance: force visible after small delay for better effect
      var hero = document.querySelector('.hero');
      if (hero) {
        setTimeout(function () {
          hero.querySelectorAll('.entrance').forEach(function (e) { e.classList.add('visible'); });
        }, 260);
      }

      // Nav micro-motion on hover (basic)
      document.querySelectorAll('nav a').forEach(function (a) {
        a.addEventListener('mouseenter', function () { a.classList.add('animated'); });
        a.addEventListener('mouseleave', function () { a.classList.remove('animated'); });
      });
      
      // Splash intro behavior: block scroll, hide after timeout, allow skip
      (function () {
        var splash = document.getElementById('splash');
        if (!splash) return;
        // block page scrolling while splash visible
        document.body.classList.add('splash-block-scroll');

        var hide = function () {
          if (!splash) return;
          splash.classList.add('splash-hidden');
          document.body.classList.remove('splash-block-scroll');
          // remove from DOM after transition
          setTimeout(function () { if (splash && splash.parentNode) splash.parentNode.removeChild(splash); splash = null; }, 300);
        };

        // auto-hide after 1000ms
        setTimeout(hide, 1000);

        // click to skip
        splash.addEventListener('click', hide);

        // Esc to skip
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hide(); });
      })();
    }
  });
})();
