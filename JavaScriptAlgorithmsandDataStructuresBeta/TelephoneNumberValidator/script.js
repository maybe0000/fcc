const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

const checkInput = (input) => {
    const regex = (/^1?\s?(\d{3}|\(\d{3}\))(\s|-)?\d{3}(\s|-)?\d{4}$/);
    return regex.test(input);
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
    userInput.value = '';
};

checkBtn.addEventListener('click',() => printResult());
userInput.addEventListener('keydown',(e) => {
    if(e.key === "Enter") {
        printResult();
    }
});

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    userInput.value = '';
});
