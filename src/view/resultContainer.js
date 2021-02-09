const resultContainer = document.getElementById("result-container");

function hiddenResultContainerView() {
  resultContainer.style.display = 'none';
}

function showResultContainerView() {
  resultContainer.style.display = 'block';
}

export {hiddenResultContainerView, showResultContainerView}