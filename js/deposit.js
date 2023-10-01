function getInputFieldValueById(input){
     const depositAmountField = document.getElementById(input)
     const depositAmountString = depositAmountField.value
     const depositAmount = parseFloat(depositAmountString)
     return depositAmount

}

function getElementValueById(elementId){
     const element = document.getElementById(elementId)
     const elementString = element.innerText
     const Value = parseFloat(elementString)
     return Value
}

function setElementByid(elementId, value){
     const element = document.getElementById(elementId)
     element.innerText = value
}



document.getElementById("btn-deposit").addEventListener("click", function(){
     const newDepositAmount = getInputFieldValueById("deposit-amount")
     const previousDepositAmount = getElementValueById("total-deposit")
     const totalBalance = getElementValueById("total-balance")

     const newTotalBalance = totalBalance + newDepositAmount

     const currentDepositAmount = newDepositAmount + previousDepositAmount
     setElementByid("total-deposit", currentDepositAmount)
     setElementByid('total-balance',newTotalBalance)





})