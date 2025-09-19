// Home Page: Learn More Button
const learnMoreBtn = document.getElementById("learnMoreBtn");
if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
        alert("Thanks for clicking! Check out the About page to know more about me.");
    });
}

// Home Page: Animate Box
const animateBoxBtn = document.getElementById("animateBoxBtn");
const box = document.getElementById("box");

if (animateBoxBtn && box) {
    animateBoxBtn.addEventListener("click", () => {
        box.classList.toggle("animate");
    });
}

// Contact Page: Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const feedback = document.getElementById("formFeedback");

        if (name === "" || email === "" || message === "") {
            feedback.textContent = "Please fill in all fields.";
            feedback.style.color = "red";
        } else {
            feedback.textContent = "Message sent successfully!";
            feedback.style.color = "green";
            contactForm.reset();
        }
    });
}

// Example reusable function
function calculateSum(a, b) {
    return a + b;
}
console.log("Example sum:", calculateSum(5, 10));