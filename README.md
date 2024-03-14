# Webform Source Attribution
These are small javascript snippets to capture URL tracking parameters (such as UTM source, medium, & campaign), store them in the browser's session storage object, and write them to hidden fields on webforms. The goal of this utility is to better attribute business objectives and outcomes to paid & organic web traffic.

## How to Use
Copy code inside `capture-params.js` to all pages on the website. This snippet extracts parameters - the part of the URL after the path that is preceded by `?`, e.g. example.com/page?**utm_source=testSource** - and pushes it into sessionStorage. 

Copy code inside `write-hidden-fields.js` to pages with webforms on the website. This snippet queries sessionStorage and writes values to hidden fields inside webforms on the page.
