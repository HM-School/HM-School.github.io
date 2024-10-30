const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('#btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const submitBtn = document.querySelector('.btn');



registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

submitBtn.addEventListener('click', async () => {
    try {
        // Adjust this path according to your actual API endpoint
        const response = await fetch('../c#/Login-Register/Register/user'); 
        const test = await response.text();

        // Define the test1 function to check for null or empty values
        function test1(text) {
            if (text === null || text === "") {
                return "The value could not be retrieved";
            } else {
                return text;
            }
        }

        console.log(test1(test));
    } catch (error) {
        console.error("Failed to load data:", error);
    }
});
