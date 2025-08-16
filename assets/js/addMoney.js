// Add money process
document.getElementById('btn-add-money').
    addEventListener('click', function(event){
        event.preventDefault();

        // const amountToAdd = document.getElementById('adding-amount').value;
        const amountToAdd = getInputFieldValueById('adding-amount');
        const pinNumber = getInputFieldValueById('pin-number');

        // Preventing form submit if th e input is a NaN
        if (isNaN(amountToAdd)) {
            alert('Please enter the amount you want to add');
            return;
        }

        // Pin number verifying
        if (pinNumber === 717270) {
            // const balance = document.getElementById('balance').innerText;
            const balance = getTextValueById('balance');

            // const newBalance = parseFloat(balance) + parseFloat(amountToAdd);
            const newBalance = balance + amountToAdd;

            document.getElementById('balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-green-200');
            div.classList.add('p-4');
            div.innerHTML = `
                <p class="font-semibold">
                    ${amountToAdd} tk has been added. New balance is ${newBalance} tk.
                </p>
            `
            document.getElementById('transaction-history').appendChild(div);

            // todo: Clear the input fields
            clearInputField('adding-amount');
            clearInputField('pin-number');
        } 
        else {
            alert('Failed to add money. Please try again.')
        }
    })