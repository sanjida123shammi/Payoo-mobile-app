// Cash Out Process Step by step

document.getElementById('btn-withdraw-money').
    addEventListener('click', function(event){
        event.preventDefault();

        const cashoutAmount = document.getElementById('cashout-amount').value;
        const cashoutPin = document.getElementById('cashout-pin-number').value;

        if (cashoutPin === '717270') {
            const balance = document.getElementById('balance').innerText;
            const newBalance = parseFloat(balance) - parseFloat(cashoutAmount);

            document.getElementById('balance').innerText = newBalance;

            // Clear the input fields
            document.getElementById('cashout-amount').value = "";
            document.getElementById('cashout-pin-number').value = "";
        } 
        else {
            alert('Failed to withdraw!')
        }
})