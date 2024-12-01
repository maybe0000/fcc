const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

const setWarning = () => {
    output.classList.add("hidden"); 
    output.classList.add("warning"); 
};

const removeWarning = () => {
    output.classList.remove("hidden"); 
    output.classList.remove("warning"); 
}

const printResult = () => {
    

    if(!numberInput.value) {
        output.innerText = "Please enter a valid number.";
        setWarning();
        return;
    }
    else if (numberInput.value < 0) {
        output.innerText = "Please enter a number greater than or equal to 1.";
        setWarning();
        return;
    }
    else {
        output.innerHTML = numberInput.value;
        removeWarning();
    }
};

button.addEventListener("click",printResult);
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        printResult();
    }
});
