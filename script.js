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


const act1 = document.getElementById('atividade1');


function startTimer() {
  const timerDiv = document.getElementById('timer');
  let timerCount = 10;
  var cronometro = setInterval(() => {
      timerDiv.innerHTML = `<p>${timerCount--}</p>`;
    if (timerCount <= 0) {
      clearInterval(cronometro)
        timerDiv.innerHTML = `<p> Feliz Ano Novo!!!!🎊 🎉🎊 🎉🎊 🎉 </p>`;
      }
  }, 1000);
};
