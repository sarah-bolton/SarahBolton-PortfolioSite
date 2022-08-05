const hamburgerMenu = document.querySelector(".hamburgerMenu");
const sideNav = document.querySelector(".sideNav");
const closeBtn = document.querySelector(".closeBtn");

hamburgerMenu.addEventListener('click', function (e) {
    e.preventDefault()
    hamburgerMenu.classList.toggle("active");
    sideNav.classList.toggle("active");
})

closeBtn.addEventListener('click', function (e) {
    e.preventDefault()
    hamburgerMenu.classList.remove("active");
    sideNav.classList.remove("active");
})