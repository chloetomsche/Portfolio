const snapPhoto = document.getElementById('snapPhoto');
const images = [
    document.getElementById('image1'),
    document.getElementById('image2'),
    document.getElementById('image3')
];
let clickCount = 0; // Keeps track of which image should animate next

function printImage() {
    if (clickCount < images.length) {
        const currentImage = images[clickCount];

        // Make image visible before transition
        currentImage.style.visibility = 'visible';
        currentImage.style.opacity = '1';

        // Add sliding class based on click count
        if (clickCount === 0) {
            currentImage.classList.add('slide-down-one');
            window.scrollBy({ top: 250, behavior: 'smooth' });
    
        } else if (clickCount === 1) {
            currentImage.classList.add('slide-down-two');
            window.scrollBy({ top: 450, behavior: 'smooth' });
        
        } else if (clickCount === 2) {
            currentImage.classList.add('slide-down-three');
            window.scrollBy({ top: 800, behavior: 'smooth' });
          
        }

        // Scroll down smoothly with the image
      

        // Move to the next image on next click
        clickCount++;
    }
}

snapPhoto.addEventListener('click', printImage);
