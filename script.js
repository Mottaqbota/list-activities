const cardAtividade1 = document.getElementById('atividade1');
const cardAtividade2 = document.getElementById('atividade2');
const cardAtividade3 = document.getElementById('atividade3');
const cardAtividade4 = document.getElementById('atividade4');

function Atividade1() {
  cardAtividade1.style.display = "flex";
}
function Atividade2() {
  cardAtividade2.style.display = "flex";
}
function Atividade3() {
  cardAtividade3.style.display = "flex";
}
function Atividade4() {
  cardAtividade4.style.display = "flex";
}

function getValue() {
  const inputValor = document.getElementById('valor-input').value;
  if (isNaN(inputValor) || inputValor <= 0 || inputValor > 10) {
    alert("Valor inválido. Por favor, insira uma nota entre zero e dez.");
  } else {
    alert(`Valor salvo com sucesso! ${inputValor}`);
    cardAtividade1.innerHTML += `
    <h1>Valor digitado: <strong> ${inputValor} </strong></h1>
    `
  }
};

function startTimer() {
  const timerDiv = document.getElementById('timer');
  let timerCount = 10;
  var cronometro = setInterval(() => {
      timerDiv.innerHTML = `<p>${timerCount--}</p>`;
    if (timerCount === 0) {
      clearInterval(cronometro)
        timerDiv.innerHTML = `<p> Feliz Ano Novo!!!!🎊 🎉🎊 🎉🎊 🎉 </p>`;
      }
  }, 1000);
};

function enviar(){
  let inputUser = document.getElementById('usuario-input');
  let inputSenha = document.getElementById('senha-input');

  if(inputUser.value === inputSenha.value) {
    alert('Insira uma senha diferente do Usuário!')
  } else {
    alert('Senha Cadastrada com sucesso!')
  }
}

function CalcularValores() {
  const cardResultado = document.getElementById('resultCalc');
    var valor1 = parseInt(document.getElementById('valor1-input').value);
    var valor2 = parseInt(document.getElementById('valor2-input').value);
    cardResultado.innerHTML += `
      Resultado: ${valor1 + valor2}
    `;

}
