const result = document.getElementById("result");
const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

const printResult = (event) => {
    event.preventDefault();
    const input = textInput.value;
    result.innerText = `${input}`;
};

checkButton.addEventListener("click",  printResult);
