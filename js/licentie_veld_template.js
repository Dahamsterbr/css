document.addEventListener("DOMContentLoaded", function () {
    const veldTypeField = document.getElementById("id_veld_type");
    const booleanField = document.getElementById("id_default_boolean").parentElement;
    const integerField = document.getElementById("id_default_integer").parentElement;
    const textField = document.getElementById("id_default_text").parentElement;

    function updateFields() {
        const veldType = veldTypeField.value;

        // Toon of verberg velden afhankelijk van het gekozen veld_type
        if (veldType === "boolean") {
            booleanField.style.display = "block";
            integerField.style.display = "none";
            textField.style.display = "none";
        } else if (veldType === "integer") {
            booleanField.style.display = "none";
            integerField.style.display = "block";
            textField.style.display = "none";
        } else if (veldType === "text") {
            booleanField.style.display = "none";
            integerField.style.display = "none";
            textField.style.display = "block";
        } else {
            booleanField.style.display = "none";
            integerField.style.display = "none";
            textField.style.display = "none";
        }
    }

    veldTypeField.addEventListener("change", updateFields);
    updateFields();  // Initieel veldtype controleren
});
