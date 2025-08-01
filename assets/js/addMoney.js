// Add money process
document.getElementById('btn-add-money').
    addEventListener('click', function(event){
        event.preventDefault();

        const amountToAdd = document.getElementById('adding-amount').value;

        const pinNumber = document.getElementById('pin-number').value;

        if (pinNumber === '717270') {
            const balance = document.getElementById('balance').innerText;
            const newBalance = parseFloat(balance) + parseFloat(amountToAdd);

            document.getElementById('balance').innerText = newBalance;

            // Clear the input fields
            document.getElementById('adding-amount').value = "";
            document.getElementById('pin-number').value = "";
        } else {
            alert('failed to add money')
        }
    })