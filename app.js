const toggler = document.querySelector(".navbar-toggler");
const icon = document.getElementById("toggler-icon");

const overlay = document.getElementById("overlay");

const menuIcon = "assets/images/icon-menu.svg";
const closeIcon = "assets/images/icon-menu-close.svg";

const collapseElement = document.getElementById("navbarTogglerDemo02");

collapseElement.addEventListener("show.bs.collapse", () => {
    icon.src = closeIcon;
    overlay.style.display = "block";

});

collapseElement.addEventListener('hide.bs.collapse', () => {
    icon.src = menuIcon;
    overlay.style.display = "none";

});