var inputCountUp = document.getElementById('input-count-up');
var countTarget = inputCountUp.value;

var buttonStartCountUp = document.getElementById('button-start-count-up');

buttonStartCountUp.addEventListener('click', function () {

    console.log("clicked");

    if ((typeof (inputCountUp) === 'undefined') || (inputCountUp == null) || (!(countTarget > 1)))
        return;

    inputCountUp.value = 0;

    console.log(countTarget);
    for (let i = 0; i <= countTarget; i++) {
        let currentCounter = i;
        console.log(currentCounter);

        //setTimeout(updateCounter(currentCounter), 1000);

        setTimeout(function () {
            updateCounter(currentCounter);
        }, 10000);
    }
});

var updateCounter = function (countValue) {
    inputCountUp.value = countValue;
}