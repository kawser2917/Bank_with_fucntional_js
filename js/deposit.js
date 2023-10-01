document.getElementById("btn-deposit").addEventListener("click", function(){
     const newDepositAmount = getInputFieldValueById("deposit-amount")
     const previousDepositAmount = getElementValueById("total-deposit")
     const totalBalance = getElementValueById("total-balance")


     const newTotalBalance = totalBalance + newDepositAmount

     const currentDepositAmount = newDepositAmount + previousDepositAmount
     setElementByid("total-deposit", currentDepositAmount)
     setElementByid('total-balance',newTotalBalance)





})