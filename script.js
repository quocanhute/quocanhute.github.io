document.addEventListener("DOMContentLoaded", function () {
    const displayText = document.getElementById("displayText");

    displayText.addEventListener("click", () => {
        const currentText = displayText.textContent;
        const newText = currentText === "Tap me!!!" ? "Chào cô giáo Vân dễ  thương" : "Tap me!!!";
        displayText.textContent = newText;
    });
});
