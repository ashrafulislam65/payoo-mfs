//console.log('cashout added')
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutBalance = document.getElementById('cash-out').value;
    const cashOutPin = document.getElementById('pin-cash-out').value;
    if(cashOutPin==='123')
    {
        const currentBalance = document.getElementById('current-blance').innerText;
        const newBalance=parseFloat(currentBalance)-parseFloat(cashOutBalance);
        document.getElementById('current-blance').innerText=newBalance;
    }
    else{
        alert('failed to cash out please try again')
    }
    
})