// Get bonus process
document.getElementById('btn-get-bonus')
    .addEventListener('click', function(event){
        event.preventDefault();

        const getBonus = document.getElementById('bonus-coupon').value;
        // console.log(isNaN(getBonus));

        if (isNaN(getBonus) === false) {
            alert('Please enter the coupon code');
            return;
        }            
        else if (getBonus === 'CGRFANJH42S' || 'DGJB562SF35') {
            const balance = getTextValueById('balance');
            const newBalance = balance + 5000;

            document.getElementById('balance').innerText = newBalance;

            // add to transaction history
            const div = document.createElement('div');
            div.classList.add('bg-green-100');
            div.classList.add('p-4');
            div.innerHTML = `
                <p class="font-semibold">
                    You've got 5000 tk as bonus. New balance is ${newBalance} tk.
                </p>
            `
            document.getElementById('transaction-history').appendChild(div);

            // clear the input field
            clearInputField('bonus-coupon');
        }
        else{
            alert('Invalid coupon code')
        }
    })