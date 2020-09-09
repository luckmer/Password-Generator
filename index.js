const Display = document.querySelector("h3");
const LowerCase = document.querySelector(".lowerCase");
const UpperCase = document.querySelector(".upperCase");
const NumberCase = document.querySelector(".numberCase");
const SymbolCase = document.querySelector(".symbolCase");
const RangeCase = document.querySelector(".rangeCase");

function generate() {
    const letters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
    const numbers = ["0123456789"];
    const symbols = ["!#$%&()*+,-./:;<=>?@^[\\]^_`{|}~"];
    let value = RangeCase.value;
    let ContextView = "";
    let generatedPassword = "";

    if (LowerCase.checked) {
        ContextView +=
            lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }
    if (UpperCase.checked) {
        ContextView += letters[Math.floor(Math.random() * letters.length)];
    }
    if (NumberCase.checked) {
        ContextView += numbers[Math.floor(Math.random() * numbers.length)];
    }
    if (SymbolCase.checked) {
        ContextView += symbols[Math.floor(Math.random() * symbols.length)];
    }
    for (let i = 0; i < value; i++) {
        const password = Math.floor(Math.random() * ContextView.length);
        generatedPassword += ContextView[password];
    }
    console.log(generatedPassword.length);
    if (generatedPassword.length > 20) return;
    Display.innerText = generatedPassword;
}
