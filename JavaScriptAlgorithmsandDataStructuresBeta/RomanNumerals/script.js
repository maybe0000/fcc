const numberInput = document.getElementById("number");
const output = document.getElementById("output");
const button = document.getElementById("convert-btn");

document.addEventListener("DOMContentLoaded", () => {
    output.classList.add("hidden");
})

const setWarning = () => {
    output.classList.remove("hidden"); 
    output.classList.add("warning"); 
};

const removeWarning = () => {
    output.classList.remove("warning"); 
    output.classList.remove("hidden"); 
};

const convertToRoman = (num) => {

    const arr = [['M',1000],['CM',900],['D',500],['CD',400],
                 ['C',100],['XC',90],['L',50],['XL',40],
                 ['X',10],['IX',9],['V',5],['IV',4],['I',1]];

    const parts = [];

    for (const [letter,value] of arr) {
        while(num >= value) {
            parts.push(letter);
            num -= value;
        }
    }

    return parts.join("");
};

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
    else if (numberInput.value >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999.";
        setWarning();
        return;
    }
    else {
        output.innerHTML = convertToRoman(numberInput.value);
        removeWarning();
    }
};

button.addEventListener("click",printResult);
numberInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        printResult();
    }
});
