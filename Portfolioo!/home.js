const popup = document.getElementById('popup')
const starButton = document.getElementById('starButton')
const closeButton = document.getElementById('closeButton')

starButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)

function openPopup() {
    const rect = starButton.getBoundingClientRect()

    popup.style.display = "block";
    popup.style.visibility = "hidden";

    const popupHeight = popup.offsetHeight;
    const popupWidth = popup.offsetWidth;
    const buttonWidth = rect.width

    popup.style.top = rect.top + window.scrollY - popupHeight + 20 + "px";

    popup.style.left = rect.left + buttonWidth + "px";

    popup.style.visibility = "visible";
}

function closePopup() {
    popup.style.display = "none";
}