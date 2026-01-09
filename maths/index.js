var root = document.getElementById("root");
var symbol = document.getElementById("symbol")
function add() {
    let a = Number(document.querySelector(".number1").value);
    let b = Number(document.querySelector(".number2").value);

    let answer = a + b;

    try {
        symbol.innerHTML = `+`
        root.value = `${answer}`;
        aiSpeak(answer)
    } catch (error) {
        console.log(error);
    }
}

function aiSpeak(text) {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices.find(v => v.lang === "en-US") || voices[0];
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
}

function sub(){
     let a = Number(document.querySelector(".number1").value);
    let b = Number(document.querySelector(".number2").value);

    let answer = a - b;

    try {
         symbol.innerHTML = `-`
        root.value = `${answer}`;
        aiSpeak(answer)
    } catch (error) {
        console.log(error);
    }
}

function mul(){
     let a = Number(document.querySelector(".number1").value);
    let b = Number(document.querySelector(".number2").value);

    let answer = a * b;

    try {
         symbol.innerHTML = `×`
        root.value = `${answer}`
        aiSpeak(answer)
    } catch (error) {
        console.log(error);
    }
}

function divi(){
    let a = Number(document.querySelector(".number1").value);
    let b = Number(document.querySelector(".number2").value);

    let answer = a / b;

    try {
        symbol.innerHTML = `÷`
        root.value = `${answer}`;
        aiSpeak(answer)
    } catch (error) {
        console.log(error);
    }
}
