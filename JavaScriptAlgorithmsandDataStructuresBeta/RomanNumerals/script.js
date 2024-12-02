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
    const m = Math.floor(num/1000);
    const d = num % 1000;
    const c = Math.floor( ((num % 1000) - 500) / 100 );
    const ccc = Math.floor(d/100);
    const x = num % 100;
    const l = Math.floor( ((num % 100) - 50) / 10 );
    const xxx = Math.floor(x/10);
    const i = num % 10;
    const v = Math.floor(((num % 10) - 5));
    const iii = Math.floor(i);

    return    'M'.repeat(m) 
            + (d >= 900 ? 'CM' : d >= 500 ? 'D'+'C'.repeat(c) : d >= 400 ? 'CD' : 'C'.repeat(ccc))
            + (x >= 90 ? 'XC' : x>= 50 ? 'L'+'X'.repeat(l) : x>=40 ? 'XL' : 'X'.repeat(xxx))
            + (i >= 9 ? 'IX' : i>= 5 ? 'V'+'I'.repeat(v) : i>=4 ? 'IV' : 'I'.repeat(iii))
            ;
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
