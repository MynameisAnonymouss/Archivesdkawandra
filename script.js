const startBtn = document.getElementById("startBtn");
const countdown = document.getElementById("contador");
const status = document.getElementById("status");
const slideshow = document.getElementById("slideshow");
const audio = document.getElementById("audio");

const imagens = [
    "img1.jpg",
    "img2.jpg",
    "img3.webp",
    "img4.jpg"
];

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    let tempo = 5;

    countdown.style.display = "block";
    countdown.innerText = tempo;

    const timer = setInterval(() => {

        tempo--;

        if (tempo >= 0) {
            countdown.innerText = tempo;
        }

        if (tempo < 0) {

            clearInterval(timer);

            countdown.style.display = "none";

            iniciarSistema();

        }

    },1000);

});

function iniciarSistema(){

    audio.play();

    status.style.display = "block";

    status.innerHTML = `
    <h1>📸 FOTOS VISUALIZADAS</h1>
    <h2>⚠ SISTEMA CORROMPIDO ⚠</h2>
    `;

    slideshow.style.display = "block";

    let i = 0;

    slideshow.src = imagens[i];

    setInterval(()=>{

        i++;

        if(i >= imagens.length){
            i = 0;
        }

        slideshow.src = imagens[i];

    },1800);

    iniciarGlitch();

}

function iniciarGlitch(){

    setInterval(()=>{

        document.body.style.transform =
        `translate(${Math.random()*20-10}px,${Math.random()*20-10}px)`;

        document.body.style.filter =
        `hue-rotate(${Math.random()*360}deg) contrast(180%)`;

    },70);

    setInterval(()=>{

        document.body.style.background =
        Math.random()>0.5 ? "red" : "black";

    },150);

}
