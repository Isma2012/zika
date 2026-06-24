window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if(loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1200);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener("click",function(e) {
        e.preventDefault();
        const target=document.querySelector(this.getAttribute("href"));
        if(target) {
            target.scrollIntoView( {
                behavior:"smooth"
            });
        }
    });
});

const imageBox = document.querySelector(".image-box");

if(imageBox) {
    let angle = 0;
    setInterval(()=> {
        angle += 0.02;
        imageBox.style.transform = `translateY(${Math.sin(angle)*10}px)`;
    },20);
}

window.addEventListener("DOMContentLoaded",()=> {
    document.body.classList.add("fade-up");
});

console.log("%c👋 Halo Pak Akbar!",
"font-size:22px;color:#ec4899;font-weight:bold;");

console.log("%cWebsite Portfolio dibuat oleh Isma Azikayla Ni'ma Lbs",
"font-size:15px;color:#8b5cf6;");

console.log("%cTerima kasih sudah melihat source code saya 😊",
"font-size:14px;color:#38bdf8;");

document.querySelectorAll("img").forEach(img=> {
    img.setAttribute("draggable","false");
});

console.log("Portfolio Loaded Successfully 🚀");

const text = "Isma Azikayla Ni'ma Lbs";
const typingName = document.getElementById("typing-name");

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        typingName.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingName.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach(el => observer.observe(el));

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});