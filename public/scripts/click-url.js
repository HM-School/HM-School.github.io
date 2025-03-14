document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("click", function (event) {
        let target = event.target.closest(".click-url");
        if (target) {
            let url = target.getAttribute("click_url");
            if (url) {
                window.location.href = url;
            }
        }
    });
});