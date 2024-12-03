document.addEventListener("DOMContentLoaded", function () {
    const xpBarFill = document.querySelector(".xp-bar-fill");
    if (xpBarFill) {
        const currentXP = parseInt(xpBarFill.dataset.currentXp, 10);
        const maxXP = parseInt(xpBarFill.dataset.maxXp, 10);
        const percentage = (currentXP / maxXP) * 100;
        xpBarFill.style.width = `${percentage}%`;
    }
});
