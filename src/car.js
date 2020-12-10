const carNameInput = document.getElementById("car-names-input");
const carNameButton = document.getElementById("car-names-submit");

// contains what user input. (Total)
let inputNames = "";

// contains names that is sliced by ",".
let nameTokens = [];

// judge if after "validationName()", it is acceptable
// car names or not.
let acceptableName = false;

// when pressed Enter key.
function handleEnterName(event){
    if(event.keyCode == 13){
        event.preventDefault();
        inputNames = carNameInput.value;
        nameTokens = inputNames.split(",");
        validationName();
    }
}

carNameInput.addEventListener("keydown", handleEnterName);

// when clicked "확인" button.
function handleSubmitName(event){
    inputNames = carNameInput.value;
    nameTokens = inputNames.split(",");
    validationName();
}

carNameButton.addEventListener("click", handleSubmitName)

function validationName(){
    nameTokens.forEach(function(car){
        if(car.length > 5){
            alert("Car name should be less than 5. Input again.");
            acceptableName = false;
        }
        else{
            console.log(car);
            acceptableName = true;
        }
    })
}