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
