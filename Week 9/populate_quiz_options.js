var arrayQ1 = ["EXtreme HyperText Markup Language", "EXtensible HyperText Marking Language", "EXtensible HyperText Markup Language", "EXtra Hyperlinks and Text Markup Language"];
var arrayQ2 = ["</p><p>", "<p></p>", "<P></p>", "<P></P>"];
var arrayQ3 = ["<break/>", "<br />", "<br>"];

Object.freeze(arrayQ1);
Object.freeze(arrayQ2);
Object.freeze(arrayQ3);

var selectQ1 = document.getElementById('select-Q1');
var selectQ2 = document.getElementById('select-Q2');
var selectQ3 = document.getElementById('select-Q3');

addOptionsToSelect(arrayQ1, selectQ1);
addOptionsToSelect(arrayQ2, selectQ2);
addOptionsToSelect(arrayQ3, selectQ3);

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