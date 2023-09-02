function getNoteValue() {
  const inputNote = document.querySelector('.input-note').value;
  const inputGrade = document.querySelector('.input-grade').value;
  const cardNotes = document.querySelector('#card-newNotes');
  if (isNaN(inputNote) || inputNote <= 0 || inputNote > 10) {
    alert("Valor inválido. Por favor, insira uma nota entre zero e dez.");
  } else {
    alert("Nota salva com sucesso!")
    cardNotes.innerHTML += `
    <h1>Matéria: <strong> ${inputGrade} </strong></h1>
    <p>Nota: <strong> ${inputNote} </strong></p>
    `
  }
};


function updateCountdown() {
  const targetDate = new Date("2023-12-31T23:59:59").getTime();
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `
    Faltam ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos!
  `;
}

setInterval(updateCountdown, 1000);

updateCountdown();

