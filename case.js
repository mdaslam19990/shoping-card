document.getElementById('btn-case-plus').addEventListener('click', function(){

    const newIncrease = updateCaseInputValue(true, 'case-field')
    updateCaseNumber(newIncrease, 'case-total-value')
    calculateSubTotal()
     
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newIncrease = updateCaseInputValue(false, 'case-field')
    updateCaseNumber(newIncrease, 'case-total-value')
    calculateSubTotal()
})