const botoes = document.querySelectorALL("button");

    botoes.forEach(function (botao) {
    let curtiu = false;
        botao.addEventListener("click", botaoClicado)
        function arraybotaoClicado() {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            if (curtiu == false){
                texto.textContent++;
                curtiu = true;
            } else{
                texto.textContent--;
                curtiu = false;
            }
        }
    })
