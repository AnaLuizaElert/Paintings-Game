function startGame(){
    document.getElementById('main').innerHTML =
        `
        <a-scene mindar-image="imageTargetSrc: ./targets.mind" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity mindar-image-target="targetIndex: 0" id="img1"></a-entity>
            <a-entity mindar-image-target="targetIndex: 1" id="img2"></a-entity>
            <a-entity mindar-image-target="targetIndex: 2" id="img3"></a-entity>
            <a-entity mindar-image-target="targetIndex: 3" id="img4"></a-entity>
            <a-entity mindar-image-target="targetIndex: 4" id="img5"></a-entity>
            <a-entity mindar-image-target="targetIndex: 5" id="img6"></a-entity>
            <a-entity mindar-image-target="targetIndex: 6" id="img7"></a-entity>
            <a-entity mindar-image-target="targetIndex: 7" id="img8"></a-entity>
            <a-entity mindar-image-target="targetIndex: 8" id="img9"></a-entity>
            <a-entity mindar-image-target="targetIndex: 9" id="img10"></a-entity>
            <a-entity mindar-image-target="targetIndex: 10" id="img11"></a-entity>
            <a-entity mindar-image-target="targetIndex: 11" id="img12"></a-entity>

        </a-scene>
        `;
    alert("Primeira dica: ");    
}

document.getElementById('img1').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 1);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img2').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 2);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img3').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 3);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img4').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 4);
    alert("Próxima dica:  😘😍😄");
});


document.getElementById('img5').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 5);
    alert("Próxima dica:  😘😍😄");
});


document.getElementById('img6').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 6);
    alert("Próxima dica:  😘😍😄");
});


document.getElementById('img7').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 7);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img8').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 8);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img9').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 9);
    alert("Próxima dica:  😘😍😄");
});

document.getElementById('img10').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 10);
    alert("Próxima dica:  😘😍😄");
});
document.getElementById('img11').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 11);
    alert("Próxima dica:  😘😍😄");
});
document.getElementById('img12').addEventListener("targetFound", event  => {
    localStorage.setItem("Pontuacao", 12);
    alert("Próxima dica:  😘😍😄");
});
