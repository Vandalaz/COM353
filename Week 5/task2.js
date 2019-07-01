var unis = ["Queens University Belfast", "University of Ulster"];
var campuses = ["Belfast", "Colraine", "Jordanstown", "Magee"];
var courses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology"];

// var selectUnis = document.getElementById('select-universities');
var radioUnis = document.getElementById('input-radio-unis');
var selectCampuses = document.getElementById('select-campuses');
var selecCourses = document.getElementById('select-courses');

var radioQueens = document.getElementsByName()

createRadioButtons(unis);
addOptionsToSelect(campuses, selectCampuses);
addOptionsToSelect(courses, selecCourses);

function nameRadioButtons(options)
{
    for(let i = 0; i <= options.length; i++)
    {
        let radioButton = document.getElementsByName(options[i]);
        let label = radioButton.get
         
    }
}


function createRadioButtons(options)
{
    for(let i = 0; i <= options.length; i++)
    {
        let radioButton = document.createElement('option');
        let label = document.createElement('label');

        radioButton.type = "radio";
        radioButton.value = options[i];

        label.appendChild(radioButton);
        label.appendChild(document.createTextNode("University Button"));

        radioUnis.appendChild(radioButton);
    }
}

// Modified function that now uses a for loop rather than foreach
function addOptionsToSelect(options, select) {
    let defaultElement = document.createElement('option');
    defaultElement.selected = true;
    defaultElement.disabled = true;
    defaultElement.textContent = " -- select an option -- "
    select.appendChild(defaultElement);

    for (let i = 0; i < options.length; i++)
    {
        let newElement = document.createElement('option');
        newElement.textContent = options[i];
        newElement.value = options[i];
        select.appendChild(newElement);
    }
}

function showConcatenatedInfo() {
    let selectedUni = selectUnis.options[selectUnis.selectedIndex].text;
    let selectedCampus = selectCampuses.options[selectCampuses.selectedIndex].text;
    let selectedCourse = selecCourses.options[selecCourses.selectedIndex].text;

    if (selectedUni === null || selectedUni === "" || selectedUni == "-- select an option --") {
        return "You have not selected a University."
    } else if (selectedCampus === null || selectedCampus === "" || selectedCampus == "-- select an option --") {
        return "You have not selected a Campus."
    } else if (selectedCourse === null || selectedCourse === "" || selectedCourse == "-- select an option --") {
        return "You have not selected a Course."
    }

    let finalString = "I'm a third year " + selectedCourse + " student in " + selectedUni + " at " + selectedCampus;

    return finalString;
}

let showButton = document.getElementById('button-Practical5_Q3b-showConcatenatedInfo');
showButton.addEventListener('click', function(){
    displayText(showConcatenatedInfo());
});

function displayText(inputText){
    document.write(inputText);
}