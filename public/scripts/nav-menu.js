const nav_wrapper = document.querySelector('.nav-wrapper');
const navmenu = document.querySelector('.nav-menu');



navmenu.addEventListener('click', () => {
    nav_wrapper.classList.add('active');
});

navmenu.addEventListener('click', () => {
    nav_wrapper.classList.remove('active');
});
