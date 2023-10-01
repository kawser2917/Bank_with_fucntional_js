document.getElementById("btn-withdraw").addEventListener('click', function(){
    const newWithdrawAmountField = document.getElementById("withdraw-amount")
    const newWithdrawAmountString = newWithdrawAmountField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    const previousWithdrawAmountElement = document.getElementById("total-withdraw")
    const previousWithdrawAmountString = previousWithdrawAmountElement.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString)

    const totalBalanceElement = document.getElementById("total-balance")
    const totalBalanceString = totalBalanceElement.innerText
    const totalBalance = parseFloat(totalBalanceString)

    if(newWithdrawAmount>totalBalance){
        alert("You withdraw amount is more than balance")
        newWithdrawAmountField.value = ``
        return;
    }
    const currentWithdrawAmount = newWithdrawAmount + previousWithdrawAmount
    previousWithdrawAmountElement.innerText = currentWithdrawAmount

    const newTotalBalance = totalBalance - newWithdrawAmount
    totalBalanceElement.innerText = newTotalBalance

    newWithdrawAmountField.value = ``

})