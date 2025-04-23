// add money to the account

//step-1 add the event handler money form
document.getElementById('btn-add-money')
 .addEventListener('click', function(event){
    //prevent page reload after form submit
    event.preventDefault();

    // step -2 get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    const pinNumberInput = document.getElementById('input-pin-number').value;

    //step-3 validate pin number
    if(pinNumberInput === '1234'){
        console.log('Money added to the account');

        // step-4: get the current balance
        const balanceText = document.getElementById('account-Balance').innerText;
        const cleanedBalance = balanceText.replace(/,/g, ''); // remove commas
        const balanceNumber = parseFloat(cleanedBalance);

        //step-5: add money input to the balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const newBalance = addMoneyNumber + balanceNumber;

        //update UI/DOM with new balance
        document.getElementById('account-Balance').innerText = newBalance.toLocaleString(); // add commas
    }
    else{
        alert('Failed to add money! Please try again');
    }
});
