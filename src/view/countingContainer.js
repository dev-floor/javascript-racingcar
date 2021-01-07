const racingCountContainer = document.getElementById("counting-container");


function hiddenRacingCountContainerView() {
  racingCountContainer.style.display = 'none';
}

function showRacingCountContainerView() {
  racingCountContainer.style.display = 'block';
}

export {hiddenRacingCountContainerView, showRacingCountContainerView};