var unis = ["Queens University Belfast", "University of Ulster"];
var campuses = ["Belfast", "Colraine", "Jordanstown", "Magee"];
var courses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology"];

var selectUnis = document.getElementById('select-universities');
var selectCampuses = document.getElementById('select-campuses');
var selecCourses = document.getElementById('select-courses');

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

    let finalString = "I'm a third year " + selectedCourse + " student in " + selectedUni + " at " + selectedCampus;

    return finalString;
}

let showButton = document.getElementById('button-show');
showButton.addEventListener('click', function(){
    alert(showConcatenatedInfo());
});