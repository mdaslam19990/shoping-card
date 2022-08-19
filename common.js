function updateCaseInputValue(increase, inputId) {
    const caseInputValue = document.getElementById(inputId);
    const caseInputValueString = caseInputValue.value;
    let caseInputValueStringToNumber = parseInt(caseInputValueString);
    let increaseValue;

    if (increase) {
        increaseValue = caseInputValueStringToNumber + 1;
    } else {
        increaseValue = caseInputValueStringToNumber - 1;
    }

    caseInputValue.value = increaseValue;
    return increaseValue;
}


function updateCaseNumber(newIncrease, inputId) {
    const newTotalValue = newIncrease * 59;
    const caseTotalValue = document.getElementById(inputId);
    caseTotalValue.innerText = newTotalValue;
}

function updatePhoneNumber(newIncrease, inputId) {
    const newTotalValue = newIncrease * 1219;
    const caseTotalValue = document.getElementById(inputId);
    caseTotalValue.innerText = newTotalValue;
}

function elementValueById(elementId) {
    const currentPhoneTotal = document.getElementById(elementId);
    const currenTotalString = currentPhoneTotal.innerText;
    const currenTotalStringToNumber = parseInt(currenTotalString);
    return currenTotalStringToNumber;
}

function setTextElementById(elementId, value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = elementValueById('phone-value')
    const currentCaseTotal = elementValueById('case-total-value')
    const newCurrentTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementById('sub-total', newCurrentTotal);

    const taxTotalString = (newCurrentTotal * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);
    setTextElementById('tax-total', taxTotal);

    const finalTotal = newCurrentTotal + taxTotal;
    setTextElementById('total', finalTotal)

}
