// Passo 1: Ligando o botão à função
let botaoNome = document.getElementById("botaoNomeCompleto");
botaoNome.addEventListener("click", exibirNome);
function exibirNome() {
// Passo 2: Pegando o valor digitado
let nome = document.getElementById("nome").value;
let sobrenome = document.getElementById("sobrenome").value;
// Passo 3: Alterando o texto da div com o nome
let resultado = document.getElementById("resultado1");
resultado.innerText = "Olá, " + nome + " " + sobrenome +  "!";
} 
 
 
document.getElementById('botaoCalcular').addEventListener('click', function() {
let numero1 = parseFloat(document.getElementById('numero1').value);
let numero2 = parseFloat(document.getElementById('numero2').value);
let soma = numero1 + numero2;
document.getElementById('resultado2').innerText = `Soma: ${soma}`;
});

document.getElementById('botaoDobro').addEventListener('click', function() {
let numero3 = parseFloat(document.getElementById('numero3').value);
let dobro = numero3 * 2;
document.getElementById('resultado3').innerText = `Dobro: ${dobro}`;
});

let botaoMultiplicar = document.getElementById("botaoMultiplicar");
botaoMultiplicar.addEventListener("click", function() {
    let numero4 = parseFloat(document.getElementById("numero4").value);
    let numero5 = parseFloat(document.getElementById("numero5").value);
    let multiplicacao = numero4 * numero5;
    document.getElementById("resultado4").innerText = `Multiplicação: ${multiplicacao}`;
});

let botaoIncrementar = document.getElementById("botaoIncrementar");
botaoIncrementar.addEventListener("click", function() {
    let numero6 = parseFloat(document.getElementById("numero6").value);
    let incremento = numero6 + 1;
    document.getElementById("numero6").value = incremento;
});


let botaoDecrementar = document.getElementById("botaoDecrementar");
botaoDecrementar.addEventListener("click", function() {
    let numero6 = parseFloat(document.getElementById("numero7").value);
    let Decrementar = numero6 - 1;
    document.getElementById("numero7").value = Decrementar;
});

 
 
document.getElementById('botaoNomeIdade').addEventListener('click', function () {
    let nome = document.getElementById('nome2').value;
    let idade = parseInt(document.getElementById('idade').value, 10);
    document.getElementById('resultado7').innerText = `Olá, ${nome} Feliz ${idade} anos!`;

});



document.getElementById('botaoCalcularDesconto').addEventListener('click', function () {
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const valorDesconto = parseFloat(document.getElementById('valorDesconto').value);

    if (!isNaN(valorCompra) && !isNaN(valorDesconto)) {
        const valorFinal = valorCompra - valorDesconto;
        if (valorFinal >= 0) {
            document.getElementById('resultado8').innerText =
                `O valor final da compra é: R$ ${valorFinal.toFixed(2)}`;
        } else {
            document.getElementById('resultado8').innerText =
                'O desconto não pode ser maior que o valor da compra.';
        }
    } else {
        document.getElementById('resultado8').innerText =
            'Por favor, preencha corretamente os dois campos.';
    }
});

// Questão 09 - Formatar número com 2 casas decimais
document.getElementById('botaoFormatarDecimal').addEventListener('click', function () {
    const numero = parseFloat(document.getElementById('numeroDecimal').value);

    if (!isNaN(numero)) {
        let numeroFormatado = numero.toFixed(2);
        document.getElementById('resultado9').innerText =
            `O número formatado é: ${numeroFormatado}`;
    } else {
        document.getElementById('resultado9').innerText =
            'Por favor, digite um número válido.';
    }
});



// Questão 10 - Contar quantidade de caracteres
document.getElementById('botaoContarCaracteres').addEventListener('click', function () {
    let texto = document.getElementById('textoDigitado').value;
    let quantidade = texto.length;
    document.getElementById('resultado10').innerText =
        `O texto possui ${quantidade} caractere${quantidade !== 1 ? 's' : ''}.`;
});



//Menu de Questões
 function mostrarQuestao(id) {
            const questoes = document.querySelectorAll('.questao');
            questoes.forEach(q => q.style.display = 'none');
            document.getElementById(id).style.display = 'block';
        }



let botaoTransformarMaiusculo = document.getElementById("botaoTransformarMaiusculo");
botaoTransformarMaiusculo.addEventListener("click", function () {
    let texto = document.getElementById("textoMaiusculo").value;
    let textoMaiusculo = texto.toUpperCase();
    document.getElementById("resultado11").innerText = `Texto em maiúsculas: ${textoMaiusculo}`;
});

let botaoTransformarMinusculo = document.getElementById("botaoTransformarMinusculo");
botaoTransformarMinusculo.addEventListener("click", function () {
    let texto = document.getElementById("textoMinusculo").value;
    let textoMinusculo = texto.toLowerCase();
    document.getElementById("resultado12").innerText = `Texto em minúsculas: ${textoMinusculo}`;
});


let botaoValorAbsoluto = document.getElementById("botaoValorAbsoluto");
botaoValorAbsoluto.addEventListener("click", function () {
    let numero = parseFloat(document.getElementById("numeroAbsoluto").value);
    if (!isNaN(numero)) {
        let valorAbsoluto = Math.abs(numero);
        document.getElementById("resultado13").innerText = `Valor absoluto: ${valorAbsoluto}`;
    } else {
        document.getElementById("resultado13").innerText = "Por favor, digite um número válido.";
    }
});

let botaoGerarRandomico = document.getElementById("botaoGerarRandomico");
botaoGerarRandomico.addEventListener("click", gerarNumero);
function gerarNumero() {
    let num1 = parseFloat(document.getElementById("numeroRandomico1").value);
    let num2 = parseFloat(document.getElementById("numeroRandomico2").value);
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    let numeroRandomico = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado14").innerText = `Número randômico gerado: ${numeroRandomico}`;
}


let botaoMaiorNumero = document.getElementById("botaoMaiorNumero");
botaoMaiorNumero.addEventListener("click", function () {
    let numero1 = parseFloat(document.getElementById("numeroMaior1").value);
    let numero2 = parseFloat(document.getElementById("numeroMaior2").value);
    let maiorNumero = Math.max(numero1, numero2,);
    document.getElementById("resultado15").innerText = `O maior número é: ${maiorNumero}`;
});