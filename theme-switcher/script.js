// Get elements
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");
const body = document.body;
const buttons = [lightBtn, darkBtn, blueBtn];

// Function to remove active highlight
function clearActive() {
    buttons.forEach(btn => btn.classList.remove("active"));
}

// Add smooth transition
body.style.transition = "background-color 0.4s, color 0.4s";

// Light Mode
lightBtn.addEventListener("click", () => {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    clearActive();
    lightBtn.style.border = "2px solid black";
});

// Dark Mode
darkBtn.addEventListener("click", () => {
    body.style.backgroundColor = "#222";
    body.style.color = "white";
    clearActive();
lightBtn.classList.add("active");
});

// Blue Mode
blueBtn.addEventListener("click", () => {
    body.style.backgroundColor = "#002169";
    body.style.color = "white";
    clearActive();
    blueBtn.style.border = "2px solid #9b559f";
});
