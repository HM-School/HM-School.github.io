document.addEventListener("DOMContentLoaded", async () => {
    const scriptTag = document.getElementById("nav-menu-injector");
    if (!scriptTag) {
        console.error("Error: Script tag with ID 'nav-menu-injector' not found.");
        return;
    }

    const htmlSource = scriptTag.getAttribute("html-injection");
    if (!htmlSource) {
        console.error("Error: No 'html-injection' attribute found.");
        return;
    }

    try {
        const response = await fetch(htmlSource);
        if (!response.ok) throw new Error(`Failed to load HTML from ${htmlSource}`);

        const htmlText = await response.text();
        const wrapper = document.createElement("div");
        wrapper.innerHTML = htmlText;

        scriptTag.parentNode.insertBefore(wrapper, scriptTag);
    } catch (error) {
        console.error("HTML Injection Error:", error.message);
    }
});