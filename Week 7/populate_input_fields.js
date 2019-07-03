var maritalStatuses = ["Single", "Married"];
Object.freeze(maritalStatuses);

var selectMaritalStatus = document.getElementById('select-marital-status');

addOptionsToSelect(maritalStatuses, selectMaritalStatus);

function addOptionsToSelect(options, select) {
    let defaultElement = document.createElement('option');
    defaultElement.selected = true;
    defaultElement.disabled = true;
    defaultElement.textContent = " -- select an option -- "
    select.appendChild(defaultElement);

    options.forEach(function (option) {
        let newElement = document.createElement('option');
        console.log(option);
        newElement.textContent = option;
        newElement.value = option;
        select.appendChild(newElement);
    });
}