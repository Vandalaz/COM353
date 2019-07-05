//import Candidate from './candidate';

// Reset form fields
document.getElementById("form-candidate").reset(); 

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

        if (inputIsValid(firstName, surname, age, maritalStatus)) {
            let candidate = new Candidate(firstName, surname, age, maritalStatus);

            let classification = getClassification(candidate);

            displayClassification(candidate, classification);
        }
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
    alert(candidate.FirstName + " " + candidate.Surname + ", you are " + classification + ".");
}

function inputIsValid(firstName, surname, age, maritalStatus) {
    if (!stringIsValid(firstName)) {
        alert("First Name is not a valid name.");
        return false;
    } else if (!stringIsValid(surname)) {
        alert("Surname is not a valid name.");
        return false;
    } else if (!ageIsValid(age)) {
        alert("Candidate age must be between 17 and 100");
        return false;
    } else if (!maritalStatusIsValid(maritalStatus)){
        alert ("Marital Status is not valid. Please choose an option.");
        return false;
    }

    return true;
}

function stringIsValid(str) {
    return /^[a-zA-Z ']+$/.test(str);
}

function ageIsValid(age){
    return ((age > 17) && (age < 116));
}

function maritalStatusIsValid(maritalStatus)
{
    return (maritalStatuses.includes(maritalStatus));
}