let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag, texto);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});
}

function exibirTextoInicial(){
exibirTextoNaTela('h1', 'Jogo do N° Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 á 100');
}

exibirTextoInicial();

function numeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   
   let quantidadeDeIndices = listaDeNumerosSorteados.length;

   if(quantidadeDeIndices == numeroLimite){
     listaDeNumerosSorteados = [];
   }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
      return numeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
   }
}

function verificarChute(){
   let chute = document.querySelector('input').value;
   
   let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
   let mensagemTentativa = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`;

   if(chute == numeroSecreto){
      exibirTextoNaTela('h1', 'Você acertou!');
      exibirTextoNaTela('p', mensagemTentativa);

      document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
      if(chute > numeroSecreto){
         exibirTextoNaTela('h1', 'Você errou!');
         exibirTextoNaTela('p', 'O número secreto é menor.');
      } else{
         exibirTextoNaTela('h1', 'Você errou!');
         exibirTextoNaTela ('p', 'O número secreto é maior.');
      }
      } tentativas++;
      limparCampo();
   }

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = numeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirTextoInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true);
}




