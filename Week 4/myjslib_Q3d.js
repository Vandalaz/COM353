var unis = ["Queens University Belfast", "University of Ulster"];
var campuses = ["Belfast", "Colraine", "Jordanstown", "Magee"];
var courses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology"];

var selectUnis = document.getElementById('select-universities');
var selectCampuses = document.getElementById('select-campuses');
var selecCourses = document.getElementById('select-courses');
var inputName = document.getElementById('input-name');

addOptionsToSelect(unis, selectUnis);
addOptionsToSelect(campuses, selectCampuses);
addOptionsToSelect(courses, selecCourses);

function addOptionsToSelect(options, select) {
    let defaultElement = document.createElement('option');
    defaultElement.selected = true;
    defaultElement.disabled = true;
    defaultElement.textContent = " -- select an option -- "
    select.appendChild(defaultElement);

    options.forEach(function (option) {
        let newElement = document.createElement('option');
        newElement.textContent = option;
        newElement.value = option;
        select.appendChild(newElement);
    });
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

    let finalString = "Hi I'm " + inputName.value + "! I'm a third year " + selectedCourse + " student in " + selectedUni + " at " + selectedCampus;

    return finalString;
}

let showButton = document.getElementById('button-Practical5_Q3d-showConcatenatedInfo');
showButton.addEventListener('click', function () {
    alert(showConcatenatedInfo());
});

let showGreeting = document.getElementById('button-Practical5_Q3d-showGreeting');
showGreeting.addEventListener('click', function () {
    if (inputName.value == "") {
        alert("You have not entered a name.")
    } else {
        alert("Hi " + inputName.value + ", welcome to Q3d!");
    }
})