// =========================
// FinWise JavaScript
// =========================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header shadow & background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.12)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".card, .plan, .review, .why-image, .why-text, .hero-text, .hero-image"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }

    });

}

// Initial hidden state
revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Add style for active link
const style = document.createElement("style");

style.innerHTML = `
nav ul li a.active{
    color:#0d6efd;
    font-weight:700;
}
`;

document.head.appendChild(style);

// Button Click Effect
document.querySelectorAll("button, .btn, .btn2, .nav-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform = "scale(0.95)";

        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);

    });

});

// Welcome message
window.addEventListener("load", () => {

    setTimeout(() => {
        console.log("Welcome to FinWise 🚀");
    }, 500);

});
// SIGN UP

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit", function(e){

    e.preventDefault();


    let user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };


    localStorage.setItem("finwiseUser", JSON.stringify(user));


    alert("Account created successfully!");

    window.location.href="login.html";


});

}



// LOGIN

const loginForm = document.getElementById("loginForm");


if(loginForm){

loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    let savedUser = JSON.parse(localStorage.getItem("finwiseUser"));


    let email = document.getElementById("loginEmail").value;

    let password = document.getElementById("loginPassword").value;



    if(savedUser && 
       email === savedUser.email &&
       password === savedUser.password){

        alert("Login successful!");

        window.location.href="dashboard.html";


    }

    else{

        alert("Invalid email or password!");

    }


});

}