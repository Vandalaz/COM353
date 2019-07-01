// Get references to DOM obects
var inputCountDown = document.getElementById('input-count-down');
var inputCountDownWhile = document.getElementById('input-count-down-while');
var inputCountDownDoWhile = document.getElementById('input-count-down-dowhile');

var buttonStartCountDown = document.getElementById('button-start-count-down');
var buttonStartCountDownWhile = document.getElementById('button-start-count-down-while');
var buttonStartCountDownDoWhile = document.getElementById('button-start-count-down-dowhile');

var divCountDownOutput = document.getElementById('div-count-down-output');
var divCountDownOutputWhile = document.getElementById('div-count-down-output-while');
var divCountDownOutputDoWhile = document.getElementById('div-count-down-output-dowhile');

// Add the button event listeners
buttonStartCountDown.addEventListener('click', function () {
    performCounting("for");
});

buttonStartCountDownWhile.addEventListener('click', function () {
    performCounting("while");
});

buttonStartCountDownDoWhile.addEventListener('click', function () {
    performCounting("dowhile");
});

// Perform the actual work
function performCounting(typeOfLoop) {
    // Get user input
    let countFrom = getTargetCount(typeOfLoop);

    if (!inputIsValid(countFrom))
        return;

    // Find the area of the screen to update & clear it's contents
    let targetDiv = getTargetDiv(typeOfLoop);

    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }

    // Start the counter
    addCountElement("Start counting:", targetDiv);

    if (typeOfLoop === "for") {
        performForCount(countFrom, targetDiv);
    } else if (typeOfLoop === "while") {
        performWhileCount(countFrom, targetDiv);
    } else if (typeOfLoop === "dowhile") {
        performDoWhileCount(countFrom, targetDiv);
    }

    addCountElement("Counting is complete!", targetDiv);
}

function performForCount(countFrom, targetDiv) {
    for (let currentCount = countFrom; currentCount >= 1; currentCount--) {
        addCountElement("Counter = " + currentCount, targetDiv);
    }
}

function performWhileCount(countFrom, targetDiv) {
    let currentCount = countFrom;
    while (currentCount >= 1) {
        addCountElement("Counter = " + currentCount, targetDiv);
        currentCount--;
    }
}

function performDoWhileCount(countFrom, targetDiv) {
    let currentCount = countFrom;
    do {
        addCountElement("Counter = " + currentCount, targetDiv);
        currentCount--;
    } while (currentCount >= 1);
}

function getTargetCount(typeOfLoop) {
    if (typeOfLoop == "for") {
        return inputCountDown.value;
    } else if (typeOfLoop == "while") {
        return inputCountDownWhile.value;
    } else if (typeOfLoop == "dowhile") {
        return inputCountDownDoWhile.value;
    } else {
        return 0;
    }
}

function getTargetDiv(typeOfLoop) {
    if (typeOfLoop == "for") {
        return divCountDownOutput;
    } else if (typeOfLoop == "while") {
        return divCountDownOutputWhile;
    } else if (typeOfLoop == "dowhile") {
        return divCountDownOutputDoWhile;
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