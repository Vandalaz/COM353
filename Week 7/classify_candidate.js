import Candidate from './candidate';

// Get references to document elements
var inputFirstName = document.getElementById('input-candidate-first-name');
var inputSurname = document.getElementById('input-candidate-surname');
var inputAge = document.getElementById('input-candidate-age');
var selectMaritalStatus = document.getElementById('select-marital-status');
var btnGetClassification = document.getElementById('button-get-classification');

// Events
btnGetClassification.addEventListener('click', function () {
    processCandidate();
});

function processCandidate() {
    try {
        // Pull data from elements
        let maritalStatus = selectMaritalStatus.options[selectMaritalStatus.selectedIndex].text;
        var firstName = inputFirstName.value;
        var surname = inputSurname.value;
        var age = inputAge.value;
        
        let candidate = new Candidate(firstName, surname, age, maritalStatus);

        let classification = getClassification(candidate);

        displayClassification(candidate, classification);
    } catch (error) {
        alert(error);
    }
}

// Functions
function getClassification(candidate) {
    let classification = "";

    if ((candidate.Age >= 30) && (candidate.MaritalStatus == "Married")) {
        classification = "Class 1";
    } else if ((candidate.Age >= 30) && (candidate.MaritalStatus == "Single")) {
        classification = "Class 2";
    } else if ((candidate.Age < 30) && (candidate.MaritalStatus == "Married")) {
        classification = "Class 3";
    } else if ((candidate.Age < 30) && (candidate.MaritalStatus == "Single")) {
        classification = "Class 4";
    }

    return classification;
}

function displayClassification(candidate, classification) {
    alert(candidate.getFullName() + ", you are " + classification + ".");
}