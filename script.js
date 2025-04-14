const themeToggleButton = document.getElementById("theme-toggle");
const themeToggleIcon = themeToggleButton.querySelector("img");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
	body.classList.toggle("light-mode");
	if (body.classList.contains("light-mode")) {
		themeToggleIcon.src = "./assets/images/icon-moon.svg"; // Dark mode icon
		themeToggleIcon.alt = "Dark Mode Icon";
	} else {
		themeToggleIcon.src = "./assets/images/icon-sun.svg"; // Light mode icon
		themeToggleIcon.alt = "Light Mode Icon";
	}
});

const allButton = document.getElementById("all-btn");
const activeButton = document.getElementById("active-btn");
const inactiveButton = document.getElementById("inactive-btn");
const cards = document.querySelectorAll(".extensioncards");

allButton.addEventListener("click", () => {
	// Show all cards
	cards.forEach((card) => {
		card.style.display = "flex"; // Ensure all cards are visible
	});
});

activeButton.addEventListener("click", () => {
	// Show only cards with toggle ON
	cards.forEach((card) => {
		const toggle = card.querySelector(".toggle-switch");
		if (toggle.checked) {
			card.style.display = "flex"; // Show active cards
		} else {
			card.style.display = "none"; // Hide inactive cards
		}
	});
});

inactiveButton.addEventListener("click", () => {
	// Show only cards with toggle OFF
	cards.forEach((card) => {
		const toggle = card.querySelector(".toggle-switch");
		if (!toggle.checked) {
			card.style.display = "flex"; // Show inactive cards
		} else {
			card.style.display = "none"; // Hide active cards
		}
	});
});
