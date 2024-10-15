document.addEventListener("DOMContentLoaded", function () {
    function updateFields() {
        // Zoek naar alle inline velden
        document.querySelectorAll("[id^='id_velden-']").forEach(function (field) {
            // Haal de veldtype value op
            const veldType = document.querySelector(`#${field.id.replace(/-(waarde_boolean|waarde_integer|waarde_text).*/, '-veld_type')}`).value;

            // Haal de bijbehorende boolean, integer en text velden op
            const booleanField = document.querySelector(`#${field.id.replace(/(waarde_.+)/, 'waarde_boolean')}`).parentElement;
            const integerField = document.querySelector(`#${field.id.replace(/(waarde_.+)/, 'waarde_integer')}`).parentElement;
            const textField = document.querySelector(`#${field.id.replace(/(waarde_.+)/, 'waarde_text')}`).parentElement;

            // Toon of verberg velden afhankelijk van veld_type
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
        });
    }

    // Voeg een event listener toe om velden bij te werken bij verandering
    document.querySelectorAll("[id^='id_velden-'][id$='-veld_type']").forEach(function (veldTypeField) {
        veldTypeField.addEventListener("change", updateFields);
    });

    // Roep de updateFields functie aan bij pagina load
    updateFields();
});
