function startGame(){
    document.getElementById('main').style.background = "transparent";
    document.getElementById('body').innerHTML =
        `
        <a-scene mindar-image="imageTargetSrc: ./targets.mind" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity id="img1" mindar-image-target="targetIndex: 0" ></a-entity>
            <a-entity id="img2" mindar-image-target="targetIndex: 1" ></a-entity>
            <a-entity id="img3" mindar-image-target="targetIndex: 2" ></a-entity>
            <a-entity id="img4" mindar-image-target="targetIndex: 3" ></a-entity>
            <a-entity id="img5" mindar-image-target="targetIndex: 4" ></a-entity>
            <a-entity id="img6" mindar-image-target="targetIndex: 5" ></a-entity>
            <a-entity id="img7" mindar-image-target="targetIndex: 6" ></a-entity>
            <a-entity id="img8" mindar-image-target="targetIndex: 7" ></a-entity>
            <a-entity id="img9" mindar-image-target="targetIndex: 8" ></a-entity>
            <a-entity id="img10" mindar-image-target="targetIndex: 9"></a-entity>
            <a-entity mindar-image-target="targetIndex: 10" id="img11"></a-entity>
            <a-entity mindar-image-target="targetIndex: 11" id="img12"></a-entity>

        </a-scene>
        <script src="./jogo.js"></script>
        `;
    alert("Primeira dica: 😱");    
}

var target1 = document.querySelector('#img1');

target1.addEventListener("markerFound", function() {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'O Grito' de Edvard Munch")
    , 5000); 
    localStorage.setItem("Pontuacao", 1);
    alert("Próxima dica:  🌻");
});

document.getElementById('img2').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Doze Girassóis' de Vincent van Gogh")
    , 5000); 
    localStorage.setItem("Pontuacao", 2);
    alert("Próxima dica:  🌃");
});

document.getElementById('img3').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Noite Estrelada' de Vincent van Gogh")
    , 5000); 
    localStorage.setItem("Pontuacao", 3);
    alert("Próxima dica: 👩🏻");
});

document.getElementById('img4').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Mona Lisa' de Leonardo da Vinci")
    , 5000); 
    localStorage.setItem("Pontuacao", 4);
    alert("Próxima dica:   🦶🏜");
});


document.getElementById('img5').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Abaporu' de Tarsila do Amaral")
    , 5000); 
    localStorage.setItem("Pontuacao", 5);
    alert("Próxima dica:  🕰🫠🏜");
});


document.getElementById('img6').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'A Persistência da Memória'de Salvador Dalí")
    , 5000); 
    localStorage.setItem("Pontuacao", 6);
    alert("Próxima dica: 🍞🍷");
});

document.getElementById('img7').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'A Última Ceia' de Leonardo da Vinci")
    , 5000); 
    localStorage.setItem("Pontuacao", 7);
    alert("Próxima dica: ☂️👗");
});

document.getElementById('img8').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Mulher com Sombrinha' de Claude Monet")
    , 5000); 
    localStorage.setItem("Pontuacao", 8);
    alert("Próxima dica:  👶🏼🪐");
});

document.getElementById('img9').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'O Nascimento de Vênus' de Sandro Botticelli")
    , 5000); 
    localStorage.setItem("Pontuacao", 9);
    alert("Próxima dica: 💪💪🤚🤚🧔🏻‍♂️🦵🦵🦶🦶");
});

document.getElementById('img10').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Homem Vitruviano' de Leonardo da Vinci")
    , 5000); 
    localStorage.setItem("Pontuacao", 10);
    alert("Próxima dica:  11 - 🫳🏻👈🏻");
});
document.getElementById('img11').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'A Criacão de Adão' de Michelangelo")
    , 5000); 
    localStorage.setItem("Pontuacao", 11);
    alert("Próxima dica: 👨‍👩‍👧‍👦🏜💀");
});

document.getElementById('img11').addEventListener("targetFound", event  => {
    setInterval(
        alert("Parabéns!! Você encontrou a pintura 'Retirantes' de Candido Portinari e GANHOU O JOGO!!!")
    , 5000); 
    localStorage.setItem("Pontuacao", 12);
});

