const billAmount = document.getElementById("bill");
const numberOfpeople = document.getElementById("people");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tipAmount");
const billTotalPerson = document.getElementById("total");
const resetButton = document.getElementById("resetBtn");
const buttons = document.querySelectorAll(".tip-btns button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0, tipvalue.length - 1);

        if (billAmount.value === "") return;
        if (numberOfpeople.value === "") numberOfpeople.value = 1;

        calculeteTip(
            parseFloat(billAmount.value),
            parseFloat(tipvalue),
            parseFloat(numberOfpeople.value)
        );
    });
});

customTipPercentage.addEventListener("blur", (e) => {
    if (billAmount.value === "") {
        resetEverything();
        return;
    }
    if (numberOfpeople.value === "") numberOfpeople.value = 1;

    calculateTip(
        parseFloat(billAmount.value),
        parseFloat(e.target.value),
        parseInt(numberOfpeople.value)
    );
});

function calculeteTip(billAmount, tipPercentage, numberOfpeople) {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfpeople;
    let tip = Math.floor(tipAmount *  100) / 100;
    tip = tip.toFixed(2);

    let totalAmount = (tipAmount * numberOfpeople + billAmount) / numberOfpeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerson.innerHTML = `$${totalAmount}`;
}

resetButton.addEventListener("click", resetEverything);
function resetEverything() {
    billTipAmount.innerHTML = "$0.00";
    billTotalPerson.innerHTML = "$0.00";
    billAmount.value = "";
    numberOfpeople.value = "";
    customTipPercentage.value = "";
}