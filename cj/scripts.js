// Custom JavaScript code here

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

$(document).ready(function () {
  // Smooth scrolling to sections
  $('a.nav-link').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });

  // Scroll to Our School section on button click
  $('#school-btn').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate(
      {
        scrollTop: $('#school').offset().top
      },
      0
    );
  });

  const video = document.getElementById('schoolVideo');
  const playButton = document.getElementById('playButton');
  const videoOverlay = document.getElementById('videoOverlay');

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      playButton.style.display = 'none';
      videoOverlay.style.display = 'none';
    } else {
      video.pause();
    }
  });

  video.addEventListener('ended', () => {
    playButton.style.display = 'block';
    videoOverlay.style.display = 'block';
  });

  // Add parallax effect to the background image
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('header').css('background-position-y', -(scrollTop / 0) + 'px');
  });

  // Form submission
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form validation here

    // Simulate form submission success
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    successMessage.textContent = 'Form submitted successfully!';

    form.reset();
  });

  // Add parallax effect to the background image
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});