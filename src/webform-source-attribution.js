import { captureParams } from "./capture-params";
import { writeHiddenFields } from "./write-hidden-fields";

function webformSourceAttribution() {
    captureParams();
    writeHiddenFields();
}

document.onload = webformSourceAttribution();