// Login Button

// Step-1: Set event handler
// document.getElementById('btn-login')
//     .addEventListener('click', function(event){
//         // Step-2: Prevent default behavior (prevent reloading browser)
//         event.preventDefault();   // --Vejal to beginners

//         // Step-3: Get the phone number
//         const phoneNumber = document.getElementById('phone-number').value;
//         const pinNumber = document.getElementById('pin-number').value;

//         // This is a temporary method. In future we will never try this method
//         if (phoneNumber === '01720724292' && pinNumber === '15973') {
//             console.log('Congrats, you are logged in');
//         }
//         else{ 
//             alert('Invalid User');
//         }
//     })

document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        if (phoneNumber === '01715724292' && pinNumber === '717270') {
            window.location.href = '/home.html'
        }
    })