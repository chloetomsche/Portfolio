

function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Observer for slide-in animation
const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        
        if (entry.isIntersecting) {
            
            setTimeout(() => {
                entry.target.classList.add('showSlideIn');
            }, index * 300);

        } else {
            entry.target.classList.remove('showSlideIn');
        }
    });
}, { threshold: 0.1});

// Select elements for slide-in animation
const slideInElements = document.querySelectorAll('.description-container > div');

slideInElements.forEach((el) => {
    if (isInViewport(el)) {
        el.classList.add('showSlideIn');
    } else {
        slideObserver.observe(el);
    }
});

//Keyboard typing animation

const myName = "Chloe Tomsche";
const myTitles = "Designer, Developer, Creative";
const nameOutput = document.getElementById("typed-name");
const titleOutput = document.getElementById("typed-titles")
const allKeys = document.querySelectorAll(".keys, .spacebar");

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

        const keyEl = Array.from(allKeys).find(item => item.dataset.key === upperChar || (char === " " && item.dataset.key === " "));

        if (keyEl) {
            keyEl.classList.add("pressed");
            setTimeout(() => {
                keyEl.classList.remove("pressed");
            }, delay - 100);
        }

        element.textContent += char;
        index++;
    }, delay);
}

window.addEventListener("DOMContentLoaded", () => {
    simulateTyping(myName, nameOutput, 175, () => {
        simulateTyping(myTitles, titleOutput, 150);
    });
})