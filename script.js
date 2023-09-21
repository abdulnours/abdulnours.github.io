const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const panel = accordion.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            accordion.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            accordion.classList.add("active");
        }
    });
});