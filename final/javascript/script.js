document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CALCULATOR FUNCTION
    // =========================

    const calcBtn = document.getElementById("calcBtn");
    const scoreText = document.getElementById("scoreText");
    const classification = document.querySelector(".classification");

    if (calcBtn) {
        calcBtn.addEventListener("click", function () {

            const energy = Math.min(Math.max(Number(document.getElementById("energy").value), 0), 100);
            const recycling = Math.min(Math.max(Number(document.getElementById("recycling").value), 0), 100);
            const renewable = Math.min(Math.max(Number(document.getElementById("renewable").value), 0), 100);
            const waste = Math.min(Math.max(Number(document.getElementById("waste").value), 0), 100);
            const water = Math.min(Math.max(Number(document.getElementById("water").value), 0), 100);

            if (
                isNaN(energy) || isNaN(recycling) || isNaN(renewable) ||
                isNaN(waste) || isNaN(water)
            ) {
                scoreText.textContent = "Eco Score: Please enter all values";
                classification.textContent = "";
                return;
            }

            const score =
                (energy * 0.2) +
                (recycling * 0.25) +
                (renewable * 0.25) +
                (waste * 0.15) +
                (water * 0.15);

            const finalScore = Math.round(score);

            scoreText.textContent = `Eco Score: ${finalScore}`;

            if (finalScore >= 80) {
                classification.textContent = "Excellent 🌱 Highly Sustainable";
            } else if (finalScore >= 60) {
                classification.textContent = "Good 👍 Room for Improvement";
            } else if (finalScore >= 40) {
                classification.textContent = "Average ⚠️ Needs Improvement";
            } else {
                classification.textContent = "Low Impact ❗ Major Changes Needed";
            }

        });
    }


    // =========================
    // CONTACT FORM VALIDATION
    // =========================

    const form = document.querySelector("form");

    if (form) {

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let errors = [];

            [nameInput, emailInput, messageInput].forEach(input => {
                input.style.border = "1px solid #ccc";
            });

            if (nameInput.value.trim() === "") {
                errors.push("Name is required");
                nameInput.style.border = "2px solid red";
            }

            if (!emailInput.value.includes("@") || emailInput.value.trim() === "") {
                errors.push("Valid email is required");
                emailInput.style.border = "2px solid red";
            }

            if (messageInput.value.trim().length < 10) {
                errors.push("Message must be at least 10 characters");
                messageInput.style.border = "2px solid red";
            }

            let feedback = document.getElementById("formFeedback");

            if (!feedback) {
                feedback = document.createElement("p");
                feedback.id = "formFeedback";
                form.appendChild(feedback);
            }

            if (errors.length > 0) {
                feedback.style.color = "red";
                feedback.textContent = errors.join(" | ");
            } else {
                feedback.style.color = "green";
                feedback.textContent = "Message sent successfully! We’ll get back to you soon.";
                form.reset();
            }
        });
    }


    // =========================
    // PRODUCT FILTER SYSTEM
    // =========================

    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const productCards = document.querySelectorAll(".product-grid .card");

if (filterButtons.length > 0 && productCards.length > 0) {

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {

            const filter = this.dataset.filter;

            productCards.forEach(card => {
                const category = card.dataset.category;

                if (filter === "all" || category === filter) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });

        });
    });

}

});