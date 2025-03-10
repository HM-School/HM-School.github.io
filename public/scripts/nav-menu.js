document.addEventListener("DOMContentLoaded", function () {
    const navMenu = document.querySelector(".nav-menu");
    const navWrapper = document.querySelector(".nav-wrapper");

    if (navMenu && navWrapper) {
        const addActiveClass = () => navWrapper.classList.add("active");
        const removeActiveClass = () => navWrapper.classList.remove("active");

        navMenu.addEventListener("mouseenter", addActiveClass);
        navMenu.addEventListener("mouseleave", removeActiveClass);
        navWrapper.addEventListener("mouseenter", addActiveClass);
        navWrapper.addEventListener("mouseleave", removeActiveClass);
    }
});
