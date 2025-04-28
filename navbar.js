// Navbar function
fetch("navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav").innerHTML = data;

    // Gets URL pathname and splits then pop to retrieve the last item (file name you're con)
    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('#nav a').forEach(link => {
        if(link.href.includes(currentPage)) {
            link.classList.add('active');
        }
    });

})
.catch(error => console.error("Error loading navbar", error));


