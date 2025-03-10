document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".nav-menu");
    const navWrapper = document.querySelector(".nav-wrapper");

    if (navMenu && navWrapper) {
        navMenu.addEventListener("mouseover", function () {
            navWrapper.classList.add("nav-wrapper-active");
        });

        navMenu.addEventListener("mouseout", function (event) {
            if (!navMenu.contains(event.relatedTarget)) {
                navWrapper.classList.remove("nav-wrapper-active");
            }
        });
    }
});
