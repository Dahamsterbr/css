document.addEventListener("DOMContentLoaded", function () {
    const veldTypeField = document.getElementById("id_veld_type");
    const booleanField = document.querySelector(".field-default_boolean");
    const integerField = document.querySelector(".field-default_integer");
    const textField = document.querySelector(".field-default_text");

    function updateFields() {
        const veldType = veldTypeField.value;

        // Toon of verberg velden afhankelijk van het gekozen veld_type
        if (veldType === "boolean") {
            booleanField.style.display = "block";
            booleanField.classList.remove("hidden");

            integerField.style.display = "none";
            integerField.classList.add("hidden");

            textField.style.display = "none";
            textField.classList.add("hidden");
        } else if (veldType === "integer") {
            booleanField.style.display = "none";
            booleanField.classList.add("hidden");

            integerField.style.display = "block";
            integerField.classList.remove("hidden");

            textField.style.display = "none";
            textField.classList.add("hidden");
        } else if (veldType === "text") {
            booleanField.style.display = "none";
            booleanField.classList.add("hidden");

            integerField.style.display = "none";
            integerField.classList.add("hidden");

            textField.style.display = "block";
            textField.classList.remove("hidden");
        } else {
            // Verberg alle velden als er geen veld_type is gekozen
            booleanField.style.display = "none";
            booleanField.classList.add("hidden");

            integerField.style.display = "none";
            integerField.classList.add("hidden");

            textField.style.display = "none";
            textField.classList.add("hidden");
        }
    }

    veldTypeField.addEventListener("change", updateFields);
    updateFields();  // Initieel veldtype controleren en velden verbergen of tonen
});
