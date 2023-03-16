localStorage.setItem("Pontuacao", 0);

function startGame() {
    // document.getElementById('main').style.background = "transparent";
    alert("Primeira dica: 😱");

    var target1 = document.getElementById('img1');
   
    // var target4 = document.getElementById('img4');
    // var target5 = document.getElementById('img5');
    // var target6 = document.getElementById('img6');
    // var target7 = document.getElementById('img7');
    // var target8 = document.getElementById('img8');
    // var target9 = document.getElementById('img9');
    // var target10 = document.getElementById('img10');
    // var target11 = document.getElementById('img11');
    // var target12 = document.getElementById('img12');

    if(target1){
        target1.addEventListener("targetFound", event => {
            localStorage.setItem("Pontuacao", '1');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'O Grito' de Edvard Munch - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            document.getElementById('scene').innerHTML = "<a-entity id='img2' mindar-image-target='targetIndex: 1'></a-entity>";
            alert("Próxima dica: 🌻");
        });
        var target2 = document.getElementById('img2');
    }

    if(target2){
        target2.addEventListener("targetFound", event => {
            localStorage.setItem("Pontuacao", '2');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Doze Girassóis' de Vincent van Gogh - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            document.getElementsByTagName('a-scene').innerHTMl = 
            "<a-entity id='img2' mindar-image-target='targetIndex: 2'></a-entity>";

            alert("Próxima dica:  🌃");
        });
        var target3 = document.getElementById('img3');
    }

    // <a-entity id="img3" mindar-image-target="targetIndex: 2"></a-entity>
    // <a-entity id="img4" mindar-image-target="targetIndex: 3"></a-entity>
    // <a-entity id="img5" mindar-image-target="targetIndex: 4"></a-entity>
    // <a-entity id="img6" mindar-image-target="targetIndex: 5"></a-entity>
    // <a-entity id="img7" mindar-image-target="targetIndex: 6"></a-entity>
    // <a-entity id="img8" mindar-image-target="targetIndex: 7"></a-entity>
    // <a-entity id="img9" mindar-image-target="targetIndex: 8"></a-entity>
    // <a-entity id="img10" mindar-image-target="targetIndex: 9"></a-entity>
    // <a-entity id="img11" mindar-image-target="targetIndex: 10"></a-entity>
    // <a-entity id="img12" mindar-image-target="targetIndex: 11"></a-entity>

    // if (target4) {
    //     target3.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", '3');
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Noite Estrelada' de Vincent van Gogh - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica: 👩🏻");
    //     });
    // }



    // if (target4) {
    //     target4.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", '4');
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Mona Lisa' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica:   🦶🏜");
    //     });
    // }

    // if (target5) {
    //     target5.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 5);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Abaporu' de Tarsila do Amaral - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica:  🕰🫠🏜");
    //     });
    // }

    // if (target6) {
    //     target6.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 6);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'A Persistência da Memória'de Salvador Dalí - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica: 🍞🍷");
    //     });
    // }

    // if (target7) {
    //     target7.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 7);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'A Última Ceia' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica: ☂️👗");
    //     });
    // }

    // if (target8) {
    //     target8.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 8);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Mulher com Sombrinha' de Claude Monet - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica:  👶🏼🪐");
    //     });
    // }


    // if (target9) {
    //     target9.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 9);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'O Nascimento de Vênus' de Sandro Botticelli - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica: 💪💪🤚🤚🧔🏻‍♂️🦵🦵🦶🦶");
    //     });
    // }

    // if (target10) {
    //     target10.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", 10);
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Homem Vitruviano' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica:  11 - 🫳🏻👈🏻");
    //     });
    // }

    // if (target11) {
    //     target11.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", '11');
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'A Criacão de Adão' de Michelangelo - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //         alert("Próxima dica: 👨‍👩‍👧‍👦🏜💀");
    //     });
    // }

    // if (target12) {
    //     target12.addEventListener("targetFound", event => {
    //         localStorage.setItem("Pontuacao", '12');
    //         setInterval(
    //             alert("Parabéns!! Você encontrou a pintura 'Retirantes' de Candido Portinari e GANHOU O JOGO!!! - Pontuação: " + localStorage.getItem("Pontuacao"))
    //             , 5000);
    //     });
    // }
}
