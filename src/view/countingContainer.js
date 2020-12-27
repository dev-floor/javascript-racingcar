const racingCountContainer = document.getElementById("counting-container");


function hiddenRacintCountContainerView() {
  racingCountContainer.style.display = 'none';
}

function showRacintCountContainerView() {
  racingCountContainer.style.display = 'block';
}

export {hiddenRacintCountContainerView, showRacintCountContainerView};