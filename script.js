document.querySelectorAll("body").forEach(e => {
    e.style.opacity="0";

    e.addEventListener(onload, ()=> {
        e.style.transition="0.1s ease";
        e.style.opacity="1";
    })
})

window.addEventListener("DOMContentLoaded", () => {
    
//Animation für Buchstaben
document.querySelectorAll(".cartoonText").forEach(e=> {
    const text = e.textContent;
    e.textContent="";

    text.split("").forEach((t, i)=> {
    const span = document.createElement("span");
    e.appendChild(span);
    span.textContent = t;
    if (t==="\n") {
        span.innerHTML= "<br>";
    }
    else if (t===" ") {
        span.innerHTML= "&nbsp;";
    }
    span.style.opacity="0";
    span.style.transition="opacity 0.3s ease";

    setTimeout (() => {
        span.style.opacity="1";
        span.classList.add("animation");
    }, i *100)
})
})
});

