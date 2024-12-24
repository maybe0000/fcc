const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

const checkInput = (input) => {
    const noOfDigits = input.replace(/[-()\s]+/g,'').length;
    if(noOfDigits === 11) {
        if(input.charAt(0) !== '1') {
            return false;
        }
        else {
            return true;
        }
    } else if (noOfDigits === 10) {
            return true;
    } else {
        return false;
    }
};

const printResult = () => {
    if(!userInput.value) {
        alert("Please provide a phone number");
    } else {
        if(checkInput(userInput.value)) {
            resultsDiv.innerHTML += `Valid US number: ${userInput.value}<br></br>`;
        }
        else {
            resultsDiv.innerHTML += `Invalid US number: ${userInput.value}<br></br>`;
        }
    }
};

checkBtn.addEventListener('click',() => printResult());
userInput.addEventListener('keydown',(e) => {
    if(e.key === "Enter") {
        printResult();
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
