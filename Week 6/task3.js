// Initialise mark references
var inputMark1 = document.getElementById('input-mark1');
var inputMark2 = document.getElementById('input-mark2');
var inputMark3 = document.getElementById('input-mark3');
var inputMark4 = document.getElementById('input-mark4');

var btnShowAverage = document.getElementById('button-show-average-mark');
btnShowAverage.addEventListener('click', function () {
    calculateAverageAndDisplayFeedback();
});

function calculateAverageAndDisplayFeedback() {
    // Get actual input values
    let mark1 = inputMark1.value;
    let mark2 = inputMark2.value;
    let mark3 = inputMark3.value;
    let mark4 = inputMark4.value;
    let marks = [mark1, mark2, mark3, mark4];

    // Perform validation on input
    let inputValid = true;
    marks.forEach(function (mark) {
        if (!inputIsValid(mark))
            inputValid = false;
    });

    if (!inputValid)
        return;

    // Begin gathering the information to dispaly to the user
    let averageMark = calculateAverage(marks);
    let classification = calculateClassification(averageMark);
    let feedback = calculateFeedback(classification);

    alert(feedback + " You got a " + classification + ", your average mark is " + averageMark + ".");
}

// Perform some validation on the user input
function inputIsValid(inputValue) {
    if (typeof (inputValue) === 'undefined') {
        alert("inputValue is undefined.");
        return false;
    } else if (inputValue == null) {
        alert("inputValue is null.");
        return false;
    } else if (inputValue > 100) {
        alert("You have entered a mark greater than 100.");
        return false;
    } else if (inputValue < 0) {
        alert("You have entered a mark less than 100.");
        return false;
    } else if (isNaN(inputValue)) {
        alert("You have entered a mark that is not a number.");
        return false;
    }

    return true;
}

// Calculate the average mark & round to an integer
function calculateAverage(marks) {
    let totalMark = 0;
    let numberOfMarks = 0;

    for (let i = 0; i < marks.length; i++) {
        numberOfMarks++;
        totalMark += Number(marks[i]);
    }

    let averageMark = Math.round(totalMark / numberOfMarks);

    return averageMark;
}

// Calculate the classification based on the average mark
function calculateClassification(averageMark) {
    if (averageMark >= 90 && averageMark <= 100) {
        return "A";
    } else if (averageMark >= 80 && averageMark <= 90) {
        return "B";
    } else if (averageMark >= 70 && averageMark <= 80) {
        return "C";
    } else if (averageMark >= 60 && averageMark <= 70) {
        return "D";
    } else if (averageMark < 60) {
        return "E";
    } else {
        throw new Error("calculateClassification() something went wrong");
    }
}

// Calculate feedback with switch, based on classification
function calculateFeedback(classification) {
    let feedback = "";

    switch (classification) {
        case "A":
            feedback = "Outstanding!";
            break;
        case "B":
            feedback = "Very good!";
            break;
        case "C":
            feedback = "Fairly good!";
            break;
        case "D":
            feedback = "Doing okay!";
            break;
        case "E":
            feedback = "Need to work much harder!";
            break;
        default:
            throw new Error('calculateFeedback() something went wrong');
    }

    return feedback;
}