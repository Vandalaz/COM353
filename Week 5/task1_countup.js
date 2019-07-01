// Get references to DOM obects
var inputCountUp = document.getElementById('input-count-up');
var inputCountUpWhile = document.getElementById('input-count-up-while');
var inputCountUpDoWhile = document.getElementById('input-count-up-dowhile');

var buttonStartCountUp = document.getElementById('button-start-count-up');
var buttonStartCountUpWhile = document.getElementById('button-start-count-up-while');
var buttonStartCountUpDoWhile = document.getElementById('button-start-count-up-dowhile');

var divCountUpOutput = document.getElementById('div-count-up-output');
var divCountUpOutputWhile = document.getElementById('div-count-up-output-while');
var divCountUpOutputDoWhile = document.getElementById('div-count-up-output-dowhile');

// Add the button event listeners
buttonStartCountUp.addEventListener('click', function () {
    performCounting("for");
});

buttonStartCountUpWhile.addEventListener('click', function () {
    performCounting("while");
});

buttonStartCountUpDoWhile.addEventListener('click', function () {
    performCounting("dowhile");
});

// Perform the actual work
function performCounting(typeOfLoop) {
    // Get user input
    let countTarget = getTargetCount(typeOfLoop);

    if (!inputIsValid(countTarget))
        return;

    // Find the area of the screen to update & clear it's contents
    let targetDiv = getTargetDiv(typeOfLoop);

    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }

    // Start the counter
    addCountElement("Start counting:", targetDiv);

    if (typeOfLoop === "for") {
        performForCount(countTarget, targetDiv);
    } else if (typeOfLoop === "while") {
        performWhileCount(countTarget, targetDiv);
    } else if (typeOfLoop === "dowhile") {
        performDoWhileCount(countTarget, targetDiv);
    }

    addCountElement("Counting is complete!", targetDiv);
}

function performForCount(countTarget, targetDiv) {
    for (let count = 0; count <= countTarget; count++) {
        addCountElement("Counter = " + count, targetDiv);
    }
}

function performWhileCount(countTarget, targetDiv) {
    let count = 0;
    while (count <= countTarget) {
        addCountElement("Counter = " + count, targetDiv);
        count++;
    }
}

function performDoWhileCount(countTarget, targetDiv) {
    let count = 0;
    do {
        addCountElement("Counter = " + count, targetDiv);
        count++;
    } while (count <= countTarget);
}

function getTargetCount(typeOfLoop) {
    if (typeOfLoop == "for") {
        return inputCountUp.value;
    } else if (typeOfLoop == "while") {
        return inputCountUpWhile.value;
    } else if (typeOfLoop == "dowhile") {
        return inputCountUpDoWhile.value;
    } else {
        return 0;
    }
}

function getTargetDiv(typeOfLoop) {
    if (typeOfLoop == "for") {
        return divCountUpOutput;
    } else if (typeOfLoop == "while") {
        return divCountUpOutputWhile;
    } else if (typeOfLoop == "dowhile") {
        return divCountUpOutputDoWhile;
    } else {
        throw new Error("Couldn't find target div");
    }
}

function inputIsValid(inputValue) {
    if (typeof (inputValue) === 'undefined') {
        alert("inputValue === 'undefined'");
        return false;
    } else if (inputValue == null) {
        alert("inputValue == null");
        return false;
    } else if (!(inputValue > 1)) {
        alert("!(inputValue > 1)");
        return false;
    }

    return true;
}

function addCountElement(text, targetDiv) {
    let newElement = document.createTextNode(text);
    targetDiv.appendChild(newElement);
    targetDiv.appendChild(document.createElement("br"));
}