// Cash Out Process Step by step

document.getElementById('btn-withdraw-money').
    addEventListener('click', function(event){
        event.preventDefault();

        const cashoutAmount = getInputFieldValueById('cashout-amount');
        const cashoutPin = getInputFieldValueById('cashout-pin-number');

        // Preventing form submit if the input is a NaN
        if (isNaN(cashoutAmount)) {
            alert('Please enter the cashout amount');
            return;
        };        

        // Pin number verifying
        if (cashoutPin === 717270) {
            const balance = getTextValueById('balance');

            // Alert of Insufficient balance
            if (cashoutAmount > balance) {
                alert('You have insufficient balance');
                return;
            };

            const newBalance = balance - cashoutAmount;

            document.getElementById('balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-red-200');
            div.classList.add('p-4');
            div.innerHTML = `
                <p class="font-semibold">
                    ${cashoutAmount} tk has been deducted. New balance is ${newBalance} tk.
                </p>
            `;
            document.getElementById('transaction-history').appendChild(div);

            // Clear the input fields
            clearInputField('cashout-amount');
            clearInputField('cashout-pin-number');
        } 
        else {
            alert('Failed to withdraw!');
        }
})