# Webform Source Attribution
These are small javascript snippets intended to capture URL tracking parameters (such as UTM source, medium, & campaign), store them in the browser's session storage, and write them to hidden fields on webforms. The goal of this utility is to help marketers better attribute business objectives and outcomes to paid and organic web traffic by appending tracking info directly into form data being sent to CRM and marketing automation tools.

## How to Use
Repo uses ESBuild to bundle modules. After cloning repo, run `npm install` and then `npm run build`. Production code will be output into `webform-source-attribution-dist.js` - copy that directly into a `<script>` tag within your HTML or as a linked JS file. 

## How it Works
- Code inside `/src/capture-params.js` extracts parameters and pushes it into sessionStorage. 
- Code inside `/src/write-hidden-fields.js` queries sessionStorage and writes values to hidden fields inside webforms on the page.
- Code inside `/src/webform-source-attribution.js` imports modules and executes once DOM has loaded
