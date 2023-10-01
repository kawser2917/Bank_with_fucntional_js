function getInputFieldValueById(input) {
    const depositAmountField = document.getElementById(input)
    const depositAmountString = depositAmountField.value
    const depositAmount = parseFloat(depositAmountString)

    depositAmountField.value = ``
    return depositAmount

}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId)
    const elementString = element.innerText
    const Value = parseFloat(elementString)
    return Value
}

function setElementByid(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}