// Displaying the add money form
document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        showASection('add-money-section');
    })


// Displaying the cash out form 
document.getElementById('btn-show-cashout')
    .addEventListener('click', function(){
        showASection('cashout-section');
    })


// Displaying the transfer money form 
document.getElementById('btn-show-transfer')
    .addEventListener('click', function(){
        showASection('transfer-money-section');
    })


// Displaying the get bonus form 
document.getElementById('btn-show-bonus')
    .addEventListener('click', function(){
        showASection('get-bonus-section');
    })


// Displaying the transaction history 
document.getElementById('btn-show-transactions')
    .addEventListener('click', function(){
        showASection('transaction-section');
    })