var timeId = null // variável que recebe a chamada da função timeout

function iniciaJogo() {
    var url = window.location.search;
    
    var nivel_jogo = url.replace('?', "");
    var tempo_segundos = 0
    var qtde_baloes = 10;
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

    document.getElementById('baloes_inteiros').innerHTML = 20;
    document.getElementById('baloes_estourados').innerHTML = 0;

    contagem_tempo(tempo_segundos);
}

function contagem_tempo(segundos) {

    document.getElementById('cronometro').innerHTML = segundos;
    timeId = setTimeout("contagem_tempo("+(segundos - 1)+")", 1000)

}

function cria_baloes(qtde_baloes) {

    for (var i = 1; i <= qtde_baloes; i++) {
        
        var balao = document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png';
        balao.style.margin = '10px';

        document.getElementById('cenario').appendChild(balao);
    }
}