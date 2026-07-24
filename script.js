const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('#nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open', !isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    });
  });
}

const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

// The address is assembled only after a user clicks the button.
// It is intentionally absent as plain text from the HTML source.
const emailButton = document.querySelector('#email-button');
if (emailButton) {
  const encodedAddress = [107, 107, 111, 121, 97, 110, 97, 50, 64, 117, 119, 111, 46, 99, 97];

  emailButton.addEventListener('click', () => {
    const address = String.fromCharCode(...encodedAddress);
    const subject = encodeURIComponent('Academic website inquiry');
    window.location.href = `mailto:${address}?subject=${subject}`;
  });
}
