const elementoImagem = document.querySelector("#img1");
const elementoBotao = document.querySelector("#alterar");
const elementotexto = document.querySelector("#text");
const elementonome = document.querySelector("#nome");

elementoBotao.addEventListener("click", function(){
    if (elementoBotao.value=="primeiro"){
        elementoImagem.src="MortyRéptil.png";
        elementotexto.innerText="Esse é o Morty Réptiliano.";
        elementonome.innerText="Morty Réptil";
        elementoBotao.value="segundo";
    } else if(elementoBotao.value=="segundo"){
        elementoImagem.src="MortyNerd.png";
        elementotexto.innerText="Esse é um Morty inteligentíssimo.";
        elementonome.innerText="Morty Nerd";
        elementoBotao.value="terceiro";
    } else if(elementoBotao.value=="terceiro"){
        elementoImagem.src="MortyCianes.png";
        elementotexto.innerText="Esse é o Morty e o Mortynho.";
        elementonome.innerText="Mortys";
        elementoBotao.value="quarto";
    } else if(elementoBotao.value=="quarto"){
        elementoImagem.src="PsicoMorty.png";
        elementotexto.innerText="Esse Morty é poderoso.";
        elementonome.innerText="Morty Psicótico";
        elementoBotao.value="quinto";
    } else if(elementoBotao.value=="quinto"){
        elementoImagem.src="MortyBigodudo.png";
        elementotexto.innerText="Só um Morty que deixou o bigode crescer.";
        elementonome.innerText="Morty Bigode Grosso";
        elementoBotao.value="sexto";
    } else if(elementoBotao.value=="sexto"){
        elementoImagem.src="ExecutivoMorty.png";
        elementotexto.innerText="Esse é o Morty ainda é um loser!.";
        elementonome.innerText="Morty Executivo";
        elementoBotao.value="setimo";
    } else if(elementoBotao.value=="setimo"){
        elementoImagem.src="MortyBot.png";
        elementotexto.innerText="Foi criado por um Rick.";
        elementonome.innerText="Bot Morty";
        elementoBotao.value="oitavo";
    } else if(elementoBotao.value=="oitavo"){
        elementoImagem.src="MortyRomantico.png";
        elementotexto.innerText="Esse é o Morty é Romântico.";
        elementonome.innerText="Morty Romântico";
        elementoBotao.value="nono";
    } else if(elementoBotao.value=="nono"){
        elementoImagem.src="MortySabugo.png";
        elementotexto.innerText="Um Morty Gostoso.";
        elementonome.innerText="Sabugo Morty";
        elementoBotao.value="decimo";
    } else {
        elementoImagem.src="MortyNormal.png";
        elementotexto.innerText="Esse é o Morty.";
        elementonome.innerText="Morty";
        elementoBotao.value="primeiro";
    }
});