var inputCountUp = document.getElementById('input-count-up');
var buttonStartCountUp = document.getElementById('button-start-count-up');
var divCountUpOutput = document.getElementById('div-count-up-output');

buttonStartCountUp.addEventListener('click', function () {
    // Check if user input is valid
    var countTarget = inputCountUp.value;
    
    if (typeof (inputCountUp) === 'undefined')
    {
        alert("Counter === 'undefined'");
        return;
    }
    else if (inputCountUp == null)
    {
        alert("inputCountUp == null");
        return;
    }
    else if (!(countTarget > 1))
    {
        alert("!(countTarget > 1)");
        return;
    }

    // Clear out the div that contains the counts
    while (divCountUpOutput.firstChild) {
        divCountUpOutput.removeChild(divCountUpOutput.firstChild);
    }
  
    addCountElement("Start counting:");

    for (let count = 0; count <= countTarget; count++) {
        addCountElement("Counter = " + count);
    }
    
    addCountElement("Counting is complete!");
});


function addCountElement(text) {
    let newElement = document.createTextNode(text);
    divCountUpOutput.appendChild(newElement);
    divCountUpOutput.appendChild(document.createElement("br"));
}