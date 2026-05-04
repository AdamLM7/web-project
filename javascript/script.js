/* Scouter Power Level System */

const scanBtn = document.getElementById("scanBtn");
const classificationText = document.querySelector(".classification");
const powerText = document.getElementById("powerText");

scanBtn.addEventListener("click", () => {

    const strength = parseInt(document.getElementById("strength").value) || 0;
    const speed = parseInt(document.getElementById("speed").value) || 0;
    const endurance = parseInt(document.getElementById("endurance").value) || 0;
    const energy = parseInt(document.getElementById("energy").value) || 0;
    const stamina = parseInt(document.getElementById("stamina").value) || 0;

    const powerLevel = strength + speed + endurance + energy + stamina;

    
    powerText.textContent = "Scanning energy signature...";
    classificationText.textContent = "Calibrating scouter...";

    setTimeout(() => {

        let classification = "";

        if (powerLevel < 100) {
            classification = "Low-tier fighter";
        } else if (powerLevel < 300) {
            classification = "Trained warrior";
        } else if (powerLevel < 600) {
            classification = "Elite combatant";
        } else if (powerLevel < 1000) {
            classification = "Planetary threat";
        } else if (powerLevel < 5000) {
            classification = "God-tier entity";
        } else if (powerLevel < 9000) {
            classification = "Mythic-level anomaly";
        } else {
            classification = "⚠️ IT'S OVER 9000! ⚠️";
        }

        // 👇 FINAL OUTPUT
        powerText.textContent = `Power Level: ${powerLevel.toLocaleString()}`;
        classificationText.textContent = `${classification} | Reading stabilized`;

        
        if (powerLevel >= 9000) {
            document.body.style.background = "darkred";
        }

    }, 1000);
});