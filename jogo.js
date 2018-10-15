var timeId = null // variável que recebe a chamada da função timeout

function iniciaJogo() {
    var url = window.location.search;
    
    var nivel_jogo = url.replace('?', "");
    var tempo_segundos = 0
    var qtde_baloes = 18;
    var qtde_baloes_estourados = 0
    //alert(nivel_jogo);


    switch (nivel_jogo) {
        case '1':
            tempo_segundos = 120;
            break;
        case '2':
            tempo_segundos = 60;
            break;
        case '3':
            tempo_segundos = 30;
            break;
        default:
            alert('Dificuldade incorreta');
            return false;

            
    }

    document.getElementById('cronometro').innerHTML = tempo_segundos;
        
        
    cria_baloes(qtde_baloes);

    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = qtde_baloes_estourados;

    contagem_tempo(tempo_segundos +1);
}

function contagem_tempo(segundos) {

    segundos = segundos - 1;

    if (segundos < 0) {
        clearTimeout(timeId);
        game_over();
        return false;
    }


    document.getElementById('cronometro').innerHTML = segundos;
    timeId = setTimeout("contagem_tempo("+(segundos)+")", 1000)

}

function game_over() {
    alert('tempo esgotado, tente novamente');
}

function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++) {
        
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';
        balao.id = 'b' + i;
        
        balao.onclick = function() { estourar(this); };

        document.getElementById('cenario').appendChild(balao);
    }

    
}


function estourar(e){
    
    var id_balao = e.id;

    document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

    atualiza_pontuacao();
    
}

function atualiza_pontuacao() {
    var pontuacao_atual = document.getElementById('baloes_inteiros').innerHTML;
    pontuacao_atual --;
    document.getElementById('baloes_inteiros').innerHTML = pontuacao_atual;

    var pontuacao_atual_estourados = document.getElementById('baloes_estourados').innerHTML;
    pontuacao_atual_estourados ++;
    document.getElementById('baloes_estourados').innerHTML = pontuacao_atual_estourados;

}