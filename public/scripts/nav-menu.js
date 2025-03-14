document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[popup-trigger]").forEach(triggerElement => {
        const targetClass = triggerElement.getAttribute("popup-trigger");
        const targetElements = document.querySelectorAll(`.${targetClass}`);

        if (targetElements.length > 0) {
            const showElements = () => targetElements.forEach(el => el.style.display = "block");
            const hideElements = () => targetElements.forEach(el => el.style.display = "none");

            triggerElement.addEventListener("mouseenter", showElements);
            triggerElement.addEventListener("mouseleave", hideElements);
            
            targetElements.forEach(target => {
                target.addEventListener("mouseenter", showElements);
                target.addEventListener("mouseleave", hideElements);
            });

            // Ensure they start hidden
            hideElements();
        }
    });
});
