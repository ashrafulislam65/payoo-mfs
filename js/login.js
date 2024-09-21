//console.log('login checked')
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber==="5" && pinNumber==="123")
    {
        console.log('you are logged in');
        // move to another page in same tab
        window.location.href = '/home.html';
    }
    else{
        alert('wrong phone number or pin');
    }
})