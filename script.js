window.addEventListener("DOMContentLoaded", () => {


    // Animation für Bilder
    for (let i = 1; i <= 4; i++) {
        document.getElementById("pic" + i).style.opacity = "0";
        document.getElementById("pic" + i).style.transition = "opacity 0.3s ease";
        document.getElementById("pic" + i).style.willChange = "opacity";
        setTimeout(() => {
            document.getElementById("pic" + i).style.opacity = "1";
        }, 300);
    }


    // Intersection Observer
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = "opacity 0.6s ease";
            entry.target.style.opacity = "1";
            observer.unobserve(entry.target); 
        } else {
            entry.target.style.opacity = "0";
        }
    });
}, { threshold: 0.3 });

// Observe all .cartoonBilder elements
document.querySelectorAll(".cartoonBilder").forEach(box => {
    observer.observe(box);
});

// Animation für Buchstaben
document.querySelectorAll(".cartoonText").forEach(e => {
    const text = e.innerHTML;
    e.textContent = "";

    // Split text and wrap each part in a span
    text.split(/(<br\s*\/?>|\s)/).forEach((t, i) => {
        const span = document.createElement("span");
        if (t === "\n" || t === "\r" || t === "\r\n" || t === "<br>") {
            span.innerHTML = "<br>";
        } else if (t === " ") {
            span.innerHTML = "&nbsp;";
        } else {
            span.textContent = t;
        }
        span.style.opacity = "0";
        span.style.transition = "opacity 0.3s ease";
        e.appendChild(span);
    });

    // Observe the text element
    observer.observe(e);
});

// Add a new IntersectionObserver for .cartoonText to animate letters
const textObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const spans = entry.target.querySelectorAll("span");
            spans.forEach((span, i) => {
                setTimeout(() => {
                    span.style.opacity = "1";
                    span.classList.add("animation");
                }, i * 10);
            });
            textObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".cartoonText").forEach(e => {
    textObserver.observe(e);
});


















//onload
});


