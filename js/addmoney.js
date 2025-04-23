

document.getElementById('btn-add-money')
  .addEventListener('click', function(event){
    event.preventDefault();

    // get money and pin number
   const addMoney =  document.getElementById('input-add-money').value;
   const addMoneyNumber = parseFloat(addMoney); 
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(addMoney, pinNumber);

    if(pinNumber === '1234'){
        //console.log('money added to the account');
       const balance = document.getElementById('account-Balance').innerText;
       console.log(balance);
       const balanceNumber = parseFloat(balance);

       //New Balance
       const newBalance = addMoneyNumber + balanceNumber;

       // Update the dom with updated balance
       document.getElementById('account-Balance').innerText = newBalance;
    }
    else{
        alert('Failed to added money');
    }
  });