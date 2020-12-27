const racingCountContainer = document.getElementById("counting-container");
const resultContainer = document.getElementById("result-container");

function hiddenInitView() {
  racingCountContainer.style.display = 'none';
  resultContainer.style.display = 'none';
}

function showView() {
  racingCountContainer.style.display = 'block';
  resultContainer.style.display = 'block';
}


export {hiddenInitView, showView};