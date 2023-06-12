const readMoreBtn = document.querySelector('.btn');
readMoreBtn.addEventListener('click', () => {
  console.log('Read More button clicked');
});

 
const navLinks = document.querySelectorAll('.link a');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    console.log(`Navigation link clicked: ${target}`);
 
  });
});

 
const galleryLink = document.querySelector('.galery a');
galleryLink.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target.getAttribute('href');
  console.log(`Watch Gallery link clicked: ${target}`);
   
});

 
const destinationNav = document.querySelector('.destination__nav');
const destinationNavArrows = destinationNav.querySelectorAll('span');
destinationNavArrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    console.log('See next destination');
  });
});

 
const destinationCards = document.querySelectorAll('.destination__card');
destinationCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Read more about this destination');
    
  });
});

 
const feedbackForm = document.querySelector('.feedback__form');
feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Submitted !!!');
   
});
