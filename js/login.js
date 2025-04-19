document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;

    console.log('Phone:', phone);
    console.log('PIN:', pin);

    // step-4 validate phone and pin
    // this is temporary.. you should not use this
    if(phone === '5' && pin === '1234'){
        console.log('You are logged in');
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
});
