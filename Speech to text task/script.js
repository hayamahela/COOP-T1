const texts = document.querySelector(".text");

window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang='ar';

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
    texts.appendChild(p);
    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
    p.innerText = text;
    if (e.results[0].isFinal) {
       p = document.createElement("p");
    }
 });
 recognition.addEventListener("end", () => {
    recognition.start();
});
recognition.start();
