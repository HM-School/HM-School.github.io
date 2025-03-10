document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".nav-menu");
    const navWrapper = document.querySelector(".nav-wrapper");

    if (navMenu && navWrapper) {
        navMenu.addEventListener("mouseover", function () {
            console.log("Hovered over nav-menu");
            navWrapper.classList.add("active");
        });

        navMenu.addEventListener("mouseout", function (event) {
            console.log("Mouse left nav-menu or child");
            if (!navMenu.contains(event.relatedTarget)) {
                console.log("Removed active class");
                navWrapper.classList.remove("active");
            }
        });
    } else {
        console.error("nav-menu or nav-wrapper not found in the DOM");
    }
});
