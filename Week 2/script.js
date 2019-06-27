let mainContentDiv = document.getElementById('content');
let listColours = document.getElementById('list-colours');

listColours.addEventListener('mouseleave', event => {

    mainContentDiv.style.backgroundColor = 'White';
});

let listItems = document.getElementById("change-background-colours").getElementsByTagName("li");

console.log(listItems);

for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', event => {
        if (isColor(listItems[i].InnerHtml)) {
            mainContentDiv.style.backgroundColor = listItems[i].InnerHtml;
        }
    });
}

function isColor(strColor) {
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
}