//console.log('Home added')
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoneyInput=document.getElementById('add-money').value
    const pinNumberInput = document.getElementById('pin-number-input').value;
    if(pinNumberInput==='123')
    {
       
        const balance= document.getElementById('current-blance').innerText;
        const newBalance = parseFloat(balance)+parseFloat(addMoneyInput);
        document.getElementById('current-blance').innerText=newBalance;
    }
    else{
        alert('failed to add money please try again')
    }
    
})