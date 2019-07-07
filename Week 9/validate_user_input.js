function validateInput() {
    if (!validName() || !validNo() || !validEmail() || !validBook()) {
        return false;
    } else {
        return true
    }
}

function validName() {
    console.log("called");
    let inputName = document.getElementById('input-candidate-first-name');
    let name = inputName.value;

    if (!stringIsValid(name)) {
        alert("Please enter a valid name.");
        document.getElementById('input-candidate-first-name').focus();
        return false;
    }

    return true;
}

function stringIsValid(str) {
    return /^[a-zA-Z ']+$/.test(str);
}

function validNo() {
    if (!document.userSurvey.phone.value) {
        alert("Phone number missing. Please enter a valid phone number to continue.");
        document.userSurvey.phone.focus();
        return false;
    } else {
        var numbersOnly = "";
        var chars = "";
        var phoneNo = document.userSurvey.phone.value;

        for (i = 0; i < phoneNo.length; i++) {
            chars = phoneNo.substring(i, i + 1);
            if (chars >= "0" && chars <= "9") {
                numbersOnly = numbersOnly + chars;
            }
        }

        if (numbersOnly.length != 13) {
            alert("Incorrect phone number format.You must enter 13 numbers.");
            document.userSurvey.focus();
            return false;
        } else {
            var areacode = numbersOnly.substring(0, 2);
            var leading0 = numbersOnly.substring(2, 3);
            var exchange = numbersOnly.substring(3, 5);
            var ext1 = numbersOnly.substring(5, 9);
            var ext2 = numbersOnly.substring(9);
            var newNumber = ("+" + areacode + " " + "(" + leading0 +
                ")" + exchange + " " + ext1 + "-" + ext2);
            document.userSurvey.phone.value = newNumber;
            return true;
        }
    }
}

function validEmail() {
    if (!document.userSurvey.userEmail.value) {
        alert("E-mail Address missing. Please enter a valid E-mail address to continue.");
        document.userSurvey.userEmail.focus();
        return false;
    } else {
        var emailAddress = document.userSurvey.userEmail.value;
        var atLoc = emailAddress.indexOf("@", 1);
        var dotLoc = emailAddress.indexOf(".", atLoc + 2);
        var len = emailAddress.length;
        if (atLoc > 0 && dotLoc > 0 && len > dotLoc + 2) {
            return true;
        } else {
            alert("Invalid E-mail address! Please enter your email address again.");
            document.userSurvey.userEmail.focus();
            return false;
        }
    }
}

function validBook() {
    var bookChoice = "";
    var x = "";

    for (i = 0; i < 4; i++) {
        console.log("bookChoice" + i);
        if (document.userSurvey["bookChoice" + i].checked) {
            bookChoice = document.userSurvey['bookChoice' + i].value;
            x = x + "\n" + bookChoice;
        }
    }
    if (bookChoice == "") {
        alert("You must select at least one book category.");
        return false;
    } else {
        var userName = document.userSurvey.userName.value;
        var eMail = document.userSurvey.userEmail.value;
        var phoneNo = document.userSurvey.phone.value;

        var outputText = `Name: ${userName}\n`;
        outputText += `Email: ${eMail}\n`;
        outputText += `Phone: ${phoneNo}\n`;
        outputText += `Selected Book: ${bookChoice}\n`;

        let textAreaOutput = document.getElementById('textArea-output');
        textAreaOutput.value = outputText;

        return false;
    }
}