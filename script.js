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


function timerNewYear() {
  const initialDate = new Date("2023-12-31T23:59:59").getTime();
  const actualDate = new Date().getTime();
  const timerLeft = initialDate - actualDate;

  const days = Math.floor(timerLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timerLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timerLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timerLeft % (1000 * 60)) / 1000);

  const timerNewYear = document.getElementById('timer-newYear');
  timerNewYear.innerHTML = `
    <p>Faltam <strong> ${days}</strong> dias, <strong>${hours}</strong> horas, <strong>${minutes}</strong> minutos e <strong>${seconds}</strong> segundos!</p>
  `;
} setInterval(timerNewYear, 1000);

