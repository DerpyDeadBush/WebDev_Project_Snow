const motionButton = document.getElementById("motion-toggle");

motionButton.addEventListener("click", function() {
    const isReduced = document.body.classList.toggle("reduced-motion");

    motionButton.textContent = isReduced ? "◉" : "◉";
    motionButton.setAttribute("aria-pressed", isReduced);
    motionButton.setAttribute(
        "aria-label",
        isReduced ? "Turn off reduced motion" : "Turn on reduced motion"
    );
});

// Dark Mode Button
const darkButton = document.getElementById("dark-mode-toggle");

darkButton.addEventListener("click", function() {
    const isDark = document.body.classList.toggle("dark-mode");

    darkButton.textContent = isDark ? "☀" : "☾";
    darkButton.setAttribute("aria-pressed", isDark);
    darkButton.setAttribute(
        "aria-label",
        isDark ? "Turn off dark mode" : "Turn on dark mode"
    );
});

// Enable mouse wheel scrolling for the image gallery
document.querySelectorAll(".image-gallery").forEach(gallery => {
    gallery.addEventListener("wheel", event => {
        // Convert vertical scrolling into horizontal scrolling
        if (event.deltaY !== 0) {
            event.preventDefault();
            gallery.scrollLeft += event.deltaY;
        }
    }, { passive: false });
});