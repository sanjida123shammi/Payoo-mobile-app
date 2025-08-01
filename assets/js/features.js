// Displaying the add money form
document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
        // Show the add money form
        document.getElementById('add-money-form').classList.remove('hidden');

        // Hide the rests
        document.getElementById('cashout-form').classList.add('hidden');
    })


// Displaying the cash out form 
document.getElementById('btn-show-cashout')
    .addEventListener('click', function(){
        // Show the cash out form
        document.getElementById('cashout-form').classList.remove('hidden');

        // Hide the rests
        document.getElementById('add-money-form').classList.add('hidden')
    })