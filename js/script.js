/* ============================================================
   SUSHRAVA Technologies — script.js
   Mobile menu, scroll effects, reveal animations, back-to-top,
   footer year and static contact form (mailto fallback).
   ============================================================ */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  var backToTop = document.querySelector('.back-to-top');

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    if (!mainNav || !navToggle) return;
    mainNav.classList.remove('open');
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close the menu when a navigation link is clicked
    mainNav.addEventListener('click', function (event) {
      var link = event.target.closest('a');
      if (!link) return;
      var parentDropdown = link.closest('.has-dropdown');

      if (link.parentElement.classList.contains('has-dropdown') ||
          (parentDropdown && link === parentDropdown.querySelector(':scope > a'))) {
        // Toggle the submenu instead of navigating away
        event.preventDefault();
        parentDropdown.classList.toggle('open');
        var subToggle = parentDropdown.querySelector(':scope > a');
        if (subToggle) {
          subToggle.setAttribute('aria-expanded',
            String(parentDropdown.classList.contains('open')));
        }
        return;
      }
      closeMenu();
    });

    // Close on escape / resize to desktop
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeMenu();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 992) closeMenu();
    });
  }

  /* ---------- Header shadow + back-to-top visibility ---------- */
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Scroll reveal animations ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (revealEls.length && 'IntersectionObserver' in window && !prefersReduced) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Contact form (static — mailto fallback) ---------- */
  var form = document.querySelector('#enquiryForm');
  if (!form) return;

  var statusBox = form.querySelector('.form-status');

  function setError(field, message) {
    var errorEl = form.querySelector('[data-error-for="' + field.id + '"]');
    if (message) {
      field.classList.add('error');
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) errorEl.textContent = message;
      return false;
    }
    field.classList.remove('error');
    field.removeAttribute('aria-invalid');
    if (errorEl) errorEl.textContent = '';
    return true;
  }

  function validate() {
    var ok = true;
    var name = form.querySelector('#name');
    var email = form.querySelector('#email');
    var phone = form.querySelector('#phone');
    var service = form.querySelector('#service');
    var message = form.querySelector('#message');

    if (name) ok = setError(name, name.value.trim().length >= 2 ? '' : 'Please enter your full name.') && ok;
    if (email) ok = setError(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()) ? '' : 'Please enter a valid email address.') && ok;
    if (phone) {
      var digits = phone.value.replace(/\D/g, '');
      ok = setError(phone, digits.length >= 10 && digits.length <= 15 ? '' : 'Please enter a valid phone number.') && ok;
    }
    if (service) ok = setError(service, service.value ? '' : 'Please select a service.') && ok;
    if (message) ok = setError(message, message.value.trim().length >= 10 ? '' : 'Please write a short message (at least 10 characters).') && ok;
    return ok;
  }

  ['input', 'change'].forEach(function (evt) {
    form.addEventListener(evt, function (event) {
      if (event.target.classList && event.target.classList.contains('error')) validate();
    });
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!validate()) {
      var firstError = form.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    // GitHub Pages has no backend — hand the enquiry to the visitor's
    // email client so it reaches the SUSHRAVA inbox.
    var name = form.querySelector('#name').value.trim();
    var email = form.querySelector('#email').value.trim();
    var phone = form.querySelector('#phone').value.trim();
    var service = form.querySelector('#service').value;
    var message = form.querySelector('#message').value.trim();

    var subject = 'Website Enquiry — ' + service + ' (' + name + ')';
    var body = 'Name: ' + name + '\n'
      + 'Email: ' + email + '\n'
      + 'Phone: ' + phone + '\n'
      + 'Service Required: ' + service + '\n\n'
      + 'Message:\n' + message + '\n\n'
      + '— Sent from the SUSHRAVA Technologies website';

    window.location.href = 'mailto:sushrava.technologies@gmail.com'
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    if (statusBox) {
      statusBox.textContent = 'Thank you, ' + name.split(' ')[0]
        + '. Your email app should now open with your enquiry — press Send there to reach us. '
        + 'You can also write to us directly at sushrava.technologies@gmail.com.';
      statusBox.classList.add('success');
      statusBox.setAttribute('role', 'status');
    }
    form.reset();
  });
})();
