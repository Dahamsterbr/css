document.addEventListener("DOMContentLoaded", function () {
    const veldTypeField = document.getElementById("id_veld_type");
    const booleanFieldContainer = document.querySelector(".field-default_boolean");
    const integerFieldContainer = document.querySelector(".field-default_integer");
    const textFieldContainer = document.querySelector(".field-default_text");

    const booleanField = document.getElementById("id_default_boolean");
    const integerField = document.getElementById("id_default_integer");
    const textField = document.getElementById("id_default_text");

    function updateFields() {
        const veldType = veldTypeField.value;

        // Toon of verberg de veldcontainers en verwijder de hidden class
        if (veldType === "boolean") {
            booleanFieldContainer.style.display = "block";
            booleanFieldContainer.classList.remove("hidden");
            integerFieldContainer.style.display = "none";
            textFieldContainer.style.display = "none";

            // Zorg ervoor dat de juiste veldtypen zichtbaar zijn
            booleanField.type = "checkbox";
            integerField.type = "hidden";
            textField.type = "hidden";
        } else if (veldType === "integer") {
            booleanFieldContainer.style.display = "none";
            integerFieldContainer.style.display = "block";
            integerFieldContainer.classList.remove("hidden");
            textFieldContainer.style.display = "none";

            // Zorg ervoor dat de juiste veldtypen zichtbaar zijn
            booleanField.type = "hidden";
            integerField.type = "number";
            textField.type = "hidden";
        } else if (veldType === "text") {
            booleanFieldContainer.style.display = "none";
            integerFieldContainer.style.display = "none";
            textFieldContainer.style.display = "block";
            textFieldContainer.classList.remove("hidden");

            // Zorg ervoor dat de juiste veldtypen zichtbaar zijn
            booleanField.type = "hidden";
            integerField.type = "hidden";
            textField.type = "text";
        } else {
            // Verberg alle velden als er geen veld_type is gekozen
            booleanFieldContainer.style.display = "none";
            integerFieldContainer.style.display = "none";
            textFieldContainer.style.display = "none";

            // Maak alle velden hidden als er geen veldtype is gekozen
            booleanField.type = "hidden";
            integerField.type = "hidden";
            textField.type = "hidden";
        }
    }

    veldTypeField.addEventListener("change", updateFields);
    updateFields();  // Initieel veldtype controleren
});
