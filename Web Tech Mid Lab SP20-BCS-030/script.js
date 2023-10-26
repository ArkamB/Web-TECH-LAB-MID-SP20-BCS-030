

// Part 1 that is the display of the contents of the cards with the background filled
const DocElements = document.querySelectorAll('.faq');


function toggleBackgroundColor(event) {               // event to get the color of background changed when onclick done
  const faq = event.target.closest('.faq');
  if (faq) {
    faq.classList.toggle('active');
  }
}

DocElements.forEach((faq) => {               //This will get the on click running so that the elements would show as asked
   const toggleButton = faq.querySelector('.faq-toggle');
  toggleButton.addEventListener('click', toggleBackgroundColor);
});











  
  