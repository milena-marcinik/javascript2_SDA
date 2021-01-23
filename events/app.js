let firstName = '';

function displayText(){
    console.log(`Imie: ${firstName}`);
    document.getElementById('btn').removeEventListener('click', displayText)
}

function handleInput(event){
    firstName = event.target.value;
    console.log('On input: ', event.target.value)
}

document.getElementById('btn').addEventListener('click', displayText);
document.getElementById('firstName').addEventListener('change', handleInput);

