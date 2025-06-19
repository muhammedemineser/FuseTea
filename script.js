document.querySelectorAll("body").forEach(e => {
    e.style.opacity="0";

    e.addEventListener(onload, ()=> {
        e.style.transition="0.1s ease";
        e.style.opacity="1";
    })
})

window.addEventListener("DOMContentLoaded", () => {
    // Animation für Bilder
    document.getElementById("pic1").style.opacity = "0";
    document.getElementById("pic1").style.transition = "opacity 0.3s ease";
    document.getElementById("pic2").style.opacity = "0";
    document.getElementById("pic2").style.transition = "opacity 0.3s ease";
    document.getElementById("pic3").style.opacity = "0";
    document.getElementById("pic3").style.transition = "opacity 0.3s ease";
    document.getElementById("pic4").style.opacity = "0";
    document.getElementById("pic4").style.transition = "opacity 0.3s ease";


    for (let i = 1; i <= 4; i++) {
        setTimeout(() => {
            document.getElementById("pic" + i).style.opacity = "1";
        }, 300);
    }


//Animation für Buchstaben
document.querySelectorAll(".cartoonText").forEach(e=> {
    const text = e.innerHTML;
    e.textContent="";

    text.split(/(<br\s*\/?>|\s)/).forEach((t, i)=> {
    const span = document.createElement("span");
    e.appendChild(span);
    span.textContent = t;
    if (t === "\n" || t === "\r" || t === "\r\n" || t === "<br>") {
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
    }, i *10)
})
})
});


