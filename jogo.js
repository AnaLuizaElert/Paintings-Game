localStorage.setItem("Pontuacao", 0);

function startGame() {
    alert("Primeira dica: 😱");

    const target1 = document.getElementById('img1');
    const target2 = document.getElementById('img2');
    const target3 = document.getElementById('img3');
    const target4 = document.getElementById('img4');
    const target5 = document.getElementById('img5');
    const target6 = document.getElementById('img6');
    const target7 = document.getElementById('img7');
    const target8 = document.getElementById('img8');
    const target9 = document.getElementById('img9');
    const target10 = document.getElementById('img10');
    const target11 = document.getElementById('img11');
    const target12 = document.getElementById('img12');

    target1.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 0) {
            localStorage.setItem("Pontuacao", '1');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'O Grito' de Edvard Munch - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: 🌻");
        }
    });

    target2.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 1) {
            localStorage.setItem("Pontuacao", '2');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Doze Girassóis' de Vincent van Gogh - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica:  🌃");
        }
    });

    target3.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 2) {
            localStorage.setItem("Pontuacao", '3');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Noite Estrelada' de Vincent van Gogh - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: 👩🏻");
        }
    });


    target4.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 3) {
            localStorage.setItem("Pontuacao", '4');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Mona Lisa' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica:   🦶🏜");
        }
    });

    target5.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 4) {
            localStorage.setItem("Pontuacao", 5);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Abaporu' de Tarsila do Amaral - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica:  🕰🫠🏜");
        }
    });

    target6.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 5) {
            localStorage.setItem("Pontuacao", 6);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'A Persistência da Memória'de Salvador Dalí - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: 🍞🍷");
        }
    });

    target7.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 6) {
            localStorage.setItem("Pontuacao", 7);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'A Última Ceia' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: ☂️👗");
        }
    });

    target8.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 7) {
            localStorage.setItem("Pontuacao", 8);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Mulher com Sombrinha' de Claude Monet - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica:  👶🏼🪐");
        }
    });


    target9.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 8) {
            localStorage.setItem("Pontuacao", 9);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'O Nascimento de Vênus' de Sandro Botticelli - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: 💪💪🤚🤚🧔🏻‍♂️🦵🦵🦶🦶");
        }
    });

    target10.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 9) {
            localStorage.setItem("Pontuacao", 10);
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Homem Vitruviano' de Leonardo da Vinci - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica:  11 - 🫳🏻👈🏻");
        }
    });

    target11.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 10) {
            localStorage.setItem("Pontuacao", '11');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'A Criacão de Adão' de Michelangelo - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
            alert("Próxima dica: 👨‍👩‍👧‍👦🏜💀");
        }
    });

    target12.addEventListener("targetFound", event => {
        if (localStorage.getItem("Pontuacao") == 11) {
            localStorage.setItem("Pontuacao", '12');
            setInterval(
                alert("Parabéns!! Você encontrou a pintura 'Retirantes' de Candido Portinari e GANHOU O JOGO!!! - Pontuação: " + localStorage.getItem("Pontuacao"))
                , 5000);
        }
    });
}