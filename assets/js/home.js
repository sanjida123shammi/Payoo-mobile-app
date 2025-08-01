/*  Step-1: (a) Add event handler
        ->  (b) prevent page from reloading after form submission

    Step-2: (a) Get the value of the amount to be added
        ->  (b) Get the pin number provided

    Step-3: Verify Pin number
    
    Step-4: Get the current Balance

    Step-5: Add the ammount with the current balance

    Step-6: Update the balance in the UI/DOM
*/ 

// Add Money Process
// Step-1: (a)
document.getElementById('btn-add-money').
    addEventListener('click', function(event){
        // Step-1: (b)
        event.preventDefault();

        // Step-2: (a)
        const addedAmount = document.getElementById('adding-amount').value;

        // Step-2: (b)
        const pinNumber = document.getElementById('pin-number').value;
        
        // Step-3
        // Wrong way of verifying
        if (pinNumber === "717270") {
            // Step-4:
            const balance = document.getElementById('balance').innerText;

            // Step-5:
            const newBalance = parseFloat(balance) + parseFloat(addedAmount);
            console.log(newBalance);

            // Step-6:
            document.getElementById('balance').innerText = newBalance;
        } else {
            alert('Invalid Pin number')
        }
    })