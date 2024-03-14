// Extract all hidden form fields on page
const hiddenFields = document.querySelectorAll("input[type=hidden]");

// Query session storage
if (hiddenFields) {
    const pageUrl = document.location.href;

    // Loop through hidden fields
    hiddenFields.forEach((hiddenField) => {
        const fieldName = hiddenField.name;
        const fieldVal = sessionStorage.getItem(fieldName);

        if (fieldName === "pageUrl") {
            hiddenField.value = pageUrl;
            return;
        }

        if (fieldVal) {
            hiddenField.value = fieldVal;
        }
    })
}