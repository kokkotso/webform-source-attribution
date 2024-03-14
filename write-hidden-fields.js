// Extract all hidden form fields on page
function writeHiddenFields() {

const hiddenFields = document.querySelectorAll("input[type=hidden]");

// Query session storage
if (hiddenFields) {
    const pageUrl = document.location.href;

    // Loop through hidden fields
    hiddenFields.forEach((hiddenField) => {
        const fieldName = hiddenField.name;
        const fieldVal = sessionStorage.getItem(fieldName);

        // Make sure all hidden fields are added to captureFields array in capture-params.js

        if (fieldName === "pageUrl") {
            hiddenField.value = pageUrl;
            return;
        }

        if (fieldVal) {
            hiddenField.value = fieldVal;
        }
    })
}
}

Window.onload = writeHiddenFields();