const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const checkIfPalindrome = (input) => {
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

    if (cleanInput === cleanInput.split('').reverse().join('')) {
        return true;
    }
    else {
        return false;
    }
};

const printResult = (event) => {
    event.preventDefault();
    const input = textInput.value;
    if (input === '') {
        alert('Please input a value');
        return;
    }
    if(checkIfPalindrome(input)) {
        result.innerText = `${input} is a palindrome.`;
    }
    else {
        result.innerText = `${input} is not a palindrome.`;
    }
};

checkButton.addEventListener("click",  printResult);

function reverseString(str) {
    return str.split('').reverse().join('');
}