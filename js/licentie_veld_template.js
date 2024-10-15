document.addEventListener("DOMContentLoaded", function () {
    const veldTypeField = document.getElementById("id_veld_type");
    const booleanField = document.getElementById("id_default_boolean").parentElement;
    const integerField = document.getElementById("id_default_integer").parentElement;
    const textField = document.getElementById("id_default_text").parentElement;

    function updateFields() {
        const veldType = veldTypeField.value;

        // Toon of verberg velden afhankelijk van het gekozen veld_type
        if (veldType === "boolean") {
            field-default_boolean.style.display = "block";
            field-default_integer.style.display = "none";
            field-default_text.style.display = "none";
        } else if (veldType === "integer") {
            field-default_boolean.style.display = "none";
            field-default_integer.style.display = "block";
            field-default_text.style.display = "none";
        } else if (veldType === "text") {
            field-default_boolean.style.display = "none";
            field-default_integer.style.display = "none";
            field-default_text.style.display = "block";
        } else {
            field-default_boolean.style.display = "none";
            field-default_integer.style.display = "none";
            field-default_text.style.display = "none";
        }
    }

    veldTypeField.addEventListener("change", updateFields);
    updateFields();  // Initieel veldtype controleren
});
