document.getElementById("btn-deposit").addEventListener("click", function(){
     const depositAmountField = document.getElementById("deposit-amount")
     const newDepositAmountString = depositAmountField.value
     const newDepositAmount = parseFloat(newDepositAmountString)
     console.log(newDepositAmount)

     const previousDepositAmountElement = document.getElementById("total-deposit")
     const previousDepositAmountElementString = previousDepositAmountElement.innerText
     const previousDepositAmount = parseFloat(previousDepositAmountElementString)
     console.log(previousDepositAmount)

     const currentDepositAmount = previousDepositAmount + newDepositAmount
     console.log(currentDepositAmount)
     previousDepositAmountElement.innerText = currentDepositAmount




     const previousTotalBalanceElement = document.getElementById("total-balance")
     const previousTotalBalanceString = previousTotalBalanceElement.innerText
     const previousTotalBalance = parseFloat(previousTotalBalanceString)

     const newTotalBalance = previousTotalBalance + newDepositAmount
     previousTotalBalanceElement.innerText = newTotalBalance

     depositAmountField.value =  ``

  

})