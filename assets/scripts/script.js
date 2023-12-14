// Get the modal and buttons
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Function to open the modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners for the buttons
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

//calculator conversion 
function convert(conversionType) {
    //collects input value and returns it as a number//
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const resultField = document.getElementById('result');

    switch (conversionType) {
        case 'Fahrenheit to Celsius':
            resultField.value = ((inputValue - 32) * 5 / 9).toFixed(2) + ' °C';
            break;
        case 'Feet to Miles':
            resultField.value = (inputValue / 5280).toFixed(6) + ' Miles';
            break;
        case 'Inches to Centimeters':
            resultField.value = (inputValue * 2.54).toFixed(2) + ' cm';
            break;
        default:
            resultField.value = 'Invalid conversion';
    }
}

// dark mode and light mode switch button 
const modeSwitch = document.getElementById('modeSwitch');

if (modeSwitch) {
    console.log(modeSwitch)
    modeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
    });
}

