const numberInput = document.getElementById("number");
const result = document.getElementById("output");
const button = document.getElementById("convert-btn");

const printResult = () => {
    if(!numberInput.value) {
        output.innerText = "Please enter a valid number.";
        output.classList.toggle("hidden"); 
        output.classList.toggle("warning"); 
        output.classList.toggle("normal-output"); 
        return;
    }
    result.innerHTML = numberInput.value;
};

button.addEventListener("click",printResult);
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        printResult();
    }
});
