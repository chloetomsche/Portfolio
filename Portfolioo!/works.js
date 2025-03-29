// Popup
const popup = document.getElementById('popup')
const closeBtn = document.getElementById('closeBtn')
const processBtn = document.getElementById('processBtn')

processBtn.addEventListener('click', displayPopup)
closeBtn.addEventListener('click', closePopup)

function displayPopup() {
  const rect = processBtn.getBoundingClientRect();

  popup.style.display = "block";
  popup.style.visibility = "hidden"

  const popupHeight = popup.offsetHeight;

  popup.style.top = rect.top + window.scrollY - popupHeight -50 + "px";
  popup.style.left = rect.left + "px";

  popup.style.visibility = "visible";
}

function closePopup() {
  popup.style.display = "none";
}

// Popup 2
const popup2 = document.getElementById('popup2')
const closeBtn2 = document.getElementById('closeBtn2')
const processBtn2 = document.getElementById('processBtn2')
//Get process button's position


processBtn2.addEventListener('click', displayPopup2)
closeBtn2.addEventListener('click', closePopup2)

function displayPopup2() {
  const rect = processBtn2.getBoundingClientRect();

  popup2.style.display = "block";
  popup2.style.visibility = "hidden";

  const popupHeight = popup2.offsetHeight;

  popup2.style.top = rect.top + window.scrollY - popupHeight - 50 + "px";
  popup2.style.left = rect.left + "px";

  popup2.style.visibility = "visible";
}

function closePopup2() {
  popup2.style.display = "none";
}