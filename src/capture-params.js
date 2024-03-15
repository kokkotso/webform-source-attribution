export function captureParams() {
  // Capture & parse url parameters
  const queryString = window.location.search;

  // List values for retrieval
  const captureFields = [
    ["utm_source", "utmSource"],
    ["utm_medium", "utmMedium"],
    ["utm_campaign", "utmCampaign"],
    ["gclid", "gclid"],
  ];

  // Store params in sessionStorage
  if (queryString) {
    const urlParams = new URLSearchParams(queryString);

    // Loop through capture fields
    captureFields.forEach((field) => {
      const fieldVal = urlParams.get(field[0]);

      // Add to sessionStorage
      if (fieldVal) {
        sessionStorage.setItem(field[1], fieldVal);
      }
    });
  }
}
