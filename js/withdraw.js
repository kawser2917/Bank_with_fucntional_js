document.getElementById("btn-withdraw").addEventListener("click", function(){
    const newWithdrawvalue = getInputFieldValueById('withdraw-amount')
    const previousWithdraw = getElementValueById('total-withdraw')
    const totalBalance = getElementValueById("total-balance")

    if(newWithdrawvalue > totalBalance){
        alert("Ifsufficient Balance")
        return;
        }

    const newTotalBalance = totalBalance - newWithdrawvalue

    const currenTotalWithdraw = newWithdrawvalue + previousWithdraw

    setElementByid("total-withdraw",currenTotalWithdraw)
    setElementByid('total-balance',newTotalBalance)

})