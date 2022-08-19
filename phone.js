

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newIncrease = updateCaseInputValue(true, 'phone-field')
    updatePhoneNumber(newIncrease, 'phone-value')
    calculateSubTotal()

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newIncrease = updateCaseInputValue(false, 'phone-field')
    updatePhoneNumber(newIncrease, 'phone-value')
    calculateSubTotal()
})