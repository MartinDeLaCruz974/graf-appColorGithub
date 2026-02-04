const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorPicker = document.getElementById("colorPicker");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function rgbToHex(r, g, b) {
    return "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");
}

function hexToRgb(hex) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
}

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(+r, +g, +b).toUpperCase();

    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;
    hexText.textContent = hex;
    colorPicker.value = hex;
}

function updateFromSliders() {
    redInput.value = red.value;
    greenInput.value = green.value;
    blueInput.value = blue.value;
    updateColor();
}

function updateFromInputs() {
    red.value = clamp(redInput.value);
    green.value = clamp(greenInput.value);
    blue.value = clamp(blueInput.value);
    updateColor();
}

function updateFromPicker() {
    const { r, g, b } = hexToRgb(colorPicker.value);

    red.value = r;
    green.value = g;
    blue.value = b;

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    updateColor();
}

// Eventos
red.addEventListener("input", updateFromSliders);
green.addEventListener("input", updateFromSliders);
blue.addEventListener("input", updateFromSliders);

redInput.addEventListener("input", updateFromInputs);
greenInput.addEventListener("input", updateFromInputs);
blueInput.addEventListener("input", updateFromInputs);

colorPicker.addEventListener("input", updateFromPicker);
