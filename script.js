// Smooth animation on page load
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "0.8s";

// Typing Effect
const text = "Web Developer | Programmer | AI Enthusiast";
let i = 0;

const typing = document.createElement("h3");
typing.style.color = "#FFD700";
typing.style.marginTop = "15px";

const heroText = document.querySelector(".hero-text");
heroText.appendChild(typing);

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

// Scroll To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#FFD700";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Navbar Background Change
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#000";
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
    } else {
        header.style.background = "#111";
        header.style.boxShadow = "none";
    }
});