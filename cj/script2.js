var images = Array.from(document.querySelectorAll('.image-container img'));
var maximizedContainer = document.querySelector('.maximized-image-container');
var maximizedImage = maximizedContainer.querySelector('img');
var backButton = maximizedContainer.querySelector('.back-button');
var nextButton = maximizedContainer.querySelector('.next-button');
var closeButton = maximizedContainer.querySelector('.close-button');
var currentIndex = 0;

function openMaximizedImage(image) {
  maximizedImage.src = image.src;
  maximizedContainer.classList.add('active');
}

function closeMaximizedImage() {
  maximizedContainer.classList.remove('active');
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  maximizedImage.src = images[currentIndex].src;
}

function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  maximizedImage.src = images[currentIndex].src;
}

backButton.addEventListener('click', showPreviousImage);
nextButton.addEventListener('click', showNextImage);
closeButton.addEventListener('click', closeMaximizedImage);