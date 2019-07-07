var correctAnswers = ["EXtensible HyperText Markup Language", "<p></p>", "<br>"];

function getSelectValue(formname, selectname) {
    var theMenu = document[formname][selectname];
    var selecteditem = theMenu.selectedIndex;
    return theMenu.options[selecteditem].value;
}

function checkScore() {
    let formName = "onlineQuiz";

    let selectQ1Value = getSelectValue(formName, "selectQ1");
    let selectQ2Value = getSelectValue(formName, "selectQ2");
    let selectQ3Value = getSelectValue(formName, "selectQ3");

    let score = totalUpScore(selectQ1Value, selectQ2Value, selectQ3Value);

    let textScore = document.getElementById('text-score');
    textScore.value = score;

    return false;
}

function totalUpScore(selectQ1Value, selectQ2Value, selectQ3Value) {
    let score = 0;

    if (selectQ1Value === correctAnswers[0]) {
        score += 1;
    }

    if (selectQ2Value === correctAnswers[1]) {
        score += 1;
    }

    if (selectQ3Value === correctAnswers[2]) {
        score += 1;
    }

    return score;
}