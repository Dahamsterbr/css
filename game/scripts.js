document.addEventListener("DOMContentLoaded", function () {
    const xpBarFill = document.querySelector(".xp-bar-fill");
    if (xpBarFill) {
        const currentXP = parseInt(xpBarFill.dataset.currentXp, 10);
        const maxXP = parseInt(xpBarFill.dataset.maxXp, 10);
        const percentage = (currentXP / maxXP) * 100;
        xpBarFill.style.width = `${percentage}%`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalButton");
    const closeModalButton = document.getElementById("closeModalButton");
    const modal = document.getElementById("monsterModal");
    // Open Modal
    openModalButton.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });
    // Close Modal
    closeModalButton.addEventListener("click", function () {
        modal.classList.add("hidden");
    });
    // Close Modal when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
        }
    });
});
