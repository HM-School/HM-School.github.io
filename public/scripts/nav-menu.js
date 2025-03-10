document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".nav-menu");
    const navWrapper = document.querySelector(".nav-wrapper");

    if (navMenu && navWrapper) {
        navMenu.addEventListener("mouseenter", function () {
            navWrapper.classList.add("nav-wrapper-active");
        });

        navMenu.addEventListener("mouseleave", function () {
            navWrapper.classList.remove("nav-wrapper-active");
        });
    }
});
