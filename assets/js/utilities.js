// * Common Shared function

// To get the input field value
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputDigitValue = parseFloat(inputValue);

    return inputDigitValue;
}


// To get the text value
function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textDigitValue = parseFloat(textValue);

    return textDigitValue;
}


// clear the field value
function clearInputField(id) {
    document.getElementById(id).value = "";
}


// Show a section when the button is clicked
function showASection(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('transfer-money-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // Show that section that has been clicked
    document.getElementById(id).classList.remove('hidden');
}