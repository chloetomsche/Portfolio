const mainContent = document.querySelector('.main-content');
const workItems = document.querySelectorAll('.work-item');
const contents = document.querySelectorAll('.work-content');


workItems.forEach(item => {
    item.addEventListener('click', () => {

        // Get related content ID
        const contentId = item.getAttribute('data-content');
        const content = document.getElementById(contentId);

        //Hides everything
        document.body.classList.add('content-open');
        mainContent.classList.remove('visible');
        mainContent.classList.add('hidden');

        contents.forEach(content => {
          content.classList.remove('active');
          content.style.display = 'none';
        });
        
        content.style.display = 'block';

        setTimeout(() => {
          content.classList.add('active');

          //Fade-in for img inside grid3
          const grid = content.querySelector('.grid3');
          const images = grid.querySelectorAll('img');

          images.forEach((img, index) => {
            
            img.classList.add('fade');
          });
        }, 10);
    });

    //Back Button
    const backButtons = document.querySelectorAll('.backBtn');
    backButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.closest('.work-content');
        content.classList.remove('active');
        setTimeout(() => {
          content.style.display = 'none';
        }, 500);
        
        document.body.classList.remove('content-open');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('visible');
      });
    });
});



//Typing animation
const prototypes = "App Prototypes";
const design = "Graphic Design";
const campaigns = "Advertising Campaigns";
const output1 = document.getElementById("heading1");
const output2 = document.getElementById('heading2');
const output3 = document.getElementById('heading3');
const headerElements = document.querySelectorAll('.header h1');

//Function to simulate keyboard is being typed on
function simulateTyping(text, element, delay = 350, callback) {
    let index = 0;

    const interval = setInterval(() => {
        // code here runs every 250ms until text is fully typed out
        if (index >= text.length) {
            clearInterval(interval);
            if (callback) callback();
            return;
        }
        const char = text[index];
        const upperChar = char.toUpperCase();

        if (text[index] === 0) {
          element.textContent += upperChar;
          index++;

        } else {
          element.textContent += char;
          index++;
        }
  
    }, delay);
}

//Observes when each header comes into view
const headerObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      const headerElement = entry.target;
      if (headerElement === output1) {
        simulateTyping(prototypes, headerElement, 150);
      } else if (headerElement === output2) {
        simulateTyping(design, headerElement, 150);
      } else if (headerElement === output3) {
        simulateTyping(campaigns, headerElement, 150);
      }
      observer.unobserve(headerElement);
      
    }
  });
}, { threshold: 0.8 });

//Checks to see if there's headers to be observed
if (headerElements.length > 0) {
  headerElements.forEach((header) => {
    headerObserver.observe(header);
  });
} else {
  console.log("Header elements not found");
}


//Slideshow
function initSlideshow(modalId) {
  const modal = document.getElementById(modalId);
  const slides = modal.querySelectorAll('.slide');
  
  let currentSlide = 0;
  const totalSlides = slides.length;

  const backButton = modal.querySelector('#back');
  const nextButton = modal.querySelector('#next');

  //Next Button Logic
  nextButton.addEventListener('click', () => {
    slides[currentSlide].style.opacity = 0;
    currentSlide++;

    if (currentSlide >= totalSlides) {
    currentSlide = 0;
    }
    slides[currentSlide].style.opacity = 1;

  });

  //Back Button Logic
  backButton.addEventListener('click', () => {
    slides[currentSlide].style.opacity = 0;
    currentSlide--;

    if (currentSlide < 0) {
    currentSlide = 0;
    }
    slides[currentSlide].style.opacity = 1;

  });
}


// Initialize slideshow for each modal
initSlideshow('content7'); // Philadelphia modal
initSlideshow('content8') // Kraft modal
initSlideshow('content9'); // Tru Fru modal