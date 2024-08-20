const changeButton = document.getElementById('changeButton');
const displayText = document.getElementById('displayText');
const container = document.getElementById('colorBox');

let isOriginal = true;

changeButton.addEventListener('click', () => {
    if (isOriginal) {
        container.style.backgroundColor = '#7fffd4';
        container.style.borderColor = '#20b2aa';
        displayText.textContent = 'Kumar';
        changeButton.textContent = 'Press Again!';
        changeButton.style.backgroundColor = '#20b2aa';
        changeButton.style.borderColor = '#fff';
    } else {
        container.style.backgroundColor = '#ffb6c1';
        container.style.borderColor = '#ff69b4';
        displayText.textContent = 'Aditya';
        changeButton.textContent = 'Press Me!';
        changeButton.style.backgroundColor = '#ff69b4';
        changeButton.style.borderColor = '#fff';
    }
    isOriginal = !isOriginal;
});
