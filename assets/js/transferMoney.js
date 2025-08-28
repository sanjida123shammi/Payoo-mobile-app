// Transfer Money Process
document.getElementById('btn-send-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const sendAmount = getInputFieldValueById('transfer-amount');
        const pinNumber = getInputFieldValueById('transfer-pin-number');

        if (isNaN(sendAmount)) {
            alert('Please enter the amount you want to transfer');
            return;
        }
        
        if (pinNumber === 717270) {
            const balance = getTextValueById('balance');

            if (sendAmount > balance) {
                alert('Insufficient balance to transfer');
                return;
            }

            const newBalance = balance - sendAmount;
            document.getElementById('balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-red-100');
            div.classList.add('p-4');
            div.innerHTML = `
                <p class="font-semibold">
                    ${sendAmount} tk has been transferred. New balance is ${newBalance} tk.
                </p>
            `;
            document.getElementById('transaction-history').appendChild(div);

            // Clear the input fields
            clearInputField('transfer-amount');
            clearInputField('transfer-pin-number');
        } else {
            alert('Failed to transfer the money')
        }
    })