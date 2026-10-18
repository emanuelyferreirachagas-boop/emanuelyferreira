const botoes = document.querySelectorALL("button");

    botoes.forEach(function (botao) {
    let curtiu = false;
        botao.addEventListener("click", botaoClicado);
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

    const bntTemaEscuro = document.querySelector(".bnt-tema-escuro");

    bntTemaEscuro.addEventListener("click", mudaTema);
    function mudaTema() {
        const corpoPagina = document.body;
        if(corpoPagina.ClassList.constains("tema-escuro")) {
        corpoPagina.ClassList.remove("tema-escuro");
        } else {
            corpoPagina.ClassList.add("tema-escuro");
        }
    }
