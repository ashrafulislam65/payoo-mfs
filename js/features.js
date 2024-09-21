//console.log('features file added')
document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    console.log(' show cashout ')
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
//show add money form and hide cash out
document.getElementById('btn-show-add-money-form').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})